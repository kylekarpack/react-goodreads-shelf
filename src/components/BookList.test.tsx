import { render } from "@testing-library/react";
import BookList from "./BookList";

describe("testing book list", () => {
  it("renders without crashing", () => {
    const { container } = render(<BookList books={[]} />);
    expect(container).toBeInTheDocument();
  });

  it("passes props correctly", () => {
    const id = Math.round(Math.random() * 100000);
    const list = render(<BookList books={[{ id }]} />);
    const books = list.container;
    expect(books.childElementCount).toEqual(1);
  });
});
