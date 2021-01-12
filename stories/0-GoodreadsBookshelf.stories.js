import React from "react";
import { GoodreadsBookshelf } from "../dist/index";

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

export default {
	title: "GoodreadsBookshelf",
	component: GoodreadsBookshelf,
	argTypes: {
		userId: {
			name: "User ID",
			defaultValue: "63515611",
			control: {
				type: "text",
			},
		},
		apiKey: {
			name: "API Key",
			defaultValue: "", // ToDo: add a description here
			control: {
				type: "text",
			},
		},
		width: {
			name: "Book Width",
			defaultValue: 100,
			control: {
				type: "number",
				min: 20,
				max: 400,
			},
		},
		// details: {
		// 	name: "Details",
		// 	defaultValue: false,
		// 	control: {
		// 		type: "boolean",
		// 	},
		// },
		limit: {
			name: "Number of Books",
			defaultValue: 3,
			control: {
				type: "number",
				min: 1,
				max: 50,
			},
		},
		shelf: {
			name: "Shelf Name",
			defaultValue: "read",
			control: {
				type: "select",
				options: shelves
			},
		},
		sort: {
			name: "Sort Field",
			defaultValue: "date_read",
			control: {
				type: "select",
				options: sorts,
			},
		},
		order: {
			name: "Order",
			defaultValue: "d",
			control: {
				type: "inline-radio",
				options: ["a", "d"],
			},
		},
		search: {
			name: "Search Text",
			defaultValue: "",
			control: {
				type: "text",
			},
		},
	},
};

export const Story = (args) => <GoodreadsBookshelf {...args} />;
