import { FunctionComponent } from "react";
import type { Book as BookType, Props } from "../types";
import styles from "./Book.module.css";
import Cover from "./Cover";
import Rating from "./Rating";

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
    <div className={`rgs-details ${styles.details}`}>
      {shouldShow("title") && <div className={`rgs-title ${styles.title}`}>{book.title}</div>}
      {shouldShow("subtitle") && book.subtitle ? (
        <div className={`rgs-subtitle ${styles.subtitle}`}>{book.subtitle}</div>
      ) : null}
      {shouldShow("author") && <div className={`rgs-author ${styles.author}`}>{book.author}</div>}
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
      <div className={`rgs-book ${styles.book}`} title={book.title}>
        <a href={book.link} target="_blank" rel="nofollow noreferrer">
          <Cover book={book} options={options} />
        </a>
      </div>
      <Details book={book} options={options} />
    </div>
  );
};

export default Book;
