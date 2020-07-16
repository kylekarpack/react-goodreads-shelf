import { text, number, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { GoodreadsBookshelf } from "../dist/index";

export default {
	title: "GoodreadsBookshelf",
	decorators: [withKnobs],
};

export const Story = () => (
	<GoodreadsBookshelf
		userId={text("User ID", "63515611")}
		apiKey={text("API Key", "PsmXJodsWJgBPgTosjdEkQ")}
		limit={number("Limit", 20)}
	/>
);
