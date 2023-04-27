import { themes } from "@storybook/theming";

const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black", appContentBg: "black", color: "white", base: "dark" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "white" },
    darkClass: "lights-out",
    lightClass: "lights-on"
  }
};

const preview = {
  parameters
};

export default preview;
