import React from "react";
import { Tooltip, TooltipProps } from "@mui/material";
import { styled } from "styled-components";
import theme from "../../theme/theme";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
  	))`
	& .MuiTooltip-tooltip {
		padding: 0.5rem;
		font-size: 0.75rem;
		background-color: ${theme.colors.defaults.surface.backdrop} ;
		color: ${theme.colors.neutral.white} ;
		border: 1px solid ${theme.colors.defaults.border.default};
		border-radius: 0.25rem;
		max-height: 20rem;
		overflow: auto;
	}
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`

const renderItems = (items: { label: string; value: string }[]) => (
	<StyledUl>
		{items.map((item, i) => (
			<li key={i}>{item.label}</li>
		))}
	</StyledUl>
);

const OverflowGroup = ({
	items = [],
	...props
}: { items: { label: string; value: string }[] } & Omit<TooltipProps, "title">) => {
	return (
		<StyledTooltip
			slotProps={{
				popper: {
					modifiers: [
						{
							name: "offset",
							options: {
								offset: [0, -8],
							},
						},
					],
				},
			}}
			title={renderItems(items)}
			placement="bottom-end"
			{...props}
		/>
	);
};

export default OverflowGroup;
