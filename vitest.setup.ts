import "@testing-library/jest-dom"; // needed for testing-library assertions
import { vi } from "vitest";

// Mock fetch
beforeAll(() => {
  window.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      text: () => Promise.resolve([])
    })
  );
});
