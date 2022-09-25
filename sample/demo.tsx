import React from "react";
import { createRoot } from "react-dom/client";
import { GoodreadsBookshelf } from "../src";

const container = document.getElementById("home");
const root = createRoot(container!);
root.render(
  <div>
    <style dangerouslySetInnerHTML={{ __html: "body { font-family: sans-serif }" }}></style>
    <h1>React Goodreads Shelf Demo Page</h1>
    <GoodreadsBookshelf userId="63515611" width={160} limit={20} groupBy="year" />
  </div>
);
