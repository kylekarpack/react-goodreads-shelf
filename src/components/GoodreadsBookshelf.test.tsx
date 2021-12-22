import { render, act } from "@testing-library/react";
import GoodreadsBookshelf from "./GoodreadsBookshelf";

describe("testing bookshelf", () => {
  beforeEach(() => {
    const fetch = global.fetch as any;
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify({ GoodreadsResponse: { reviews: { review: [] } } }));
  });

  it("renders without crashing", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId={null} />);
      expect(shelf).toMatchSnapshot();
    });
  });

  it("works with API key", async () => {
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
