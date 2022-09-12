import { render } from "@testing-library/react";
import Rating from "./Rating";

describe("testing rating", () => {
  it("hides if no stars", () => {
    const { container } = render(<Rating />);
    expect(container.childElementCount).toBe(0);
  });

  it("renders the correct number of stars", () => {
    const { getByRole } = render(<Rating stars={3} />);
    const container = getByRole("presentation");
    expect(container.childElementCount).toBe(3);
  });
});
