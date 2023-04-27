import { BookGroup, Props } from "../types";
declare const useGoodreadsShelf: (props: Props) => {
    books: BookGroup[];
    loading: boolean;
    error: Error | null;
};
export default useGoodreadsShelf;
