import React, { useEffect, useState } from "react";
import { Xml } from "../util/xml2js-utils";
import BookList from "./BookList";
import Loader from "./Loader";

export default (props) => {

	const [state, setState] = useState({
		books: [],
		loaded: false,
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
		url.searchParams.set("order", props.order || "d");

		// If this is provided as an empty string, you can get wildly different
		// results for currently-reading
		if (props.search) {
			url.searchParams.set("search[query]", props.search);
		}

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
				error: false
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
	}, [props]);

	return (
		<div className="goodreads-shelf">
			{state.loaded ? (
				<BookList books={state.books} bookWidth={props.width} />
			) : (
				<Loader />
			)}
			{state.error ? <div>Sorry, we couldn't load books right now</div> : ""}
		</div>
	);
};
