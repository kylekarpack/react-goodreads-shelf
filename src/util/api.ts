import { Book, BookGroup, FetchResults, Props, Status } from "../types";
import { getUrl } from "./get-url";
import { getBooksFromHtml } from "./html-utils";

const GOODREADS_PAGE_SIZE = 30;

export const ALL_GROUP_TITLE = "All";

export const fetchAllBooks = async (props: Props): Promise<BookGroup[]> => {
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
    return prev.concat(cur.books);
  }, firstPage.books);

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
  const response = await window.fetch(url.toString(), { headers: { accept: "text/javascript" } });

  // Simulate success if we get a 204 No Content response
  if (response.status === 204) {
    return {
      books: [],
      status: {
        end: page * 30,
        total: 0
      }
    };
  }

  const responseBody = await response.text();
  const { html, status } = parseJsonP(responseBody);
  const table = `<table>${html}</table>`;
  const books = getBooksFromHtml(table, props.width);
  return {
    books,
    status
  };
};

const parseJsonP = (jsonp: string): { html: string; status: Status } => {
  const [html, status] = jsonp.split("\n");

  // eslint-disable-next-line quotes
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
