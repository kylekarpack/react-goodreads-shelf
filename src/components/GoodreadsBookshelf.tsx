import { FunctionComponent } from "react";
import useGoodreadsShelf from "../hooks/useGoodreadsShelf";
import { Props } from "../types";
import { ALL_GROUP_TITLE } from "../util";
import BookList from "./BookList";
import styles from "./GoodreadsBookshelf.module.css";
import Loader from "./Loader";

/** Display a Goodreads bookshelf component */
const GoodreadsBookshelf: FunctionComponent<Props> = (props) => {
  const { books, loading, error } = useGoodreadsShelf(props);

  return (
    <div className="rgs-shelf">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {books.map((el) => {
            return (
              <div key={el.title} className={`rgs-group ${styles.group}`}>
                {el.title !== ALL_GROUP_TITLE && (
                  <div className={`rgs-group-title ${styles.groupTitle}`}>
                    {el.title}{" "}
                    <small>
                      ({el.books.length} {el.books.length === 1 ? "book" : "books"})
                    </small>
                  </div>
                )}
                <BookList books={el.books} options={props} />
              </div>
            );
          })}
        </div>
      )}

      {error && <div>Sorry, we couldn't load books right now</div>}
    </div>
  );
};

export default GoodreadsBookshelf;
