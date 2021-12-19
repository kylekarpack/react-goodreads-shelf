import { useEffect, useState } from "react";
import { Props } from "../types";
import { getUrl } from "../util/get-url";

export default function useGoodreadsShelf(props: Props) {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = getUrl(props);
        const response = await fetch(url.toString());
        const parser = new DOMParser();
        const goodreadsDocument = parser.parseFromString(await response.text(), "text/html");
        const bookElements = Array.from(goodreadsDocument.querySelectorAll("#booksBody .bookalike")).slice(
          0,
          props.limit || 10
        );

        const books = bookElements.map((row, index) => {
          const isbn = row?.querySelector("td.field.isbn .value")?.textContent?.trim();
          return {
            id: `${isbn}_${index}`,
            isbn: isbn,
            title: row?.querySelector("td.field.title a")?.getAttribute("title"),
            author: row?.querySelector("td.field.author .value")?.textContent?.trim(),
            image_url: row
              ?.querySelector("td.field.cover img")
              ?.getAttribute("src")
              // Get the full sized thumbnail
              ?.replace(/\._\w+\d+_/, ""),
            link: `https://www.goodreads.com/${row?.querySelector("td.field.cover a")?.getAttribute("href")}`
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
