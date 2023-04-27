import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-controls", "storybook-dark-mode", "@storybook/addon-mdx-gfm"],
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
