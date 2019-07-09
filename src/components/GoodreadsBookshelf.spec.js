import GoodreadsBookshelf from "./GoodreadsBookshelf";
import React from "react";
import { shallow, mount, render } from "enzyme";

describe("testing bookshelf", () => {

	beforeEach(() => {
		fetch.resetMocks();
		fetch.mockResponseOnce(JSON.stringify({ GoodreadsResponse: { reviews: { review: [] } } }));
	})

	it("renders without crashing", () => {
		const shelf = shallow(<GoodreadsBookshelf />);
		expect(shelf).toMatchSnapshot();
	});
	
	it("passes props properly", () => {
		const shelf = shallow(<GoodreadsBookshelf apiKey="test" userId="testUser" limit={15} shelf="read" sort="date_read" />);
		const props = shelf.instance().props;
		expect(props.limit).toEqual(15);
		expect(props.userId).toEqual("testUser");
		expect(props.apiKey).toEqual("test");
		expect(props.shelf).toEqual("read");
		expect(props.sort).toEqual("date_read");
	});
	
	// it("gets books", async () => {
	// 	const shelf = shallow(<GoodreadsBookshelf apiKey="test" userId="testUser" limit={15} shelf="read" sort="date_read" />);
	// 	const books = await shelf.instance().getBooksJson();
	// 	await expect(books.length).resolves.toBeLessThanOrEqual(15);
	// });
});