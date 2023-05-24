import { fetchBooks } from "../../../react-goodreads-shelf/src";

export { onBeforeRender };

async function onBeforeRender() {
  const books = await fetchBooks({
    userId: "63515611"
  });

  return {
    pageContext: {
      pageProps: {
        books
      }
    }
  };
}
