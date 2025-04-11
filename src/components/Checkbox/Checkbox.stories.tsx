import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Checkbox, {CustomCheckboxProps} from "./Checkbox";
import { CheckboxProps } from "@mui/material";

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        checked: { control: "boolean", defaultValue: false },
        disabled: { control: "boolean", defaultValue: false },
        size: {
            control: { type: "radio" },
            options: ["default", "large"],
            defaultValue: "default",
        },
        indeterminate: {
            control: "boolean",
            defaultValue: false,
        },
    },
};

export default meta;

const Template: StoryFn<CustomCheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
};

export const Large = Template.bind({});
Large.args = {
    checked: true,
    size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    checked: false,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    indeterminate: true,
};
