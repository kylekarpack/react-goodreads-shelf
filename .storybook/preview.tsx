import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import React, { FunctionComponent } from "react";

const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black", color: "white" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "white" }
  }
};

// create a component that uses the dark mode hook
const ThemeWrapper: FunctionComponent<any> = ({ children }) => {
  // render your custom theme provider
  return <div style={{ color: useDarkMode() ? "white" : "black", fontFamily: "sans-serif" }}>{children}</div>;
};

const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];

const preview = {
  parameters,
  decorators
};

export default preview;
