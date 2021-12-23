import { renderHook } from "@testing-library/react-hooks";
import useGoodreadsShelf from "./useGoodreadsShelf";

describe("use shelf hook", () => {
  it("handles loading state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
  });
});
