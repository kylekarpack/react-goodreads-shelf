import { Book } from "../types";

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

export const getBooksFromHtml = (html: string, limit = 10): Book[] => {
  const parser = new DOMParser();
  const goodreadsDocument = parser.parseFromString(html, "text/html");
  const bookElements = Array.from(goodreadsDocument.querySelectorAll("#booksBody .bookalike")).slice(0, limit);
  const books = bookElements.map(bookMapper);
  return books;
};
