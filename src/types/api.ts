import { Book } from "./book";

export type Status = { end: number; total: number };

export type FetchResults = {
  books: Book[];
  status: Status;
};
