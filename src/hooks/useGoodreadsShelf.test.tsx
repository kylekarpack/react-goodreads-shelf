import { renderHook, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import useGoodreadsShelf from "./useGoodreadsShelf";

describe("use shelf hook", () => {
  it("handles loading state", async () => {
    const { result } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it("handles errors", async () => {
    const message = "some error message";
    const spy = vi.spyOn(window, "fetch");
    spy.mockImplementationOnce(() => Promise.reject(message));

    const { result } = renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(result.current.error).toBeNull();
    await waitFor(() => {
      expect(result.current.error).toBe(message);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
