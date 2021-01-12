import React from "react";
import useGoodreadsApi from "../hooks/useGoodreadsApi";
import useGoodreadsShelf from "../hooks/useGoodreadsShelf";
import BookList from "./BookList";
import Loader from "./Loader";

export default (props) => {
	// If directed to use API, do that, otherwise scrape the site
	const { books, loading, error } =
		props.apiKey ? useGoodreadsApi(props) : useGoodreadsShelf(props);

	return (
		<div className="goodreads-shelf">
			{loading ? (
				<Loader />
			) : (
				<BookList books={books} bookWidth={props.width} />
			)}

			{error && <div>Sorry, we couldn't load books right now</div>}
		</div>
	);
};
