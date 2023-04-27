import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-controls", "storybook-dark-mode", "@storybook/addon-mdx-gfm"],
  typescript: {
    check: false
  },
  async viteFinal(config) {
    config.base = process.env.BASE_PATH || config.base;
    return config;
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
