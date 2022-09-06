import { useEffect, useState } from "react";
import { Book, Props } from "../types";
import { fetchAllBooks } from "../util";

const useGoodreadsShelf = (props: Props) => {
  const { userId, limit, order, search, shelf, sort } = props;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);

    try {
      const books = await fetchAllBooks(props);
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
