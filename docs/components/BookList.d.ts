import { FunctionComponent } from "react";
import { Book as BookType, Props } from "../types";
declare const BookList: FunctionComponent<{
    books: BookType[];
    options?: Props;
}>;
export default BookList;
