import { render } from "@testing-library/react";
import Book from "./Book";

describe("testing book", () => {
  it("renders without crashing", () => {
    const book = render(<Book book={null} />);
    expect(book.container).toBeInTheDocument();
  });

  it("renders a book", () => {
    const data = { description: "Test", id: "1" };
    const book = render(<Book book={data} />);
    expect(book.container).toBeInTheDocument();
  });
});
