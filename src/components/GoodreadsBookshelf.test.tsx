import { act, render } from "@testing-library/react";
import GoodreadsBookshelf from "./GoodreadsBookshelf";

describe("bookshelf component", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId={null} />);
      expect(shelf).toBeInTheDocument();
    });
  });

  it("works with API key", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId="testUser" />);
      expect(shelf).toBeInTheDocument();
    });
  });

  it("passes props properly", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId="testUser" limit={15} shelf="read" sort="date_read" />);
      expect(shelf).toBeInTheDocument();
    });
  });
});
