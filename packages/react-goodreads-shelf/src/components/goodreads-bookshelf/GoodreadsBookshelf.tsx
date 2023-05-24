import { FunctionComponent } from "react";
import useGoodreadsShelf from "../../hooks/useGoodreadsShelf";
import { Props } from "../../types";
import Loader from "../loader/Loader";
import GoodreadsBookshelfPresentation from "./GoodreadsBookshelfPresentation";

/** Display a Goodreads bookshelf component */
const GoodreadsBookshelf: FunctionComponent<Props> = (props) => {
  const { books, loading, error } = useGoodreadsShelf(props);

  return (
    <div className="rgs-shelf">
      {loading ? <Loader /> : <GoodreadsBookshelfPresentation books={books} {...props} />}

      {error && <div>Sorry, we couldn't load books right now</div>}
    </div>
  );
};

export default GoodreadsBookshelf;
