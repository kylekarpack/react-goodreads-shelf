import { render, act } from "@testing-library/react";
import GoodreadsBookshelf from "./GoodreadsBookshelf";

describe("testing bookshelf", () => {
  beforeEach(() => {
    const fetch = global.fetch as any;
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify({ GoodreadsResponse: { reviews: { review: [] } } }));
  });

  it("renders without crashing", () => {
    const shelf = render(<GoodreadsBookshelf userId={null} />);
    expect(shelf).toMatchSnapshot();
  });

  it("works with API key", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId="testUser" />);
      const props = shelf.props();
      expect(props.userId).toEqual("testUser");
    });
  });

  it("passes props properly", async () => {
    await act(async () => {
      const shelf = render(<GoodreadsBookshelf userId="testUser" limit={15} shelf="read" sort="date_read" />);

      const props = shelf.props();
      expect(props.limit).toEqual(15);
      expect(props.userId).toEqual("testUser");
      expect(props.shelf).toEqual("read");
      expect(props.sort).toEqual("date_read");
    });
  });
});
