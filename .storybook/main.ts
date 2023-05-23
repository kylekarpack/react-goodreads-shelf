import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.{ts,tsx}", "../stories/**/*.mdx"],
  addons: ["@storybook/addon-controls", "@storybook/addon-links", "@storybook/addon-essentials", "storybook-dark-mode"],
  typescript: {
    check: false
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: process.env.BASE_PATH || config.base
    });
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
