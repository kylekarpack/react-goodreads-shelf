import React, { CSSProperties, FunctionComponent } from "react";
import { Book as BookType, Props } from "../types";
import Book from "./Book";

const shelfStyle = (options?: Props): CSSProperties => {
  let { width } = options || {};

  if (typeof width === "number") {
    width = `${width}px`;
  }

  width = width || "170px";

  const gap = options?.displayOptions?.hideDetails ? `calc(${width} / 8)` : `calc(${width} / 6)`;

  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${width}, 1fr))`,
    justifyContent: "space-around",
    alignItems: "top",
    gridColumnGap: options?.displayOptions?.gridStyle?.gridColumnGap ?? gap,
    gridRowGap: options?.displayOptions?.gridStyle?.gridRowGap ?? gap
  };
};

const BookList: FunctionComponent<{ books: BookType[]; options?: Props }> = ({ books, options }) => {
  return (
    <div style={shelfStyle(options)}>
      {books.map((book) => {
        return <Book key={book.id} book={book} options={options} />;
      })}
    </div>
  );
};

export default BookList;
