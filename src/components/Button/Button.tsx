import React from "react";
import { Button, ButtonProps } from "@mui/material";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface Props extends Omit<ButtonProps, "color" | "size"> {
    color?: "primary" | "secondary" | "tertiary"| "destructive";
    size?: "small" | "default" | "large";
}

// Styled-component using custom props
const StyledButton = styled(Button) <Props>`
    &.MuiButton-root {
        font-family: inherit;
        text-transform: inherit;
        ${(p) =>
            p.color === "secondary"
                ? css`
                    background-color: #192a30;
                    color: #fff;
                    border: 1px solid #7d7f80;
                    &:hover {
                        background-color: #333b3e;
                        border-color: #c9caca;
                    }
                    &:disabled {
                        background-color: #192a30;
                        border-color: #545859;
                        color: #7d7f80;
                    }
                `
            : p.color === "tertiary"
                ? css`
                    background-color: transparent;
                    color: #fff;
                    &:hover {
                        background-color: #333b3e;
                    }
                    &:disabled {
                        color: #7d7f80;
                    }
                `
            : p.color === "destructive"
                ? css`
                    background-color: #890606;
                    color: #fff;
                    border: 1px solid #aa0b0b;
                    &:hover {
                        background-color: #aa0b0b;
                        border: 1px solid #c9caca;
                    }
                    &:disabled {
                        background-color: #361419;
                        border-color: #545859;
                        color: #7d7f80;
                    }
                `
            : (p.color === "primary" || !p.color) &&
                css`
                    background-color: #125b56;
                    color: #fff;
                    border: 1px solid #02897f;
                    &:hover {
                        background-color: #02897f;
                        border-color: #c9caca;
                    }
                    &:disabled {
                        background-color: #192a30;
                        border-color: #545859;
                        color: #7d7f80;
                    }
                `
        }
        ${(p) =>
            p.size === "small"
                ? css`
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    gap: 0.25rem;
                    height: 24px;
                    line-height: 1rem;
                    padding: 6px 0.5rem;
                `
            : p.size === "large"
                ? css`
                    border-radius: 0.25rem;
                    font-size: 1rem;
                    gap: 0.5rem;
                    height: 2.5rem;
                    line-height: 1.25rem;
                    padding: 12px 1rem;
                `
            : (p.size === "default" || !p.size) &&
                css`
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    gap: 0.5rem;
                    height: 2rem;
                    line-height: 1rem;
                    padding: 0.5rem;
                `
        }
    }
`;

const MUIButton: React.FC<Props> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default MUIButton;
