import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: "centered",
		backgrounds: {
			values: [
				{ name: 'primary', value: '#192a30', default: true },
				{ name: 'light', value: '#fff' },
				{ name: 'dark', value: '#333' },
			],
		},
	},
};

export default preview;
