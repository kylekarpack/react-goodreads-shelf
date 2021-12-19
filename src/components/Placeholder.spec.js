import { shallow } from "enzyme";
import React from "react";
import Placeholder from "./Placeholder";

describe("testing placeholder", () => {
  it("renders without crashing", () => {
    const placeholder = shallow(<Placeholder />);
    expect(placeholder).toMatchSnapshot();
  });
});
