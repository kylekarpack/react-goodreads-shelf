import { shallow } from "enzyme";
import React from "react";
import Book from "./Book";

describe("testing book", () => {

	it("renders without crashing", () => {
		const shelf = shallow(<Book />);
		expect(shelf).toMatchSnapshot();
	});
	
});