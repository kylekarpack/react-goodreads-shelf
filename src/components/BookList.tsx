import React, { CSSProperties, FunctionComponent } from "react";
import { Book as BookType } from "../types";
import Book from "./Book";

const shelfStyle = (minWidth: string | number = 150): CSSProperties => {
  if (typeof minWidth === "number") {
    minWidth = `${minWidth}px`;
  }
  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${minWidth})`,
    justifyContent: "space-around",
    alignItems: "center",
    gridColumnGap: "0.5rem",
    gridRowGap: "0.5rem"
  };
};

const BookList: FunctionComponent<{ books: BookType[]; bookWidth?: string | number }> = ({ books, bookWidth }) => {
  return (
    <div style={shelfStyle(bookWidth)}>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
