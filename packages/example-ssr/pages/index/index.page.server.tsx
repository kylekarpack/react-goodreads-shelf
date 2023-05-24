import { Counter } from "./Counter";
import { GoodreadsBookshelf } from "../../../react-goodreads-shelf/src";

export { Page };

function Page() {
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
      <GoodreadsBookshelf userId="63515611" width={80} limit={50} displayOptions={{ hideDetails: true }} />
    </>
  );
}
