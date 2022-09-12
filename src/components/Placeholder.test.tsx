import { render } from "@testing-library/react";
import Placeholder from "./Placeholder";

describe("placeholder component", () => {
  it("renders without crashing", () => {
    const placeholder = render(<Placeholder />);
    expect(placeholder).toMatchSnapshot();
  });
});
