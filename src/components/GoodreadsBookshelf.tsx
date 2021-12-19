import React, { FunctionComponent } from "react";
import useGoodreadsShelf from "../hooks/useGoodreadsShelf";
import { Props } from "../types";
import BookList from "./BookList";
import Loader from "./Loader";

/** Display a Goodreads bookshelf component */
const GoodreadsBookshelf: FunctionComponent<Props> = (props) => {
  const { books, loading, error } = useGoodreadsShelf(props);

  return (
    <div className="goodreads-shelf">
      {loading ? <Loader /> : <BookList books={books} bookWidth={props.width} />}

      {error && <div>Sorry, we couldn't load books right now</div>}
    </div>
  );
};

export default GoodreadsBookshelf;
