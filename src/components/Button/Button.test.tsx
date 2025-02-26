import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import theme from "../../theme/theme";
import Button from "./Button";

describe("Button component", () => {
    it("Button component should render", () => {
        const clickHandler = jest.fn();

        render(<Button onClick={clickHandler}>Click me</Button>);

        const button = screen.getByRole("button", { name: "Click me" });
        expect(button).toBeVisible();
        expect(button).toHaveClass("MuiButton-root");
        fireEvent.click(button);
        expect(clickHandler).toHaveBeenCalled();
    });

    it("Applies correct styles for primary color and default size", async () => {
        
        render(
        <Button  disableRipple disableElevation color="primary" size="default">
            Primary Button
        </Button>
        );
        const button = screen.getByRole("button", { name: /primary button/i });

        // Check for specific styles
        // await waitFor(() => {
        //     expect(getComputedStyle(button).backgroundColor).toBe('red');
        // });
        // expect(button).toHaveStyle(`background-color: ${theme.colors.brand.dark}`); 
        expect(button).toHaveStyle("font-size: 0.875rem");
        expect(button).toHaveStyle("height: 2rem");
    });

    it('Applies correct styles for secondary color and small size', () => {
        render(<Button  disableRipple disableElevation color="secondary" size="small">Secondary Button</Button>);
        const button = screen.getByRole('button', { name: /secondary button/i });
    
        // Check for specific styles
        // expect(button).toHaveStyle('background-color: rgb(25,42,48)'); 
        expect(button).toHaveStyle("font-size: 0.875rem");
        expect(button).toHaveStyle("height: 1.5rem");
    });

    it('Applies correct styles for tertiary color and large size', () => {
        render(<Button  disableRipple disableElevation color="tertiary" size="large">Tertiary Button</Button>);
        const button = screen.getByRole('button', { name: /tertiary button/i });
    
        // Check for specific styles
        // expect(button).toHaveStyle('background-color: transparent'); 
        expect(button).toHaveStyle("font-size: 1rem");
        expect(button).toHaveStyle("height: 2.5rem");
    });

    it('Applies correct styles for destructive color and default size', () => {
        render(<Button  disableRipple disableElevation color="destructive">Destructive Button</Button>);
        const button = screen.getByRole('button', { name: /destructive button/i });
    
        // Check for specific styles
        // expect(button).toHaveStyle('background-color: rgb(25,42,48)'); 
        expect(button).toHaveStyle("font-size: 0.875rem");
        expect(button).toHaveStyle("height: 2rem");
    });
});
