import { act, render } from "@testing-library/react";
import GoodreadsBookshelf from "./GoodreadsBookshelf";

describe("testing bookshelf", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId={null} />);
      expect(shelf).toMatchSnapshot();
    });
  });

  it("works with a user ID", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId="testUser" />);
      expect(shelf).toMatchSnapshot();
    });
  });

  it("passes props properly", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId="testUser" limit={15} shelf="read" sort="date_read" />);
      expect(shelf).toMatchSnapshot();
    });
  });
});
