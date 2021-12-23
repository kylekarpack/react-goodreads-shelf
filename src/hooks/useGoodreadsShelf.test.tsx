import { renderHook } from "@testing-library/react-hooks";
import fetch from "jest-fetch-mock";
import useGoodreadsShelf from "./useGoodreadsShelf";

describe("use shelf hook", () => {
  beforeEach(() => {
    fetch.resetMocks();

  });

  it("handles loading state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
  });

  it("handles errors", async () => {
    fetch.mockRejectOnce(new Error("fake error message"));

    const { result, waitForNextUpdate } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(result.current.error).toBeNull();
    await waitForNextUpdate();
    expect(result.current.error).not.toBeNull();
  });
});
