import React, { CSSProperties, FunctionComponent } from "react";
import { Book as BookType } from "../types";
import Book from "./Book";

const shelfStyle = (minWidth = 150): CSSProperties => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${minWidth}px)`,
    justifyContent: "space-around",
    alignItems: "center",
    gridColumnGap: "0.5rem",
    gridRowGap: "0.5rem"
  };
};

const BookList: FunctionComponent<{ books: BookType[]; bookWidth?: number }> = ({ books, bookWidth }) => {
  return (
    <div style={shelfStyle(bookWidth)}>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
