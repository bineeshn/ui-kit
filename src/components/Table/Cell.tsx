

import React from "react";
import { Box } from "@mui/material";
import { colors } from "../../theme/theme";
import { getStarlinkStatusColor } from "../../utils/helper";
import Badge from "../Badge";

type TitleCellProps = {
    data: {
        title?: string;
        subtitle?: string;
        status?: {
            label: string, 
            variant: 'success' | 'error' | 'caution' | 'warning' | 'info' | 'default'
        };
    };
};

type IconCellProps = {
    data: {
        icon: React.FC<React.SVGProps<SVGSVGElement>>;
        status?: string;
    };
  };

export const TitleCell = ({ data: { title, subtitle, status } }: TitleCellProps) => {
    return (
        <Box display="flex" flexDirection="column" textAlign="left">
            <Box display="flex" alignItems="center" gap={2}>
                <Box className="text-sm leading-4 truncate " color={colors.defaults.font.primary}>
                    {title}
                </Box>
                {status && (
                    <Badge
                        label={status.label ?? ''}
                        variant={status.variant ?? ''}
                    />
                )}
            </Box>
            {subtitle && <Box className="text-xs leading-4" color={colors.defaults.font.secondary}>
                {subtitle}
            </Box>}
        </Box>
    );
};

export const IconCell = ({data: {icon: Icon,status}}: IconCellProps) => {
    return (
        <div className="asset-image relative flex h-10 w-10 items-center justify-center rounded-full border border-[#333B3E] bg-[#0B1D23]">
            <Icon
                className="h-5 w-5 min-w-4 flex-shrink-0"
            />
            <div
                className={`asset-health-status absolute bottom-[0.0625rem] -right-0.5 h-3 w-3 rounded-full border-2 border-black`}
                style={{
                    backgroundColor: getStarlinkStatusColor(
                        status || 'Healthy'
                    ),
                }}
            />
        </div>
    );
}