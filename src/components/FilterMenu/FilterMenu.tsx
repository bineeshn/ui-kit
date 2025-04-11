import React from "react";
import { Box } from "@mui/material";

type Props = {
    children: React.ReactNode;
};

const FilterMenu: React.FC<Props> = ({children}) => {
    return (
        <Box className="flex self-stretch gap-2 border-none bg-defaults-surface-fore p-2 h-10">
           {children}
        </Box>
    )
}

export default FilterMenu;