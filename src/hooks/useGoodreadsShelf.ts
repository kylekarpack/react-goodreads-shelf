import { useEffect, useState } from "react";
import { Book, Props } from "../types";
import { fetchPage, FetchResults } from "../util/html-utils";

const GOODREADS_PAGE_SIZE = 30;

const useGoodreadsShelf = (props: Props) => {
  const { userId, limit, order, search, shelf, sort } = props;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchAllBooks = async () => {
    setLoading(true);

    // Get first page
    const firstPage = await fetchPage(1, props);
    const maxBooks = Math.min(limit ?? 10, firstPage.status.total);
    const maxPages = Math.ceil(maxBooks / GOODREADS_PAGE_SIZE);
    const promises = [];

    for (let i = 2; i <= maxPages; i++) {
      promises.push(fetchPage(i, props));
    }

    let data: FetchResults[];

    try {
      setError(null);
      data = await Promise.all(promises);
      setLoading(false);
    } catch (err: unknown) {
      setError(err as Error);
      setLoading(false);
      return;
    }

    data.sort((a, b) => {
      return a.status.end - b.status.end;
    });

    const books = data.reduce((prev, cur) => {
      return prev.concat(cur.books);
    }, firstPage.books);

    setBooks(books.slice(0, limit));
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    fetchAllBooks();
  }, [userId, limit, order, search, shelf, sort]);

  return { books, loading, error };
};

export default useGoodreadsShelf;
