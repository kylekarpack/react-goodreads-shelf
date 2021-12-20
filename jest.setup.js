import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

global.React = React;
global.fetch = require("jest-fetch-mock");
