export type Props = {
  /** The user ID for whom to fetch books */
  userId: string;
  /** The shelf from which to fetch books */
  shelf?: string;
  /** Minimum width allowed for each book */
  width?: number;
  /** The field by which to sort the results returned */
  sort?: string;
  /** The direction in which to sort the results */
  order?: "a" | "d";
  /** The maximum number of books to be returned */
  limit?: number;
  /** Optional search text */
  search?: string;
};
