import { render } from "@testing-library/react";
import { Book } from "../types";
import Cover from "./Cover";

describe("cover component", () => {
  const book: Book = {
    id: "1",
    title: "test"
  };

  it("renders with no props", () => {
    const { container } = render(<Cover book={book} />);
    expect(container.childElementCount).toBe(1);
  });
});
