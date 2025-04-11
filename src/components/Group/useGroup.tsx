import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { GroupProps } from "./Group";

export const useGroup = (items: GroupProps['items'], showAll: boolean) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const trackerRef = useRef<HTMLDivElement>(null);
	const [visibleCount, setVisibleCount] = useState(0);
	const { windowWidth } = useWindowSize();

	useEffect(() => {
		const updateVisibleCount = () => {
			if(showAll) {
				setVisibleCount(items.length);	
				return;
			}
			if (parentRef.current && trackerRef.current) {
				const parentWidth = parentRef.current.offsetWidth;
				const trackerWidth = trackerRef.current.scrollWidth;
				const countLabelOffset = (
					trackerRef.current.querySelector('.count-label') as HTMLElement
				).scrollWidth;

				let totalChildrenWidth = 0;
				for (let i = 0; i < trackerRef.current.children.length; i++) {
					const child = trackerRef.current.children[i] as HTMLElement;
					totalChildrenWidth += child.offsetWidth || 0;
				}

				const totalGapWidth = trackerWidth - totalChildrenWidth;
				const gap = totalGapWidth / (trackerRef.current.children.length - 1);

				let totalWidth = 0;
				let count = 0;

				if (trackerWidth - countLabelOffset <= parentWidth) {
					count = items.length;
				} else {
					for (let i = 0; i < trackerRef.current.children.length; i++) {
						const child = trackerRef.current.children[i] as HTMLElement;
						if (!child || child.classList.contains('count-label')) {
							continue;
						}
						const childWidth = child?.offsetWidth || 0;

						totalWidth += childWidth + (i > 0 ? gap : 0);

						if (totalWidth + gap * 2 <= parentWidth - countLabelOffset) {
							count++;
						} else {
							break;
						}
					}
				}

				setVisibleCount(count);
			}
		};

		updateVisibleCount();
	}, [items, windowWidth]);

	return { parentRef, trackerRef, visibleCount };
};
