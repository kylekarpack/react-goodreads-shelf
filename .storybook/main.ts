import type { StorybookViteConfig } from "@storybook/builder-vite";

const config: StorybookViteConfig = {
  stories: ["../stories/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-controls", "storybook-dark-mode", "@storybook/addon-mdx-gfm"],
  core: {
    builder: "@storybook/builder-vite"
  },
  typescript: {
    check: false
  },
  async viteFinal(config) {
    config.base = "/react-goodreads-shelf/";
    config.plugins = []; // Remove extraneous plugins
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
