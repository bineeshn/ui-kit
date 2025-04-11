import type { StorybookConfig } from "@storybook/react-webpack5";
import path from 'path';

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-onboarding",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		{
			name: "@storybook/addon-styling-webpack",
			options: {
				postCss: {
					implementation: require.resolve('postcss'),
				},
			},
		},
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	webpackFinal: async (config) => {

		if(!config.module || !config.module.rules) return config;

		config.module.rules = config.module.rules.filter(
			(rule) => !(rule instanceof Object && rule.test?.toString().includes('css'))
		);

		config.module.rules.push({
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: false, 
					},
				},
				'postcss-loader'
			],
			include: path.resolve(__dirname, '../src'),
		});

		return config;
	},
};


export default config;