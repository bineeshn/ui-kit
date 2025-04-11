import { Box, Typography } from "@mui/material";
import {
    DataGrid,
    GridColDef,
    GridEventListener,
    GridPaginationModel,
    GridRowParams,
    GridRowSelectionModel,
    GridSortModel,
    GridToolbar,
} from "@mui/x-data-grid";
import React, { ReactNode, useEffect, useState } from "react";

import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";
import styled from "styled-components";
import { CircularLoader, Checkbox, Pagination, Group } from "../../index";
import { IconCell, TitleCell } from "./Cell";

export const remToPx = (rem: number) => {
    const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );
    return rem * rootFontSize;
};

type CustomGridColDef = GridColDef & {
    type?: string;
    icon?: boolean;
};



const StyledContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-top: 10rem; 
    height: 12.5rem; 
`;

const StyledHeader = styled(Typography)`
    text-align: center;
    line-height: 2.5rem;
    color: #acadad; 
`;

const StyledMessage = styled(Typography)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
    color: #acadad; 
`;

export const NoRowsOverlay = ({
    customOverlay,
    noRowOverlayHeader,
    noRowOverlayMessage,
}: {
    customOverlay?: ReactNode;
    noRowOverlayHeader?: string;
    noRowOverlayMessage?: string;
}) => {
    return (
        <StyledContainer>
            {customOverlay ? (
                customOverlay
            ) : (
                <>
                    <StyledHeader variant="h6" className="font-semibold">
                        {noRowOverlayHeader || "Welcome"}
                    </StyledHeader>
                    <StyledMessage>
                        {noRowOverlayMessage || "No Data Available"}
                    </StyledMessage>
                </>
            )}
        </StyledContainer>
    );
};

interface DataTableProps {
    showCustomOverlay?: boolean;
    showSelectedRow?: boolean;
    height: number | string;
    itemsPerPage: number;
    rows: any;
    rowHeight?: number;
    columns: CustomGridColDef[];
    onTableRowClick?: (rowData: any) => void;
    paginationMode: "client" | "server";
    fetchPaginatedData?: any;
    showPagination?: boolean;
    sortType?: any;
    sortFieldName?: any;
    noRowOverlayHeader?: string;
    noRowOverlayMessage?: string;
    disabledRowIds?: any[];
    totalRecords?: number;
    initialState?: GridInitialStateCommunity;
    removeRowSelection?: boolean;
    slots?: any;
    customOverlay?: ReactNode;
    rowHeightAuto?: boolean;
    rowClickable?: boolean;
    checkboxSelection?: boolean;
    onCheckboxSelection?: (checkedRows: any[]) => void;
    loading?: boolean;
    selectedUrlRowId?: string;
    apiRef?: any;
    getRowId?: (row: any) => string;
    onPageChange?: (newPage: number) => void;
    hideFooterPagination?: boolean;
    pageSize?: number;
}

const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root {
    font-family: inherit;
    background-color: #01141a;
    color: white;
    --DataGrid-containerBackground: #01141a;
    --DataGrid-rowBorderColor: #192a30;
    border: none;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    .MuiDataGrid-virtualScroller {
      .MuiDataGrid-topContainer {
        &::after {
          display: none;
        }
        .MuiDataGrid-columnHeader {
          background-color: #01141a;
          border-bottom: 1px solid #7d7f80;
          min-height: 2.5rem;
          max-height: 2.5rem;
          padding: 0rem 0.5rem;

          &[aria-colindex="1"] {
            padding-left: 1.5rem;
          }
          &[aria-colindex]:last-of-type{
            padding-left: 1.5rem;
          }

          &:focus,
          &:focus-within {
            outline: none;
          }
          .MuiDataGrid-columnSeparator {
            display: none;
          }
          .MuiDataGrid-columnHeaderDraggableContainer{
            min-width: 1.875rem;
          }
        }
        .MuiDataGrid-filler {
          border-bottom: 1px solid #7d7f80;
        }
        .MuiDataGrid-scrollbarFiller {
          display: none;
        }
      }
      .MuiDataGrid-virtualScrollerContent {
        .MuiDataGrid-row {
          color: #acadad;
          &:hover {
            background-color: #192a30;
          }
          &.Mui-selected {
            background-color: #162A29;
            &:hover {
                background-color: #1A423F;
            }
          }
          .MuiDataGrid-cell {
            border-bottom: 1px solid #192A30;
            white-space: normal;
            word-wrap: break-word;
            align-content: center;
            padding: 0.75rem 0.5rem;
            display: flex;
            gap: 1rem;
            align-items: center;
            &[aria-colindex="1"] {
              padding-left: 1.5rem;
            }
            &[aria-colindex]:last-of-type{
              padding-left: 1.5rem;
            }
            &:focus,
            &:focus-within {
              outline: none;
            }
          }
          &:last-of-type {
            border-bottom: none;
          }
        }
      }
    }
    .MuiDataGrid-footerContainer {
      border-top: 1px solid #7d7f80;
      min-height: 2.5rem;
    }
    .MuiDataGrid-scrollbar {
      display: none;
    }
  }
