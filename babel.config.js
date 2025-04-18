module.exports = {
	sourceType: "unambiguous",
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					chrome: 100,
					safari: 15,
					firefox: 91,
				},
			},
		],
		[
			"@babel/preset-react",
			{
				runtime: "automatic",
			},
		],
		"@babel/preset-typescript",
	],
  	plugins: ["babel-plugin-macros"],
};
