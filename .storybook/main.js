module.exports = {
	stories: ["../stories/**/*.stories.js"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-storysource",
		"@storybook/addon-controls"
	],
	webpackFinal: async (config) => {
		// do mutation to the config

		return config;
	},
};
