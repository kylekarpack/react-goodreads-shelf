import { useEffect, useState } from "react";
import { BookGroup, Props } from "../types";
import { fetchBooks } from "../util";

const useGoodreadsShelf = (props: Props) => {
  const { userId, limit, order, search, shelf, sort } = props;
  const [books, setBooks] = useState<BookGroup[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);

    try {
      const books = await fetchBooks(props);
      setBooks(books);
    } catch (err: unknown) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    refresh();
  }, [userId, limit, order, search, shelf, sort]);

  return { books, loading, error };
};

export default useGoodreadsShelf;
