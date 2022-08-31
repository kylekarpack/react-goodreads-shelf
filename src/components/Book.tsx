import React, { CSSProperties, FunctionComponent } from "react";
import type { Book as BookType, HideDetails, Props } from "../types";
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

const Details: FunctionComponent<{ book: BookType; hideDetails: HideDetails }> = ({ book, hideDetails }) => {
  return (
    <div>
      {!hideDetails?.title && <div style={titleStyle}>{book.title}</div>}
      {!hideDetails?.subtitle && book.subtitle ? <div>{book.subtitle}</div> : null}
      {!hideDetails?.author && <div style={authorStyle}>{book.author}</div>}
      {!hideDetails?.rating && <Rating stars={book.rating} />}
    </div>
  );
};

const Book: FunctionComponent<{ book: BookType; options?: Props }> = ({ book, options }) => {
  if (!book) {
    return null;
  }

  const hideDetails = options?.hideDetails;

  return (
    <div>
      <div style={bookStyle} title={book.title}>
        <a href={book.link} target="_blank" rel="nofollow noreferrer">
          <Cover book={book} />
        </a>
      </div>
      {options?.hideDetails !== true ? <Details book={book} hideDetails={hideDetails as HideDetails} /> : null}
    </div>
  );
};

export default Book;
