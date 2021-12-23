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
  const onError = () => setState({ error: true });

  if (!book) {
    return null;
  }

  return (
    <div style={bookStyle} title={book.title}>
      <a href={book.link} target="_blank">
        {state.error ? (
          <div data-testid="placeholder">
            <Placeholder />
          </div>
        ) : (
          <img alt={book.title} style={imageStyle} src={book.imageUrl} onError={onError} />
        )}
      </a>
    </div>
  );
};

export default Book;
