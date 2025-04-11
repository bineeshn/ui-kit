import React from "react";
import {
	Pagination as MUIPagination,
	PaginationItem,
	PaginationRenderItemParams,
} from "@mui/material";
import {
	useGridApiContext,
	useGridSelector,
	gridPageCountSelector,
	gridPageSelector,
	gridRowCountSelector,
	gridPageSizeSelector,
} from "@mui/x-data-grid";
import PrevIcon from "./PrevIcon";
import NextIcon from "./NextIcon";

const CustomPaginationItem = (item: PaginationRenderItemParams) => (
	<PaginationItem
		className={
			`${item.selected ? 'text-white border bg-defaults-surface-fore' : 'text-defaults-font-secondary border-0 bg-transparent'} 
			mx-[0.1rem] h-6 min-w-6 border-defaults-border-default text-xs leading-normal`
		}
		components={{
			previous: PrevIcon,
			next: NextIcon,
		}}
		{...item}
	/>
);

export const CustomPaginationInfo = ({
	page,
	pageSize,
	totalRows,
}: {
	page: number;
	pageSize: number;
	totalRows: number;
}) => {
	const firstRowCount = page * pageSize + 1;
	const lastRowCount = Math.min((page + 1) * pageSize, totalRows);
	return (
		<div className="absolute right-5 text-white ">
			<span>
				{firstRowCount}-{lastRowCount} <span className="text-defaults-font-secondary"> of</span> {totalRows}{" "}
				<span className="text-defaults-font-secondary">shown</span>
			</span>
		</div>
	);
};

const Pagination = () => {
	const apiRef = useGridApiContext();

	const page = useGridSelector(apiRef, gridPageSelector);
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);
	const totalRows = useGridSelector(apiRef, gridRowCountSelector);
	const pageSize = useGridSelector(apiRef, gridPageSizeSelector);

	const handlePageChange = (
		_event: React.ChangeEvent<unknown>,
		value: number
	) => {
		apiRef.current.setPage(value - 1);
	};

	return (
		<div className="z-35 absolute bottom-2 flex w-full items-center justify-center">
			<MUIPagination
				count={pageCount}
				page={page + 1}
				onChange={handlePageChange}
				renderItem={(item) => <CustomPaginationItem {...item} />}
				siblingCount={1}
				boundaryCount={1}
			/>
			<CustomPaginationInfo
				page={page}
				pageSize={pageSize}
				totalRows={totalRows}
			/>
		</div>
	);
};

export default Pagination;
