import { useEffect, useState } from "react";
import { getUrl } from "../util/get-url";
import { Xml } from "../util/xml2js-utils";

export default function useGoodreadsApi(props) {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				setLoading(true);
				setError(null);
				const url = getUrl(props);
				const response = await fetch(url);
				const xmlText = await response.text();
				const json = Xml.parseXmlStringToObject(xmlText);

				// This is where the list of books is stored:
				const books =
					json?.GoodreadsResponse?.reviews?.map((b) => b.book) || [];

				for (let book of books) {
					if (book?.image_url?.includes("/nophoto/")) {
						book.image_url = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`;
					}
				}

				setBooks(books);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		if (props) {
			fetchBooks();
		}
	}, [props]);

	return { books, loading, error };
}
