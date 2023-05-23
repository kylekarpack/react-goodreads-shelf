import React from "react";
import { createRoot } from "react-dom/client";
// eslint-disable-next-line node/no-unpublished-import
import { GoodreadsBookshelf } from "../react-goodreads-shelf/src";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
  <div>
    <style dangerouslySetInnerHTML={{ __html: "body { font-family: sans-serif }" }}></style>
    <h1>React Goodreads Shelf Demo Page</h1>
    <GoodreadsBookshelf userId="63515611" width={80} limit={50} displayOptions={{ hideDetails: true }} />
  </div>
);
