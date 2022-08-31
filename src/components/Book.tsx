import React, { CSSProperties, FunctionComponent } from "react";
import type { Book as BookType } from "../types";
import Cover from "./Cover";
import Rating from "./Rating";

const bookStyle: CSSProperties = {
  textAlign: "left"
};

const titleStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: "1.1em"
};

const subtitleStyle: CSSProperties = {
  opacity: 0.9
};

const Book: FunctionComponent<{ book: BookType }> = ({ book }) => {
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
      <div>
        <div style={titleStyle}>{book.title}</div>
        {book.subtitle ? <div style={subtitleStyle}>{book.subtitle}</div> : null}
        <div>{book.author}</div>
        {book.rating ? (
          <div>
            <Rating stars={book.rating} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Book;
