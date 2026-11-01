import { FunctionComponent, useEffect } from "react";
import { Props } from "../types";
import { DEPRECATION_REASON, warnDeprecated } from "../util";

/** Display a Goodreads bookshelf component */
const GoodreadsBookshelf: FunctionComponent<Props> = () => {
  useEffect(() => {
    warnDeprecated();
  }, []);

  return (
    <div className="rgs-shelf rgs-deprecated" role="status" aria-live="polite">
      <p>
        <strong>react-goodreads-shelf is deprecated and no longer fetches data.</strong>
      </p>
      <p>{DEPRECATION_REASON}</p>
      <p>
        <a href="https://github.com/kylekarpack/react-goodreads-shelf#deprecation">
          Read the deprecation notice
        </a>
      </p>
    </div>
  );
};

export default GoodreadsBookshelf;