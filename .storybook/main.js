module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-storysource", "@storybook/addon-controls"],
  webpackFinal: async config => {
    // do mutation to the config
    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  core: {
    builder: "webpack5"
  }
};