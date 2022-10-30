import type { StorybookViteConfig } from "@storybook/builder-vite";

const config: StorybookViteConfig = {
  stories: ["../stories/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-links", "@storybook/addon-storysource", "@storybook/addon-controls"],
  core: {
    builder: "@storybook/builder-vite"
  },
  typescript: {
    check: false,
    checkOptions: {}
  },
  async viteFinal(config) {
    return config;
  }
};

export default config;
