import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { UserAltIcon } from "@storybook/icons";
import IconButton from "./IconButton";
import theme from "../../theme/theme";

describe("Custom IconButton component.", () => {
    const getIconButtonElement = (container: HTMLElement) =>
        container.querySelector(".MuiButton-root");

    it("Renders the IconButton with default props", () => {
        const { container, getByTestId } = render(
            <IconButton icon={<UserAltIcon data-testid="userIcon" />} />
        );

        const iconButton = getIconButtonElement(container);
        const icon = getByTestId("userIcon"); 

        expect(iconButton).toBeInTheDocument();
        expect(icon).toBeInTheDocument();

        expect(iconButton).toHaveStyleRule("background-color",
            theme.colors.background.primary.default, {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border",
            expect.stringContaining(theme.colors.border.primary.default),{
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border-radius", "1.5rem", {
            modifier: "&.MuiButton-root",
        });
        expect(iconButton).toHaveStyle("height: 2rem");
        expect(icon).toHaveStyle("width: 1rem; height: 1rem");

    });

    it("Applies small size styles to a round button with a secondary color.", () => {
        const { container, getByTestId } = render(
            <IconButton color="secondary" size="small" icon={<UserAltIcon data-testid="userIcon" />} />
        );

        const iconButton = getIconButtonElement(container);
        const icon = getByTestId("userIcon");

        expect(iconButton).toHaveStyleRule("background-color",
            theme.colors.background.secondary.default, {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border",
            expect.stringContaining(theme.colors.border.secondary.default), {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border-radius", "1.5rem", {
            modifier: "&.MuiButton-root",
        });
        expect(iconButton).toHaveStyle("height: 1.5rem");
        expect(icon).toHaveStyle("width: 1rem; height: 1rem");

    });

    it("Applies large size styles to a round button with a tertiary color.", () => {
        const { container, getByTestId } = render(
            <IconButton color="tertiary" size="large" icon={<UserAltIcon data-testid="userIcon" />} />
        );

        const iconButton = getIconButtonElement(container);
        const icon = getByTestId("userIcon");

        expect(iconButton).toHaveStyleRule("background-color",
            theme.colors.background.tertiary.default, {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border-radius", "1.5rem", {
            modifier: "&.MuiButton-root",
        });
        expect(iconButton).toHaveStyle("height: 2.5rem");
        expect(icon).toHaveStyle("width: 1.5rem; height: 1.5rem");

    });

    it("Applies default size styles to a square button with a destructive color.", () => {
        const { container, getByTestId } = render(
            <IconButton color="destructive" shape="square" icon={<UserAltIcon data-testid="userIcon" />} />
        );

        const iconButton = getIconButtonElement(container);
        const icon = getByTestId("userIcon");

        expect(iconButton).toHaveStyleRule("background-color",
            theme.colors.background.destructive.default, {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border", "none",{
                modifier: "&.MuiButton-root",
        });
        expect(iconButton).toHaveStyleRule("border-radius", "0.5rem", {
            modifier: "&.MuiButton-root",
        });
        expect(iconButton).toHaveStyle("height: 2rem");
        expect(icon).toHaveStyle("width: 1rem; height: 1rem");

    });

    it("Applies small size styles to a square button with a primary color.", () => {
        const { container, getByTestId } = render(
            <IconButton color="primary" size="small" shape="square" icon={<UserAltIcon data-testid="userIcon" />} />
        );
        const iconButton = getIconButtonElement(container);
        const icon = getByTestId("userIcon");

        expect(iconButton).toHaveStyleRule("background-color",
            theme.colors.background.primary.default, {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border",
            expect.stringContaining(theme.colors.border.primary.default), {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border-radius", "0.25rem", {
            modifier: "&.MuiButton-root",
        });
        expect(iconButton).toHaveStyle("height: 1.5rem");
        expect(icon).toHaveStyle("width: 1rem; height: 1rem");
    });

    it("Applies large size styles to a square button with a secondary color.", () => {
        const { container, getByTestId } = render(
            <IconButton color="secondary" size="large" shape="square" icon={<UserAltIcon data-testid="userIcon" />} />
        );
        const iconButton = getIconButtonElement(container);
        const icon = getByTestId("userIcon");

        expect(iconButton).toHaveStyleRule("background-color",
            theme.colors.background.secondary.default, {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border",
            expect.stringContaining(theme.colors.border.secondary.default), {
                modifier: "&.MuiButton-root",
            }
        );
        expect(iconButton).toHaveStyleRule("border-radius", "0.5rem", {
            modifier: "&.MuiButton-root",
        });
        expect(iconButton).toHaveStyle("height: 2.5rem");
        expect(icon).toHaveStyle("width: 1.5rem; height: 1.5rem");

    });

    it("Fires onClick event when pressed", () => {
        const onClickMock = jest.fn();
        const { container } = render(
            <IconButton onClick={onClickMock}>Click Me</IconButton>
        );

        const iconButton = getIconButtonElement(container);
        iconButton && fireEvent.click(iconButton);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
})