import GoodreadsBookshelf from "./GoodreadsBookshelf";
import React from "react";
import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

test("renders without crashing", () => {
	const shelf = shallow(<GoodreadsBookshelf />);
	expect(shelf).toBeDefined();
});

