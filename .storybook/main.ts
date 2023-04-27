import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-controls", "storybook-dark-mode", "@storybook/addon-mdx-gfm"],
  typescript: {
    check: false
  },
  async viteFinal(config) {
    config.base = "/react-goodreads-shelf/";
    //config.plugins = []; // Remove extraneous plugins
    return config;
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
  // docs: {
  //   autodocs: true
  // }
};
export default config;
