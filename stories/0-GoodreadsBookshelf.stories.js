import {
	boolean,
	number,
	text,
	withKnobs,
	select,
} from "@storybook/addon-knobs";
import React from "react";
import { GoodreadsBookshelf } from "../dist/index";

export default {
	title: "GoodreadsBookshelf",
	decorators: [withKnobs],
};

const sorts = [
	"title",
	"author",
	"cover",
	"rating",
	"year_pub",
	"date_pub",
	"date_pub_edition",
	"date_started",
	"date_read",
	"date_updated",
	"date_added",
	"recommender",
	"avg_rating",
	"num_ratings",
	"review",
	"read_count",
	"votes",
	"random",
	"comments",
	"notes",
	"isbn",
	"isbn13",
	"asin",
	"num_pages",
	"format",
	"position",
	"shelves",
	"owned",
	"date_purchased",
	"purchase_location",
	"condition",
];

const shelves = ["read", "currently-reading", "to-read"];

export const Story = () => (
	<GoodreadsBookshelf
		userId={text("User ID", "63515611", "Auth")}
		apiKey={text("API Key", "PsmXJodsWJgBPgTosjdEkQ", "Auth")}
		width={number("Width", 100, { min: 20, max: 400 }, "Display")}
		details={boolean("Show Details", false, "Display")}
		limit={number("Limit", 20, { min: 1, max: 50 }, "API")}
		shelf={select("Shelf", shelves, "read", "API")}
		sort={select("Sort", sorts, "date_read", "API")}
		order={select("Order", ["a", "d"], "a", "API")}
		search={text("Search", "", "API")}
	/>
);
