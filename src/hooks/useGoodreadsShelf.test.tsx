import React from "react";
import useGoodreadsShelf from "./useGoodreadsShelf";

describe("use shelf hook", () => {
  it("loads", () => {
    const Cmp = () => {
      const { loading, books, error} = useGoodreadsShelf({ userId: null });
      return <></>
    }

    // const rnd = render(<Cmp />);
    // expect(rnd).toBeDefined();
  });
});
