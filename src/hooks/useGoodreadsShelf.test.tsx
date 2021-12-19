import React from "react";
import { shallow } from "enzyme";
import useGoodreadsShelf from "./useGoodreadsShelf";

describe("use shelf hook", () => {
  it("loads", () => {
    const Cmp = () => {
      const { loading, books, error} = useGoodreadsShelf({ userId: null });
      return <></>
    }

    const rnd = shallow(<Cmp />);
    expect(rnd).toBeDefined();
  });
});
