import { Counter } from "./Counter";
import { BookGroup } from "../../../react-goodreads-shelf/src/types";
import { GoodreadsBookshelfPresentation } from "../../../react-goodreads-shelf/src";

export { Page };

function Page({ books }: { books: BookGroup[] }) {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <GoodreadsBookshelfPresentation
        books={books}
        width={100}
        displayOptions={{ hideBackgroundImages: true, hideDetails: true }}
      />
    </>
  );
}
