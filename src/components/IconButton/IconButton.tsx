import React from "react";
import styled, { css } from "styled-components";
import Button from "../Button"; 
import { ButtonProps } from "../Button/Button";

// Extend ButtonProps
export interface IconButtonProps extends ButtonProps {
	shape?: "round" | "square";
	icon?: React.ReactNode;
}

const getBorderRadius = (
	shape: IconButtonProps["shape"],
	size: IconButtonProps["size"]
) => {
	return shape === "round" ? "1.5rem" : size === "small" ? "0.25rem" : "0.5rem";
};

const getSvgSize = (size: IconButtonProps["size"]) => {
	return size === "large" ? "1.5rem" : "1rem";
};

const sizeStyles = (
	shape: IconButtonProps["shape"],
	size: IconButtonProps["size"]
) => {
	const borderRadius = getBorderRadius(shape, size);

	switch (size) {
		case "small":
			return css`
				border-radius: ${borderRadius};
				padding: 0.25rem;
			`;
		case "large":
			return css`
				border-radius: ${borderRadius};
				padding: 0.5rem;
			`;
		case "default":
		default:
			return css`
				border-radius: ${borderRadius};
			`;
	}
};

const StyledIconButton = styled(Button) <IconButtonProps>`
	&.MuiButton-root {
		aspect-ratio: 1 / 1;
		min-width: fit-content;
		${({ shape, size }) => sizeStyles(shape, size)};

		${({ color }) => color === "destructive" && `
			border: none;

			&:hover,
			&:disabled {
				border: 1px solid;
			}
		`}

		${({ size }) => {
			const svgSize = getSvgSize(size);
			return `
				svg,
				img {
					width: ${svgSize};
					height: ${svgSize};
				}
			`;
		}}
	}
`;

const IconButton: React.FC<IconButtonProps> = ({
	shape = "round",
	icon,
	children,
	...props
}) => {
	return (
		<StyledIconButton shape={shape} {...props}>
			{ typeof(icon) === "string" ?
				<img src={icon} alt="svg-icon"/>:
				icon || children
			}
		</StyledIconButton>
	);
};

export default IconButton;