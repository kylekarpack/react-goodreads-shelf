import React, { CSSProperties, FunctionComponent, useState } from "react";
import { Book } from "../types";
import Placeholder from "./Placeholder";

const bookStyle: CSSProperties = {
  textAlign: "left",
  marginBottom: "1vw"
};

const imageStyle: CSSProperties = {
  width: "100%"
};

const Book: FunctionComponent<{ book: Book }> = ({ book }) => {
  const [state, setState] = useState({ error: false });

  if (!book) {
    return null;
  }

  // Truncate description
  book.description = book.description?.toString()?.substring(0, 200) + "...";

  return (
    <div style={bookStyle} title={book.title}>
      <a href={book.link} target="_blank">
        {state.error ? (
          <Placeholder />
        ) : (
          <img style={imageStyle} src={book.image_url} onError={() => setState({ error: true })} />
        )}
      </a>
    </div>
  );
};

export default Book;
