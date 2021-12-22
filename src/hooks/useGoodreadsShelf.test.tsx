import useGoodreadsShelf from "./useGoodreadsShelf";
import { renderHook, act } from "@testing-library/react-hooks";

describe("use shelf hook", () => {
  it("doesn't run when not current", async () => {
    renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(global.fetch).toHaveBeenCalled();
  });
});
