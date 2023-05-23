import { Book } from "./book";

export type Status = {
  total: number;
  start: number;
  end: number;
  pageSize: number;
};

export type FetchResults = {
  data: Book[];
  status: Status;
};

export type BookGroup = {
  title: string;
  books: Book[];
};
