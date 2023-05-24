import { FunctionComponent } from "react";
import { BookGroup, Props } from "../../types";
import { ALL_GROUP_TITLE } from "../../util";
import BookList from "../book-list/BookList";
import styles from "./GoodreadsBookshelf.module.css";

type PresentationOptions = { books: BookGroup[] } & Pick<Props, "width" | "displayOptions">;

/** Display a Goodreads bookshelf presentation component */
const GoodreadsBookshelfPresentation: FunctionComponent<PresentationOptions> = ({ books, ...options }) => {
  return (
    <div>
      {books.map((el) => (
        <div key={el.title} className={`rgs-group ${styles.group}`}>
          {el.title !== ALL_GROUP_TITLE && (
            <div className={`rgs-group-title ${styles.groupTitle}`}>
              {el.title}{" "}
              <small>
                ({el.books.length} {el.books.length === 1 ? "book" : "books"})
              </small>
            </div>
          )}
          <BookList books={el.books} options={options as Props} />
        </div>
      ))}
    </div>
  );
};

export default GoodreadsBookshelfPresentation;
