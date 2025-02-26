import React from "react";
import { Button as MUIButton, ButtonProps, ThemeProvider } from "@mui/material";
import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export interface Props extends Omit<ButtonProps, "color" | "size"> {
	color?: "primary" | "secondary" | "tertiary" | "destructive";
	size?: "small" | "default" | "large";
}

const colorStyles = (color: Props["color"], theme: any) => {
	switch (color) {
		case "secondary":
			return css`
				background-color: ${theme.colors.defaults.surfaces.fore};
				color: ${theme.colors.defaults.font.primary};
				border: 1px solid ${theme.colors.defaults.border.default};
				&:hover {
					background-color: ${theme.colors.defaults.surfaces.hover};
					border-color: ${theme.colors.defaults.border.hover};
				}
				&:disabled {
					background-color: transparent;
					border-color: ${theme.colors.defaults.border.disabled};
					color: ${theme.colors.defaults.font.disabled};
				}
			`;
		case "tertiary":
			return css`
				background-color: transparent;
				color: ${theme.colors.defaults.font.primary};
				&:hover {
					background-color: ${theme.colors.defaults.surfaces.hover};
				}
				&:disabled {
					color: ${theme.colors.defaults.font.disabled};
				}
			`;
		case "destructive":
			return css`
				background-color: ${theme.colors.primary.red[700]};
				color: ${theme.colors.defaults.font.primary};
				border: 1px solid ${theme.colors.primary.red[600]};
				&:hover {
					background-color: ${theme.colors.primary.red[600]};
					border-color: ${theme.colors.defaults.border.hover};
				}
				&:disabled {
					background-color: ${theme.colors.primary.red[900]};
					border-color: ${theme.colors.defaults.border.disabled};
					color: ${theme.colors.defaults.font.disabled};
				}
			`;
		case "primary":
		default:
			return css`
				background-color: ${theme.colors.brand.dark};
				color: ${theme.colors.defaults.font.primary};
				border: 1px solid ${theme.colors.defaults.border.focus};
				&:hover {
					background-color: ${theme.colors.brand.main};
					border-color: ${theme.colors.defaults.border.hover};
				}
				&:disabled {
					background-color: ${theme.colors.defaults.surfaces.fore};
					border-color: ${theme.colors.defaults.border.disabled};
					color: ${theme.colors.defaults.font.disabled};
				}
			`;
	}
};

const sizeStyles = (size: Props["size"]) => {
	switch (size) {
		case "small":
			return css`
				border-radius: 0.25rem;
				font-size: 0.875rem;
				gap: 0.25rem;
				height: 1.5rem;
				line-height: 1rem;
				padding: 0.375rem 0.5rem;
			`;
		case "large":
			return css`
				border-radius: 0.25rem;
				font-size: 1rem;
				gap: 0.5rem;
				height: 2.5rem;
				line-height: 1.25rem;
				padding: 0.75rem 1rem;
			`;
		case "default":
		default:
			return css`
				border-radius: 0.5rem;
				font-size: 0.875rem;
				gap: 0.5rem;
				height: 2rem;
				line-height: 1rem;
				padding: 0.5rem;
			`;
	}
};

const StyledButton = styled(MUIButton) <Props>`
	&.MuiButton-root {
		font-family: inherit;
		text-transform: inherit;
		${({ color }) => colorStyles(color, theme)}
		${({ size }) => sizeStyles(size)}
	}
`;

const Button: React.FC<Props> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<StyledButton {...props}>{children}</StyledButton>	
		</ThemeProvider>
	);
};

export default Button;
