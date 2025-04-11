import React, { useState } from "react";
import { Box, BoxProps } from "@mui/material";

import { Chip } from "../../index";
import { useGroup } from "./useGroup";
import OverflowGroup from "./OverflowGroup";

export interface GroupProps extends BoxProps {
    items: { label: string; value: string }[];
    showAll?: boolean;
}

const Group = ({ items, showAll = false, ...otherProps }: GroupProps) => {
    const { parentRef, trackerRef, visibleCount } = useGroup(items, showAll);

    const hiddenCount = items.length - visibleCount;
    const visibleItems = items.slice(0, visibleCount);
    const hiddenItems = items.slice(visibleCount);
    const [tooltipShown, setTooltipShown] = useState(false);

    if (!items?.length) return null;

    return (
        <Box
            ref={parentRef}
            className={"chip-group max-w-full overflow-hidden leading-4"}
            {...otherProps}
        >
            <div ref={trackerRef} className={`flex items-center gap-1 ${showAll? "flex-wrap" : ""}`}>
                {visibleItems.map((item, i) => (
                    <Chip key={i}>{item.label}</Chip>
                ))}
                <OverflowGroup
                    onOpen={() => setTooltipShown(true)}
                    onClose={() => setTooltipShown(false)}
                    items={hiddenItems}
                >
                    <Chip
                        className={`count-label bg-defaults-surface-fore cursor-pointer ml-1 min-w-max w-fit
                        ${hiddenCount <= 0 ? "pointer-events-none opacity-0" : ""} 
                        ${tooltipShown ? "bg-defaults-surface-hover" : ""}`}
                    >
                        {`+${hiddenCount}`}
                    </Chip>
                </OverflowGroup>
                {hiddenItems.map((item, i) => (
                    <Chip key={visibleCount + i} className="opacity-0">
                        {item.label}
                    </Chip>
                ))}
            </div>
        </Box>
    );
};

export default Group;
