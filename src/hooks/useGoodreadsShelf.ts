import { useEffect, useState } from "react";
import { Book, Props } from "../types";
import { fetchPage, FetchResults } from "../util/html-utils";

const useGoodreadsShelf = (props: Props) => {
  const { userId, limit, order, search, shelf, sort } = props;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchAllBooks = async () => {
    const pageSize = 30;
    const maxPages = Math.ceil(limit! / pageSize);
    const promises = [];

    for (let i = 1; i <= maxPages; i++) {
      promises.push(fetchPage(i, props));
    }

    let data: FetchResults[];

    try {
      setLoading(true);
      setError(null);
      data = await Promise.all(promises);
    } catch (err: unknown) {
      setError(err as Error);
      return;
    } finally {
      setLoading(false);
    }

    data.sort((a, b) => {
      return a.status.end - b.status.end;
    });

    const books = data.reduce((prev, cur) => {
      return prev.concat(cur.books);
    }, [] as Book[]);

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
