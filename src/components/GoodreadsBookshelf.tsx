import React, { CSSProperties, FunctionComponent } from "react";
import useGoodreadsShelf from "../hooks/useGoodreadsShelf";
import { Props } from "../types";
import { ALL_GROUP_TITLE } from "../util";
import BookList from "./BookList";
import Loader from "./Loader";

const titleStyle: CSSProperties = {
  fontSize: "2em",
  marginBottom: "1em"
};

const groupStyle: CSSProperties = {
  marginBottom: "2em"
};

/** Display a Goodreads bookshelf component */
const GoodreadsBookshelf: FunctionComponent<Props> = (props) => {
  const { books, loading, error } = useGoodreadsShelf(props);

  return (
    <div className="goodreads-shelf">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {books.map((el) => {
            return (
              <div key={el.title} style={groupStyle}>
                {el.title !== ALL_GROUP_TITLE && (
                  <div style={titleStyle}>
                    {el.title} <small>({el.books.length} books)</small>
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
