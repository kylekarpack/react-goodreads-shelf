import { useEffect, useState } from "react";
import { Book, Props } from "../types";
import { getUrl } from "../util/get-url";
import { getBooksFromHtml } from "../util/html-utils";

export default function useGoodreadsShelf(props: Props) {
  const { userId, limit, order, search, shelf, sort } = props;
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
      const html = await response.text();
      const books = getBooksFromHtml(html);
      setBooks(books);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    fetchBooks();
  }, [userId, limit, order, search, shelf, sort]);

  return { books, loading, error };
}
