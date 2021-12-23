import { act, fireEvent, render } from "@testing-library/react";
import Book from "./Book";
import { Book as BookType } from "../types";

describe("testing book", () => {
  it("renders without crashing", () => {
    const book = render(<Book book={null} />);
    expect(book.container).toBeInTheDocument();
  });

  it("renders image", () => {
    const data: BookType = { id: "1", title: "test", imageUrl: "test.jpg" };
    const book = render(<Book book={data} />);
    act(() => {
      expect(book.getByAltText(data.title)).toBeInTheDocument();
    });
  });

  it("renders a placeholder", async () => {
    const data: BookType = { title: "Test", id: "1", imageUrl: "fail.jpg" };
    const screen = render(<Book book={data} />);
    const img = screen.getByAltText(data.title);
    fireEvent(img, new Event("error"));
    expect(img).not.toBeInTheDocument();
  });
});
