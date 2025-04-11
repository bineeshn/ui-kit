import React from "react";
import { Button as MUIButton, ButtonProps as MUIButtonProps, ThemeProvider } from "@mui/material";
import styled, { css } from "styled-components";
import theme from "../../theme/theme";
import { ColorTheme } from "../../theme/themeTypes";

export interface ButtonProps extends Omit<MUIButtonProps, "color" | "size"> {
	color?: "primary" | "secondary" | "tertiary" | "destructive";
	size?: "small" | "default" | "large";
}

const colorStyles = (color: ButtonProps["color"] = 'primary', colors: ColorTheme) =>{

	const isTertiary = color === "tertiary";

	return css`
		background-color: ${colors.background[color].default};
		color: ${colors.text[color].default};
		${!isTertiary ? `border: 1px solid ${colors.border[color].default};` : ""}
		&:hover {
			background-color: ${colors.background[color].hover};
			${!isTertiary ? `border-color: ${colors.border[color].hover};` : ""}
		}
		&:disabled {
			background-color: ${colors.background[color].disabled};
			${!isTertiary ? `border-color: ${colors.border[color].disabled};` : ""}
			color: ${colors.text[color].disabled};
		}
	`;
}

const sizeStyles = (size: ButtonProps["size"]) => {
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
				border-radius: 0.5rem;
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

const StyledButton = styled(MUIButton) <ButtonProps>`
	&.MuiButton-root {
		font-family: inherit;
		text-transform: inherit;
		${({ color }) => colorStyles(color, theme.colors)}
		${({ size }) => sizeStyles(size)}

		svg,
		img{
			height: 1em;
			width: 1em;
		}
	}
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<StyledButton {...props}>{children}</StyledButton>	
		</ThemeProvider>
	);
};

export default Button;
