import React, { useState, useEffect } from "react";
import { Xml } from "../util/xml2js-utils";
import Book from "./Book";
import Loader from "./Loader";

const shelfStyle = (minWidth) => ({
	display: "grid",
	alignItems: "center",
	gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
	gridColumnGap: "1vw",
	margin: "1vw",
	textAlign: "center",
});

export default (props) => {

	const [state, setState] = useState({
		books: [],
		loaded: false,
		options: props.options || { width: 100 },
	});

	const getUrl = () => {
		// Build a request to the Goodreads API
		const url = new URL(
			`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${props.userId}`
		);
		url.searchParams.set("key", props.apiKey);
		url.searchParams.set("per_page", props.limit || 10);
		url.searchParams.set("shelf", props.shelf || "read");
		url.searchParams.set("sort", props.sort || "date_read");
		url.searchParams.set("v", 2);
		return url;
	};

	const getBooksJson = async () => {
		if (typeof window !== "undefined" && window.fetch) {
			const url = getUrl();
			const response = await fetch(url);
			const xmlText = await response.text();
			const json = Xml.parseXmlStringToObject(xmlText);

			// This is where the list of books is stored:
			const books = json?.GoodreadsResponse?.reviews || [];
			for (let { book } of books) {
				if (book?.image_url?.includes("/nophoto/")) {
					book.image_url = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`;
				}
			}

			return books;
		} else {
			throw "Error: fetch is not defined in this environment";
		}
	};

	const getBooks = async () => {
		setState({
			...state,
			loaded: false,
		});

		try {
			const books = await getBooksJson();

			setState({
				...state,
				books: Array.isArray(books) ? books : [books],
				loaded: true,
			});
		} catch (e) {
			console.error(e);

			// Indicate that we errored
			setState({
				...state,
				loaded: true,
				error: true,
			});
		}
	};

	// Get books when props are updated
	useEffect(() => {
		getBooks();
	}, [props])

	return (
		<div className="goodreads-shelf">
			<div style={shelfStyle(state.options?.width)}>
				{state.books.map((book) => {
					return (
						<Book key={book.id} book={book.book} options={state.options} />
					);
				})}
			</div>
			{state.loaded ? "" : <Loader />}
			{state.error ? (
				<div>Sorry, we couldn't load books right now</div>
			) : (
				""
			)}
		</div>
	);
};
