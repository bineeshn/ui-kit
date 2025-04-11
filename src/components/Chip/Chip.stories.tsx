import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Chip, {ChipProps} from "./Chip";
import { CloseIcon } from  "@storybook/icons";

const meta: Meta<typeof Chip> = {
    title: 'Components/Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: {
        children: {
        control: 'text',
        defaultValue: 'Chip Label',
        },
        endIcon: {
            control: { type: 'boolean' },
            mapping: {
                true: <CloseIcon/>,
                false: undefined,
            },
        },
    },
};

export default meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} ref={args.ref as React.Ref<HTMLDivElement>}>{args.children}</Chip>;

export const Default = Template.bind({});
Default.args = {
    children: 'Chip',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    children: 'With Icon',
    endIcon: true,
};
