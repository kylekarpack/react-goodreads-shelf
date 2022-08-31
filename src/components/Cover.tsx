import React, { CSSProperties, FunctionComponent, useState } from "react";
import type { Book } from "../types";
import Placeholder from "./Placeholder";

const imageStyle: CSSProperties = {
  display: "block",
  objectFit: "contain",
  width: "100%",
  aspectRatio: "2 / 3",
  position: "relative",
  zIndex: 2,
  backdropFilter: "blur(6px)"
};

const getBackground = (imageUrl: string): CSSProperties => {
  return {
    zIndex: 1,
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 0"
  };
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
    <div style={getBackground(imageUrl!)}>
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
