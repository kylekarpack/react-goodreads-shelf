import { useEffect, useState } from "react";
import { Book, Props } from "../types";
import { getUrl, getBooksFromHtml } from "../util";

type Status = { end: number; total: number };

type FetchResults = {
  books: Book[];
  status: Status;
};

const useGoodreadsShelf = (props: Props) => {
  const { userId, limit, order, search, shelf, sort, width } = props;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const parseJsonP = (jsonp: string): { html: string; status: Status } => {
    const [html, status] = jsonp.split("\n");

    const json = html.replace('Element.insert("booksBody", ', "").replace(" });", "}").replace("bottom", '"bottom"');
    const output: string = JSON.parse(json).bottom;

    const matches = status.match(/(?<end>\d*) of (?<total>\d*) loaded/);
    return {
      html: output,
      status: {
        end: parseInt(matches?.groups?.end ?? "0"),
        total: parseInt(matches?.groups?.total ?? "0")
      }
    };
  };

  const fetchPage = async (page: number): Promise<FetchResults> => {
    // Get the books from Goodreads
    const url = getUrl(props, page);
    url.searchParams.append("page", String(page));
    const response = await window.fetch(url.toString(), { headers: { accept: "text/javascript" } });
    const responseBody = await response.text();
    const { html, status } = parseJsonP(responseBody);
    const table = `<table>${html}</table>`;
    return {
      books: getBooksFromHtml(table, limit, width),
      status
    };
  };

  const fetchAllBooks = async (limit?: number) => {
    limit = limit || 50;
    const pageSize = 30;
    const maxPages = Math.ceil(limit / pageSize);
    const promises = [];

    for (let i = 1; i <= maxPages; i++) {
      promises.push(fetchPage(i));
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
    fetchAllBooks(limit);
  }, [userId, limit, order, search, shelf, sort]);

  return { books, loading, error };
};

export default useGoodreadsShelf;
