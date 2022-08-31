import React, { CSSProperties, FunctionComponent } from "react";
import { Book as BookType, Props } from "../types";
import Book from "./Book";

const shelfStyle = (options?: Props): CSSProperties => {
  let { width } = options || {};

  if (typeof width === "number") {
    width = `${width}px`;
  }

  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${width})`,
    justifyContent: "space-around",
    alignItems: "top",
    gridColumnGap: "0.5rem",
    gridRowGap: options?.hideDetails ? "0.5rem" : "2rem"
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
