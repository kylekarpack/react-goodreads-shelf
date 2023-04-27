import type { StorybookViteConfig } from "@storybook/builder-vite";
const config: StorybookViteConfig = {
  stories: ["../stories/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-controls", "storybook-dark-mode", "@storybook/addon-mdx-gfm"],
  core: {},
  typescript: {
    check: false,
    checkOptions: {}
  },
  async viteFinal(config) {
    config.base = "/react-goodreads-shelf/";
    return config;
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
export default config;