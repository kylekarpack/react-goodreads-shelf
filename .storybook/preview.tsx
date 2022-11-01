import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import React, { FunctionComponent } from "react";

export const parameters = {
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
  return (
     <div style={{ color: useDarkMode() ? "white" : "black", fontFamily: "sans-serif" }}>{children}</div>
  );
};

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
