import GoodreadsBookshelf from "./GoodreadsBookshelf";
import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});


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