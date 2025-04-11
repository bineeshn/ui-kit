import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import IconButton, { IconButtonProps } from "./IconButton";
import { UserAltIcon, DeleteIcon, PinIcon } from "@storybook/icons";

// Define the meta information for the component
const meta: Meta<IconButtonProps> = {
	title: "Components/IconButton",
	component: IconButton,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["small", "default", "large"],
		},
		shape: {
			control: { type: "select" },
			options: ["round", "square"],
		},
		color: {
			control: { type: "select" },
			options: ["primary", "secondary", "tertiary", "destructive"],
		},
		icon: {
			control: { type: "object" },
		},
	},
};

export default meta;

// Define the base template for the stories
const Template: StoryFn<IconButtonProps> = (args) => <IconButton {...args}>{args.children}</IconButton>;

// Default Round Button
export const DefaultRound = Template.bind({});
DefaultRound.args = {
	icon: <UserAltIcon />,
	size: "default",
	shape: "round",
	color: "primary",
}

// Small Round Button
export const SmallRound = Template.bind({});
SmallRound.args = {
	icon: <UserAltIcon />,
	size: "small",
	shape: "round",
	color: "secondary",
}

// Large Round Button
export const LargeRound = Template.bind({});
LargeRound.args = {
	icon: <PinIcon />,
	size: "large",
	shape: "round",
	color: "tertiary",
};

// Default Square Button
export const DefaultSquare = Template.bind({});
DefaultSquare.args = {
	icon: <DeleteIcon />,
	size: "default",
	shape: "square",
	color: "destructive",
};

// Small Square Button
export const SmallSquare = Template.bind({});
SmallSquare.args = {
	icon: <UserAltIcon />,
	size: "small",
	shape: "square",
	color: "primary",
}

// Large Square Button
export const LargeSquare = Template.bind({});
LargeSquare.args = {
	icon: <PinIcon />,
	size: "large",
	shape: "square",
	color: "secondary",
};