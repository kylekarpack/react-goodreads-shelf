import { renderHook } from "@testing-library/react-hooks";
import { vi } from "vitest";
import useGoodreadsShelf from "./useGoodreadsShelf";

describe("use shelf hook", () => {
  it.skip("handles loading state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
  });

  it("handles errors", async () => {
    const message = "fake error message";
    window.fetch.mockImplementationOnce(() => {
      throw new Error(message);
    });
    const { result, waitForNextUpdate } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    //expect(result.current.error).toBeNull();
    await waitForNextUpdate();
    //expect(result.current.error).not.toBeNull();
    console.log(result.current);
  });
});