`;

const Table: React.FC<DataTableProps> = ({
    showSelectedRow = true,
    sortFieldName,
    sortType,
    rows,
    columns,
    onTableRowClick,
    height,
    itemsPerPage,
    paginationMode,
    fetchPaginatedData,
    totalRecords,
    showPagination = true,
    noRowOverlayMessage,
    noRowOverlayHeader,
    disabledRowIds,
    rowHeight = 4,
    initialState = {},
    removeRowSelection,
    slots,
    customOverlay,
    rowHeightAuto,
    rowClickable = false,
    checkboxSelection,
    onCheckboxSelection,
    loading = false,
    selectedUrlRowId,
    apiRef,
    getRowId,
    onPageChange,
    hideFooterPagination = false,
    pageSize = 5,
}) => {
    const [sortModel, setSortModel] = useState<GridSortModel>([]);
    const [selectedRowId, setSelectedRowId] = useState<any>();
    const [paginationModel, setPaginationModel] = useState({
        pageSize: itemsPerPage,
        page: 0,
    });
    const [updatedColumn, setUpdatedColumn] = useState<CustomGridColDef[]>([]);

    const handleRowClick: GridEventListener<"rowClick"> = (
        params: GridRowParams
    ) => {
        setSelectedRowId(params.id);
        onTableRowClick && onTableRowClick(params.row);
    };

    const handlePaginationChange = (newPaginationModel: GridPaginationModel) => {
        setPaginationModel(newPaginationModel);

        if (onPageChange) onPageChange(newPaginationModel.page);
    };

    const handleRowSelection = (ids: GridRowSelectionModel) => {
        const selectedRowsData = ids.map((id) =>
            rows.find((row: any) => row.id === id)
        );
        onCheckboxSelection && onCheckboxSelection(selectedRowsData);
    };
    useEffect(() => {
        if (removeRowSelection) {
            setSelectedRowId(null);
        }
    }, [removeRowSelection]);
    useEffect(() => {
        const pageData = { ...paginationModel, pageSize: itemsPerPage };
        setPaginationModel(pageData);
    }, [itemsPerPage]);

    useEffect(() => {
        if (paginationMode === "server") {
            fetchPaginatedData(paginationModel.page, paginationModel.pageSize);
        }
    }, [paginationModel.page, paginationModel.pageSize]);

    useEffect(() => {
        if (sortType && sortFieldName) {
            setSortModel([
                {
                    field: sortFieldName,
                    sort: sortType,
                },
            ]);
        }
    }, [sortType, sortFieldName]);

    useEffect(() => {
        const updatedColumns = columns.map((col) => ({
            ...col,
            renderCell: (params: any) => {
                return (
                    <>
                        {params.row?.[params.field]?.icon && <IconCell data={params.row?.[params.field]?.icon} />}
                        {params?.colDef?.type === "text" ?
                            <TitleCell data={params.row?.[params.field]} />: 
                        params?.colDef?.type === "group" ?
                            <Group items={params.row?.[params.field]}/>: 
                            <p>Not text</p>
                        }</>
                )
            }
        }));
        setUpdatedColumn(updatedColumns);
    }, [columns, rows])

    return (
        <Box
            sx={{
                height: height,
                width: "100%",
                background: "#01141A",
                border: "none",
                ".MuiDataGrid-overlayWrapperInner": {
                    position: "relative",
                },
            }}
        >
            <StyledDataGrid
                // sx={dataGridStyle}
                rows={rows || []}
                columns={updatedColumn}
                rowHeight={remToPx(rowHeight)}
                key={`${paginationModel.page}-${paginationModel.pageSize}`}
                getRowHeight={() => (rowHeightAuto ? "auto" : null)}
                pagination
                hideFooter={!showPagination || rows.length === 0}
                paginationModel={paginationModel}
                onPaginationModelChange={handlePaginationChange}
                {...(paginationMode === "server" ? { rowCount: totalRecords } : {})}
                sortingOrder={["asc", "desc", null]}
                paginationMode={paginationMode}
                disableColumnFilter={true}
                disableColumnSelector={true}
                disableDensitySelector={true}
                slots={{
                    toolbar: showPagination ? GridToolbar : null,
                    pagination: showPagination ? Pagination : null,
                    noRowsOverlay: () => (
                        <NoRowsOverlay
                            customOverlay={customOverlay}
                            noRowOverlayHeader={noRowOverlayHeader}
                            noRowOverlayMessage={noRowOverlayMessage}
                        />
                    ),
                    baseCheckbox: (props: any) => (
                        <Checkbox
                            {...props}
                        />
                    ),
                    loadingOverlay: () => <CircularLoader open />,
                    ...slots,
                }}
                hideFooterSelectedRowCount
                disableVirtualization
                slotProps={{
                    toolbar: {
                        showQuickFilter: false,
                    },
                }}
                disableColumnSorting
                disableRowSelectionOnClick
                onRowClick={handleRowClick}
                // sx={mergedStyles}
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
                initialState={initialState}
                getRowClassName={(params) =>
                    params.id === selectedRowId && showSelectedRow ? "selected" : ""
                }
                checkboxSelection={checkboxSelection}
                onRowSelectionModelChange={(ids) => handleRowSelection(ids)}
                loading={loading}
                apiRef={apiRef}
                getRowId={getRowId}
                hideFooterPagination={hideFooterPagination}
            />
        </Box>
    );
};

export default Table;
