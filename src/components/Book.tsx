import React, { CSSProperties, FunctionComponent, useState } from "react";
import { Book as BookType } from "../types";
import Placeholder from "./Placeholder";

const coverStyle: CSSProperties = {
  textAlign: "left"
};

const bookStyle: CSSProperties = {
  textAlign: "left"
};

const titleStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: "1.1em"
}

const imageStyle: CSSProperties = {
  width: "100%"
};

const Rating: FunctionComponent<{ stars: number }> = ({stars}) => {
  if (stars) {
    const arr = new Array(stars).fill("★");
    return <>
      {arr.map(el => <>{el}</>)}
    </>
  }
  return null;
}

const Book: FunctionComponent<{ book: BookType }> = ({ book }) => {
  const [state, setState] = useState({ error: false });
  const onError = () => setState({ error: true });

  if (!book) {
    return null;
  }

  return (
    <div>
      <div style={bookStyle} title={book.title}>
          <a href={book.link} target="_blank" rel="nofollow noreferrer">
            {state.error ? (
              <div data-testid="placeholder">
                <Placeholder />
              </div>
            ) : (
              <img alt={book.title} style={imageStyle} src={book.imageUrl} onError={onError} />
            )}
          </a>
        </div>
        <div>
          <div style={titleStyle}>
            {book.title}
          </div>
          <div>
            {book.author}
          </div>
          {book.rating ? <div><Rating stars={book.rating} /></div> : null}
        </div>
    </div>
  );
};

export default Book;
