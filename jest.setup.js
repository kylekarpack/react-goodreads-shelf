import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";
import React from "react";

fetchMock.enableMocks();
global.React = React;
