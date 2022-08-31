import React, { CSSProperties, FunctionComponent, useState } from "react";
import type { Book } from "../types";
import Placeholder from "./Placeholder";

const imageStyle: CSSProperties = {
  display: "block",
  objectFit: "contain",
  maxWidth: "100%",
  height: "270px"
};

const Cover: FunctionComponent<{ book: Book }> = ({ book }) => {
  const [state, setState] = useState({ error: false });
  const onError = () => setState({ error: true });

  let { imageUrl } = book;
  if (!imageUrl) {
    if (book.isbn) {
      imageUrl = `https://images-na.ssl-images-amazon.com/images/P/${book.isbn}.01._SCLZZZZZZZ_.jpg`;
    } else if (book.asin) {
      imageUrl = `https://images-na.ssl-images-amazon.com/images/P/${book.asin}.01._SCLZZZZZZZ_.jpg`;
    }
  }

  return (
    <div>
      {state.error ? (
        <div data-testid="placeholder">
          <Placeholder />
        </div>
      ) : (
        <img alt={book.title} style={imageStyle} src={imageUrl} onError={onError} />
      )}
    </div>
  );
};

export default Cover;
