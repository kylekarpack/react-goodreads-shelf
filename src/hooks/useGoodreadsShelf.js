import { useEffect, useState } from "react";
import { getUrl } from "../util/get-url";

export default function useGoodreadsShelf(props) {
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
				const parser = new DOMParser();
				const goodreadsDocument = parser.parseFromString(
					await response.text(),
					"text/html"
				);
				const bookElements = [
					...goodreadsDocument.querySelectorAll("#booksBody .bookalike"),
				];

				const books = bookElements.map((row, index) => {
					const isbn = row
						.querySelector("td.field.isbn .value")
						.innerText.trim();
					return {
						id: `${isbn}_${index}`,
						isbn: isbn,
						title: row.querySelector("td.field.title a").getAttribute("title"),
						author: row
							.querySelector("td.field.author .value")
							.innerText.trim(),
						image_url: row
							.querySelector("td.field.cover img")
							.getAttribute("src")
							// Get the full sized thumbnail
							.replace(/\._\w+\d+_/, ""),
						link: `https://www.goodreads.com/${row
							.querySelector("td.field.cover a")
							.getAttribute("href")}`,
					};
				});

				console.warn(books);
				setBooks(books);
			} catch (error) {
				console.log(error);
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
