import { useEffect, useMemo, useState } from "react";
import { Book, Props } from "../types";
import { getUrl } from "../util/get-url";

const bookMapper = (row: Element, index: number): Book => {
  const isbn = row?.querySelector("td.field.isbn .value")?.textContent?.trim();
  const title = row?.querySelector("td.field.title a")?.getAttribute("title") ?? "";
  const author = row?.querySelector("td.field.author .value")?.textContent?.trim();
  const image_url = row
    ?.querySelector("td.field.cover img")
    ?.getAttribute("src")
    // Get the full sized thumbnail
    ?.replace(/\._\w+\d+_/, "");
  const href = row?.querySelector("td.field.cover a")?.getAttribute("href");

  return {
    id: `${isbn}_${index}`,
    isbn,
    title,
    author,
    image_url,
    link: `https://www.goodreads.com/${href}`
  };
};

export default function useGoodreadsShelf(props: Props) {
  const memoizedProps = useMemo(() => props, []);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get the books from Goodreads
      const url = getUrl(props);
      const response = await fetch(url.toString());
      const parser = new DOMParser();
      const goodreadsDocument = parser.parseFromString(await response.text(), "text/html");
      const bookElements = Array.from(goodreadsDocument.querySelectorAll("#booksBody .bookalike")).slice(
        0,
        props.limit ?? 10
      );

      const books = bookElements.map(bookMapper);

      setBooks(books);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!props) {
      return;
    }
    fetchBooks();
  }, [memoizedProps]);

  return { books, loading, error };
}
