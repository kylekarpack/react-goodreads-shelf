import { render } from "@testing-library/react";
import BookList from "./BookList";

describe("book list component", () => {
  it("renders without crashing", () => {
    const { container } = render(<BookList books={[]} />);
    expect(container).toBeInTheDocument();
  });

  it("passes props correctly", () => {
    const id = Math.round(Math.random() * 100000);
    const books = [{ id: id.toString() }];
    const list = render(<BookList books={books} />);
    const items = list.container;
    expect(items.childElementCount).toEqual(books.length);
  });

  it("handles widths", () => {
    const books = [{ id: "1" }, { id: "2" }];
    const list = render(<BookList books={books} options={{ userId: "", width: 100 }} />);
    const elements = list.getByRole("grid");
    expect(elements.childElementCount).toBe(2);
  });
});
