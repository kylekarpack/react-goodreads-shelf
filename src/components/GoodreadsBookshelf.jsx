import React from "react";
import useGoodreadsShelf from "../hooks/useGoodreadsShelf";
import BookList from "./BookList";
import Loader from "./Loader";

export default (props) => {
  const { books, loading, error } = useGoodreadsShelf(props);

  return (
    <div className="goodreads-shelf">
      {loading ? <Loader /> : <BookList books={books} bookWidth={props.width} />}

      {error && <div>Sorry, we couldn't load books right now</div>}
    </div>
  );
};
