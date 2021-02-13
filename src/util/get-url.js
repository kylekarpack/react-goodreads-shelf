export const getUrl = (props) => {
	// Build a request to the Goodreads API
	const url = new URL(
		`https://cors.kylekarpack.workers.dev/corsproxy/?apiurl=https://www.goodreads.com/review/list/${props.userId}`
	);

	// If an API key is included, GoodReads will return an XML response
	// Otherwise, get the HTML and parse it
	if (props.apiKey) {
		url.searchParams.set("key", props.apiKey);
		url.searchParams.set("v", 2);
	}
	url.searchParams.set("per_page", props.limit || 10);
	url.searchParams.set("shelf", props.shelf || "read");
	url.searchParams.set("sort", props.sort || "date_read");
	url.searchParams.set("order", props.order || "d");

	// If this is provided as an empty string, you can get wildly different results for currently-reading
	if (props.search) {
		url.searchParams.set("search[query]", props.search);
	}

	return url;
};
