import React, { CSSProperties, FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import type { Book, Props } from "../types";
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

const Cover: FunctionComponent<{ book: Book; options?: Props }> = ({ book, options }) => {
  const [state, setState] = useState({ error: false });
  const [isInView, setIsInView] = useState(false);

  const root = useRef(null); // the container

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          // is in view
          observer.disconnect();
        }

        setIsInView(isIntersecting);
      },
      { threshold: 0 }
    );
    if (root.current) {
      observer.observe(root.current);
    }
  }, []);

  let { imageUrl } = book;
  if (!imageUrl) {
    if (book.isbn) {
      imageUrl = `https://images-na.ssl-images-amazon.com/images/P/${book.isbn}.01._SCLZZZZZZZ_.jpg`;
    } else if (book.asin) {
      imageUrl = `https://images-na.ssl-images-amazon.com/images/P/${book.asin}.01._SCLZZZZZZZ_.jpg`;
    }
  }

  const onError = () => setState({ error: true });

  const getBackground = useMemo(
    () =>
      (imageUrl: string): CSSProperties => {
        let backgroundImage = "";

        if (!options?.displayOptions?.hideBackgroundImages) {
          if (isInView) {
            backgroundImage = `url("${imageUrl}")`;
          }
        }

        return {
          backgroundImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 0",
          opacity: isInView ? 1 : 0,
          transition: "opacity .25s ease-in-out"
        };
      },
    [imageUrl, isInView, options?.displayOptions?.hideBackgroundImages]
  );

  return (
    <div ref={root} style={getBackground(imageUrl!)}>
      {state.error ? (
        <div data-testid="placeholder">
          <Placeholder />
        </div>
      ) : (
        <div>
          <img alt={book.title} style={imageStyle} src={imageUrl} loading="lazy" onError={onError} />
        </div>
      )}
    </div>
  );
};

export default Cover;
