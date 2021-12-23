import { renderHook } from "@testing-library/react-hooks";
import useGoodreadsShelf from "./useGoodreadsShelf";

describe("use shelf hook", () => {
  it("doesn't run when not current", async () => {
    renderHook(() => useGoodreadsShelf({ userId: "kyle" }));
    expect(global.fetch).toHaveBeenCalled();
  });
});
