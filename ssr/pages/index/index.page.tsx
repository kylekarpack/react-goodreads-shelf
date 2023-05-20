import { Counter } from "./Counter";
import { GoodreadsBookshelf } from "../../../src/";

export { Page };

function Page() {
  return (
    <>
      <GoodreadsBookshelf userId="63515611" width={100} />
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
