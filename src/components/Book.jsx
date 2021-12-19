import React, { useState } from "react";
import Placeholder from "./Placeholder";

const bookStyle = {
  textAlign: "left",
  marginBottom: "1vw"
};

const imageStyle = {
  width: "100%"
};

const authorStyle = {
  fontSize: "0.8rem",
  opacity: 0.5,
  display: "block",
  padding: "0.5rem 0"
};

const titleStyle = {
  fontSize: "1.2rem",
  borderBottom: "1px solid #eee",
  display: "block",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  paddingBottom: "0.5rem",
  marginBottom: "1rem"
};

const descriptionStyle = {
  opacity: 0.9,
  fontSize: "0.8rem"
};

export default ({ book, showDetails }) => {
  const [state, setState] = useState({ error: false });

  if (!book) {
    return "";
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
      {showDetails && (
        <div>
          <small style={authorStyle}>{book.author || book.authors?.author?.name}</small>
          <span style={titleStyle}>{book.title}</span>
          <p style={descriptionStyle} dangerouslySetInnerHTML={{ __html: book.description }}></p>
        </div>
      )}
    </div>
  );
};
