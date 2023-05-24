import { Counter } from "./Counter";
import { GoodreadsBookshelf } from "../../../react-goodreads-shelf/src";
import { BookGroup } from "../../../react-goodreads-shelf/src/types";

export { Page };

function Page({ books }: { books: BookGroup[] }) {
  return (
    <>
      POSTS: {JSON.stringify(books)}
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <GoodreadsBookshelf userId="63515611" width={80} limit={50} displayOptions={{ hideDetails: true }} />
    </>
  );
}
