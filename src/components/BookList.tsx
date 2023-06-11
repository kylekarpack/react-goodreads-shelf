import { CSSProperties, FunctionComponent } from "react";
import { Book as BookType, Props } from "../types";
import Book from "./Book";
import styles from "./BookList.module.css";

const shelfStyle = (options?: Props): CSSProperties => {
  let { width } = options || {};

  if (typeof width === "number") {
    width = `${width}px`;
  }

  width = width || "170px";

  const gap = options?.displayOptions?.hideDetails ? `calc(${width} / 8)` : `calc(${width} / 6)`;

  return {
    gridTemplateColumns: `repeat(auto-fill, minmax(${width}, 1fr))`,
    columnGap: options?.displayOptions?.gridStyle?.columnGap ?? gap,
    rowGap: options?.displayOptions?.gridStyle?.rowGap ?? gap
  };
};

const BookList: FunctionComponent<{ books: BookType[]; options?: Props }> = ({ books, options }) => {
  return (
    <ul className={`rgs-shelf ${styles.shelf}`} style={shelfStyle(options)} data-testid="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <Book book={book} options={options} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
