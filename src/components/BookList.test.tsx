import { mount, shallow } from "enzyme";
import React from "react";
import BookList from "./BookList";

describe("testing book list", () => {
  it("renders without crashing", () => {
    const list = shallow(<BookList books={[]} />);
    expect(list).toMatchSnapshot();
  });

  it("passes props correctly", () => {
    const id = Math.round(Math.random() * 100000);
    const list = mount(<BookList books={[{ id }]} />);
    const books = list.props().books;
    expect(books.length).toEqual(1);
    expect(books[0].id).toEqual(id);
  });
});
