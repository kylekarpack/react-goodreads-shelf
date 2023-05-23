import { CSSProperties } from "react";
import { Book } from "./book";

type SortKey =
  | "title"
  | "author"
  | "cover"
  | "rating"
  | "year_pub"
  | "date_pub"
  | "date_pub_edition"
  | "date_started"
  | "date_read"
  | "date_updated"
  | "date_added"
  | "recommender"
  | "avg_rating"
  | "num_ratings"
  | "review"
  | "read_count"
  | "votes"
  | "random"
  | "comments"
  | "notes"
  | "isbn"
  | "isbn13"
  | "asin"
  | "num_pages"
  | "format"
  | "position"
  | "shelves"
  | "owned"
  | "date_purchased"
  | "purchase_location"
  | "condition";

type GroupBy = "year";

type HideDetails = { [Property in keyof Book]?: boolean };

type DisplayOptions = {
  hideDetails?: boolean | HideDetails;
  hideBackgroundImages?: boolean;
  gridStyle?: Pick<CSSProperties, "columnGap" | "rowGap">;
};

export type Props = {
  /** The user ID for whom to fetch books */
  userId: string;
  /** The shelf from which to fetch books */
  shelf?: "read" | "currently-reading" | "to-read" | string;
  /** Minimum width allowed for each book */
  width?: string | number;
  /** The field by which to sort the results returned */
  sort?: SortKey;
  /** The direction in which to sort the results */
  order?: "a" | "d";
  /** The maximum number of books to be returned */
  limit?: number;
  /** Optional search text */
  search?: string;
  /** Shelf display options */
  displayOptions?: DisplayOptions;
  /** Filter book option */
  filter?: (book: Book) => boolean;
  /** Group by option */
  groupBy?: GroupBy;
};
