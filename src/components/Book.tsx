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
  margin: "0 0 0.25em"
};

const authorStyle: CSSProperties = {
  marginTop: "0.5em"
};

const Details: FunctionComponent<{ book: BookType; options?: Props }> = ({ book, options }) => {
  const hideDetails = options?.displayOptions?.hideDetails;
  if (hideDetails === true) {
    return null;
  }

  const shouldShow = (item: keyof BookType): boolean => {
    if (hideDetails === false) {
      return true;
    }
    return !hideDetails?.[item];
  };

  return (
    <div style={{ marginTop: "0.5em" }}>
      {shouldShow("title") && <div style={titleStyle}>{book.title}</div>}
      {shouldShow("subtitle") && book.subtitle ? <div>{book.subtitle}</div> : null}
      {shouldShow("author") && <div style={authorStyle}>{book.author}</div>}
      {shouldShow("rating") && <Rating stars={book.rating} />}
    </div>
  );
};

const Book: FunctionComponent<{ book: BookType; options?: Props }> = ({ book, options }) => {
  if (!book) {
    return null;
  }

  return (
    <div>
      <div style={bookStyle} title={book.title}>
        <a href={book.link} target="_blank" rel="nofollow noreferrer">
          <Cover book={book} options={options} />
        </a>
      </div>
      <Details book={book} options={options} />
    </div>
  );
};

export default Book;
