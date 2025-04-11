import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CircularLoader, { ICircularLoaderProps } from "./CircularLoader";

const meta: Meta<typeof CircularLoader> = {
    title: "Components/CircularLoader",
    component: CircularLoader,
    tags: ["autodocs"],
    argTypes: {
        open: {
            control: "boolean",
            defaultValue: true,
        },
        zIndex: {
            control: "number",
            defaultValue: 1301,
        },
    },
};

export default meta;

const Template: StoryFn<ICircularLoaderProps> = (args) => (
    <div style={{ position: "relative", height: "200px" }}>
        <CircularLoader {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    open: true,
    zIndex: 1301,
};

export const Closed = Template.bind({});
Closed.args = {
    open: false,
};
