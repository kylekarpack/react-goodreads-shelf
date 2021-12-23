import { useEffect, useState } from "react";
import { Book, Props } from "../types";
import { getUrl, getBooksFromHtml } from "../util";

export default function useGoodreadsShelf(props: Props) {
  const { userId, limit, order, search, shelf, sort } = props;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

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
      setError(error as Error);
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
