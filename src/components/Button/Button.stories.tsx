import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button"; 
import { EditIcon, SearchIcon } from "@storybook/icons";

// Component metadata
const meta: Meta<ButtonProps> = {
    title: "Components/Button", 
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary", "destructive"],
            },
        },
        size: {
            control: {
                type: "select",
                options: ["small", "default", "large"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        onClick: { action: "clicked" }, // Logs clicks in the Actions panel
    }, 
}

// Template for creating stories
const Template: StoryFn<ButtonProps> = (args) => <Button {...args}>{args.children}</Button>;

// Default button
export const Default = Template.bind({});
Default.args = {
    children: "Default Button",
    color: "primary",
    size: "default",
    disabled: false,
};

// Primary button
export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
    children: "Primary Button",
};

// Secondary button
export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    children: "Secondary Button",
};

// Tertiary button
export const Tertiary = Template.bind({});
Tertiary.args = {
    color: "tertiary",
    children: "Tertiary Button",
};

// Destructive button
export const Destructive = Template.bind({});
Destructive.args = {
    color: "destructive",
    children: "Destructive Button",
};

export default meta;

// WithLeftIcon button
export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
    color: "primary",
    children: (
        <>
            <EditIcon /> Edit
        </>
    ),
};

// WithRightIcon button
export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
    color: "primary",
    children: (
        <>
            Search <SearchIcon/>
        </>
    ),
};

