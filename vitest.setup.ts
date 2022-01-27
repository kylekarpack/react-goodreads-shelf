import "@testing-library/jest-dom";
import { vi } from "vitest";

beforeAll(() => {
  window.fetch = vi.fn().mockImplementation(() => null);

  vi.spyOn(window, "fetch").mockImplementation(() => {
    return Promise.resolve({
      text: () => Promise.resolve([])
    });
  });
});
