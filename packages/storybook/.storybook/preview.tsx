import { themes } from "@storybook/theming";
import "./preview.css";

const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black", appContentBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "white" },
    darkClass: "lights-out",
    lightClass: "lights-on",
    stylePreview: true
  }
};

const preview = {
  parameters
};

export default preview;
