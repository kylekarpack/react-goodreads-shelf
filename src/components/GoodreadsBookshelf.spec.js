import GoodreadsBookshelf from "./GoodreadsBookshelf";
import React from "react";
import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

const shelf = shallow(<GoodreadsBookshelf />);

it("renders without crashing", () => {
	expect(shelf).toBeDefined();
});

