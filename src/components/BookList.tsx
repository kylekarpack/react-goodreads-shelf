import React, { CSSProperties, FunctionComponent } from "react";
import Book from "./Book";

const shelfStyle = (minWidth: number | string): CSSProperties => {
  minWidth = minWidth || "6rem";
  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${minWidth})`,
    justifyContent: "space-around",
    alignItems: "center",
    gridColumnGap: "0.5rem",
    gridRowGap: "0.5rem"
  };
};

const BookList: FunctionComponent<{ books: any[]; bookWidth?: number }> = ({ books, bookWidth }) => {
  return (
    <div style={shelfStyle(bookWidth)}>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
