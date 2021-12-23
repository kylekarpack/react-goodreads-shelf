import { Props } from "../types";

export const getUrl = (props: Props): URL => {
  // Build a request to the Goodreads API
  const url = new URL(`https://www.goodreads.com/review/list/${props.userId}`);

  url.searchParams.set("per_page", String(props.limit || 10));
  url.searchParams.set("shelf", props.shelf || "read");
  url.searchParams.set("sort", props.sort || "date_read");
  url.searchParams.set("order", props.order || "d");

  // If this is provided as an empty string, you can get wildly different results for currently-reading
  if (props.search) {
    url.searchParams.set("search[query]", props.search);
  }

  return new URL(`https://cors.kylekarpack.workers.dev/corsproxy/?apiurl=${encodeURIComponent(url.toString())}`);
};
