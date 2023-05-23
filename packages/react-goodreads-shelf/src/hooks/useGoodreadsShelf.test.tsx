import { renderHook } from "@testing-library/react-hooks";
import { vi } from "vitest";
import useGoodreadsShelf from "./useGoodreadsShelf";

describe("use shelf hook", () => {
  it("handles loading state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
  });

  it("handles errors", async () => {
    const message = "some error message";
    const spy = vi.spyOn(window, "fetch");
    spy.mockImplementationOnce(() => Promise.reject(message));

    const { result, waitForNextUpdate } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(result.current.error).toBeNull();
    await waitForNextUpdate();
    expect(result.current.error).toBe(message);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
