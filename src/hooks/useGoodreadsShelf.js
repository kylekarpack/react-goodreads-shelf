import { useEffect, useState } from "react";

export default function useGoodreadsShelf(props) {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(true);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${props.userId}?ref=nav_mybooks&shelf=${props.shelf}`;
				const response = await fetch(url);
				const parser = new DOMParser();
				const goodreadsDocument = parser.parseFromString(
					await response.text(),
					"text/html"
				);
				const bookElements = [
					...goodreadsDocument.querySelectorAll("#booksBody .bookalike"),
				];

				const books = bookElements.map((row) => {
					const isbn = row.querySelector("td.field.isbn .value").innerText;
					return {
						id: isbn,
						isbn: isbn,
						title: row.querySelector("td.field.title a").getAttribute("title"),
						author: row.querySelector("td.field.author .value").innertext,
						cover: row
							.querySelector("td.field.cover img")
							.getAttribute("src")
							// Get the full sized thumbnail
							.replace(/\._\w+\d+_/, ""),
						url: `https://www.goodreads.com/${row
							.querySelector("td.field.cover a")
							.getAttribute("href")}`,
					};
				});

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
