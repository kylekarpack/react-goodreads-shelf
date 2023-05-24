import type { BookGroup } from "../../../react-goodreads-shelf";
import GoodreadsBookshelf, { GoodreadsBookshelfPresentation } from "../../../react-goodreads-shelf";

export { Page };

function Page({ books }: { books: BookGroup[] }) {
  return (
    <>
      <h1>SSR Rendered:</h1>
      <GoodreadsBookshelfPresentation
        books={books}
        width={80}
        displayOptions={{ hideBackgroundImages: true, hideDetails: true }}
      />

      <h1>Client-Side Rendered:</h1>
      <GoodreadsBookshelf
        userId="63515611"
        width={80}
        limit={10}
        displayOptions={{ hideBackgroundImages: true, hideDetails: true }}
      />
    </>
  );
}
