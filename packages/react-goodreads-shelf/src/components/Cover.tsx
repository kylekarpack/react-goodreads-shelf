import { CSSProperties, FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import type { Book, Props } from "../types";
import Placeholder from "./Placeholder";
import styles from "./Cover.module.css";

const Cover: FunctionComponent<{ book: Book; options?: Props }> = ({ book, options }) => {
  const [state, setState] = useState({ error: false });
  const [isInView, setIsInView] = useState(false);

  const root = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          observer.disconnect();
        }

        setIsInView(isIntersecting);
      },
      { threshold: 0 }
    );
    if (root?.current) {
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
          opacity: isInView ? 1 : 0
        };
      },
    [imageUrl, isInView, options?.displayOptions?.hideBackgroundImages]
  );

  return (
    <div ref={root} className={`rgs-cover ${styles.cover}`} style={getBackground(imageUrl!)}>
      {state.error ? (
        <div className="rgs-placeholder" data-testid="placeholder">
          <Placeholder />
        </div>
      ) : (
        <div>
          <img
            alt={book.title}
            className={`rgs-image ${styles.image}`}
            src={imageUrl}
            loading="lazy"
            onError={onError}
          />
        </div>
      )}
    </div>
  );
};

export default Cover;
