import { Book, BookGroup, FetchResults, Props } from "../types";
import { getUrl } from "./get-url";
import { uuidv4 } from "./uuid";

const GOODREADS_PAGE_SIZE = 30;

export const ALL_GROUP_TITLE = "All";

export const fetchBooks = async (props: Props): Promise<BookGroup[]> => {
  // Get first page
  const firstPage = await fetchPage(1, props);
  const maxBooks = Math.min(props.limit ?? 10, firstPage.status.total);
  const maxPages = Math.ceil(maxBooks / GOODREADS_PAGE_SIZE);
  const promises: Promise<FetchResults>[] = [];

  for (let i = 2; i <= maxPages; i++) {
    promises.push(fetchPage(i, props));
  }

  const data = await Promise.all(promises);

  data.sort((a, b) => {
    return a.status.end - b.status.end;
  });

  let books = data.reduce((prev, cur) => {
    return prev.concat(cur.data);
  }, firstPage.data);

  // Clean up the response a little
  for (const book of books) {
    book.dateAdded = new Date(String(book.dateAdded));
    book.dateRead = new Date(String(book.dateRead));
    book.id = book.isbn || book.asin || uuidv4();
  }

  // Optionally filter the books
  if (props.filter) {
    books = books.filter(props.filter);
  }

  if (props.limit) {
    books = books.slice(0, props.limit);
  }

  if (props.groupBy) {
    const grouped = books.reduce((prev: { [key: string]: Book[] }, cur: Book) => {
      const key = String((cur.dateRead || cur.dateAdded)?.getFullYear());
      prev[key] = prev[key] || [];
      prev[key].push(cur);
      return prev;
    }, {});

    const groups: BookGroup[] = [];
    for (const key in grouped) {
      groups.push({
        title: key,
        books: grouped[key]
      });
    }
    groups.sort((a, b) => {
      return Number(b.title) - Number(a.title);
    });
    return groups;
  } else {
    return [
      {
        title: ALL_GROUP_TITLE,
        books
      }
    ];
  }
};

const fetchPage = async (page: number, props: Props): Promise<FetchResults> => {
  // Get the books from Goodreads
  const url = getUrl(props, page);
  url.searchParams.append("page", String(page));
  const response = await fetch(url.toString());

  return await response.json();
};
