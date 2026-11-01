import { act, render, screen } from "@testing-library/react";
import GoodreadsBookshelf from "./GoodreadsBookshelf";

describe("bookshelf component", () => {
  it("renders the deprecation notice instead of fetching data", async () => {
    await act(async () => {
      render(<GoodreadsBookshelf userId="testUser" />);
    });
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText(/deprecated/i)).toBeInTheDocument();
  });

  it("does not crash without a user ID", async () => {
    await act(async () => {
      render(<GoodreadsBookshelf userId={null as unknown as string} />);
    });
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});