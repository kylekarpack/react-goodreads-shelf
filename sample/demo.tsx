import React from "react";
import { render } from "react-dom";
import { GoodreadsBookshelf } from "../src/index";

render(
  <div>
    <h1>React Goodreads Shelf Demo Page</h1>
    <GoodreadsBookshelf userId="63515611" />
  </div>,
  document.getElementById("home")
);
