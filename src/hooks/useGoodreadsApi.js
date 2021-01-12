import { useEffect, useState } from "react";
import { Xml } from "../util/xml2js-utils";

const getUrl = (props) => {
	// Build a request to the Goodreads API
	const url = new URL(
		`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${props.userId}`
	);
	url.searchParams.set("key", props.apiKey);
	url.searchParams.set("per_page", props.limit || 10);
	url.searchParams.set("shelf", props.shelf || "read");
	url.searchParams.set("sort", props.sort || "date_read");
	url.searchParams.set("order", props.order || "d");

	// If this is provided as an empty string, you can get wildly different results for currently-reading
	if (props.search) {
		url.searchParams.set("search[query]", props.search);
	}

	url.searchParams.set("v", 2);
	return url;
};

export default function useGoodreadsApi(props) {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(true);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				setLoading(true);
				setError(false);
				const url = getUrl(props);
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
				console.log(books)
				setBooks(books);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		if (props) {
			fetchBooks();
		}
	}, [props]);

	return { books, loading, error };
}
