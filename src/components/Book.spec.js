import { shallow } from "enzyme";
import React from "react";
import Book from "./Book";

describe("testing book", () => {
  it("renders without crashing", () => {
    const book = shallow(<Book />);
    expect(book).toMatchSnapshot();
  });

  it("renders a book", () => {
    const data = { description: "Test" };
    const book = shallow(<Book book={data} />);
    expect(book).toMatchSnapshot();
  });
});
