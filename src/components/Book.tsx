import React, { CSSProperties, FunctionComponent } from "react";
import type { Book as BookType, Props } from "../types";
import Cover from "./Cover";
import Rating from "./Rating";

const bookStyle: CSSProperties = {
  textAlign: "left"
};

const titleStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: "1.1em",
  margin: "0.5em 0 0.25em"
};

const authorStyle: CSSProperties = {
  marginTop: "0.5em"
};

const Book: FunctionComponent<{ book: BookType; options?: Props }> = ({ book, options }) => {
  if (!book) {
    return null;
  }

  return (
    <div>
      <div style={bookStyle} title={book.title}>
        <a href={book.link} target="_blank" rel="nofollow noreferrer">
          <Cover book={book} />
        </a>
      </div>
      {!options?.hideDetails ? (
        <div>
          <div style={titleStyle}>{book.title}</div>
          {book.subtitle ? <div>{book.subtitle}</div> : null}
          <div style={authorStyle}>{book.author}</div>
          <Rating stars={book.rating} />
        </div>
      ) : null}
    </div>
  );
};

export default Book;
