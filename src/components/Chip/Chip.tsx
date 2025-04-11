import React, { forwardRef } from "react";
import Box, { BoxProps } from "@mui/material/Box";

export interface ChipProps extends BoxProps {
    endIcon?: React.ReactNode;
    closeHandler?: () => void;
}
  
const Chip = forwardRef<HTMLDivElement, ChipProps>(
    ({ endIcon, closeHandler, className, children, ...props }, ref) => (
    <Box
        data-testid="chip"
        className={`chip inline-flex items-center justify-center gap-2 whitespace-nowrap rounded border border-defaults-border-default px-2 py-1 text-xs text-white h-6 min-w-20 ${className ?? ""}`}
        {...props}
        ref={ref}
    >
        {children}
        {endIcon && 
            <span 
                className="end-icon-wrap mt-[0.05rem] mr-[0.05rem] cursor-pointer"
                onClick={() => closeHandler?.()}
            >
                {endIcon}
            </span>
        }
    </Box>
));

export default Chip;
