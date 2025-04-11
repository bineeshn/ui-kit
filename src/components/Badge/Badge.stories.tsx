import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Badge, { IBadge } from "./Badge";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
            defaultValue: "Default Badge",
        },
        variant: {
            control: {
                type: "radio",
            },
            options: ["default", "success", "error", "caution", "warning", "info"],
        },
    },
};

export default meta;

const Template: StoryFn<IBadge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Default Badge",
};

export const Success = Template.bind({});
Success.args = {
    label: "Success Badge",
    variant: "success",
};

export const Error = Template.bind({});
Error.args = {
    label: "Error Badge",
    variant: "error",
};

export const Caution = Template.bind({});
Caution.args = {
    label: "Caution Badge",
    variant: "caution",
};

export const Warning = Template.bind({});
Warning.args = {
    label: "Warning Badge",
    variant: "warning",
};

export const Info = Template.bind({});
Info.args = {
    label: "Info Badge",
    variant: "info",
};