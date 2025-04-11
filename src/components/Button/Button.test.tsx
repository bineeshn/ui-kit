import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import "jest-styled-components";
import React from "react";
import theme from "../../theme/theme";
import Button from "./Button";

describe("Custom Button Component.", () => {
    const getButtonElement = (container: HTMLElement) =>
        container.querySelector(".MuiButton-root");

    it("Renders with default props.", () => {
        const { container, getByText } = render(
            <Button>Default Button</Button>
        );

        const button = getButtonElement(container);

        expect(getByText("Default Button")).toBeInTheDocument();

        expect(button).toHaveStyleRule("background-color",
            theme.colors.background.primary.default,{
                modifier: "&.MuiButton-root",
            }
        );

        expect(button).toHaveStyleRule("border",
            expect.stringContaining(theme.colors.border.primary.default),{
                modifier: "&.MuiButton-root",
            }
        );

        expect(button).toHaveStyle("font-size: 0.875rem");
        expect(button).toHaveStyle("height: 2rem");
    });

    it("Applies secondary color styles.", () => {
        const { container } = render(
            <Button color="secondary">Secondary Button</Button>
        );

        const button = getButtonElement(container);

        expect(button).toHaveStyleRule("background-color",
            theme.colors.background.secondary.default,{
                modifier: "&.MuiButton-root",
            }
        );
        expect(button).toHaveStyleRule("border",
            expect.stringContaining(theme.colors.border.secondary.default),{
                modifier: "&.MuiButton-root",
            }
        );
    });

    it("Applies tertiary color styles.", () => {
        const { container } = render(
            <Button color="tertiary">Tertiary Button</Button>
        );

        const button = getButtonElement(container);

        expect(button).toHaveStyleRule("background-color", "transparent", {
            modifier: "&.MuiButton-root",
        });
    });

    it("Applies destructive color styles.", () => {
        const { container } = render(
            <Button color="destructive">Destructive Button</Button>
        );

        const button = getButtonElement(container);

        expect(button).toHaveStyleRule("background-color",
            theme.colors.background.destructive.default,{
                modifier: "&.MuiButton-root",
            }
        );
        expect(button).toHaveStyleRule("border",
            expect.stringContaining(theme.colors.border.destructive.default),{
                modifier: "&.MuiButton-root",
            }
        );
    });

    it("Applies small size styles.", () => {
        const { container } = render(
            <Button size="small">Small Button</Button>
        );

        const button = getButtonElement(container);

        expect(button).toHaveStyle("font-size: 0.875rem");
        expect(button).toHaveStyle("height: 1.5rem");
    });

    it("Applies large size styles.", () => {
        const { container } = render(
            <Button size="large">Large Button</Button>
        );

        const button = getButtonElement(container);

        expect(button).toHaveStyle("font-size: 1rem");
        expect(button).toHaveStyle("height: 2.5rem");
    });

    it("Fires onClick event when pressed.", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button onClick={onClickMock}>Click Me</Button>
        );

        fireEvent.click(getByText("Click Me"));

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
