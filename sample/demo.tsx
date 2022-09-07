import React from "react";
import { render } from "react-dom";
import { GoodreadsBookshelf } from "../src/index";
import { Book } from "../src/types";

const filter = (book: Book): boolean => {
  return !book.title?.toLowerCase()?.includes("hardy boys") && !book.subtitle?.toLowerCase()?.includes("hardy boys");
};

render(
  <div>
    <h1>React Goodreads Shelf Demo Page</h1>
    <GoodreadsBookshelf userId="63515611" limit={40} width={80} hideDetails={true} />
    <GoodreadsBookshelf userId="63515611" limit={250} groupBy="year" filter={filter} />
  </div>,
  document.getElementById("home")
);
