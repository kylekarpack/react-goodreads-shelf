import "@testing-library/jest-dom"; // needed for testing-library assertions
import { vi } from "vitest";

// Mock fetch
const fetch = vi.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve([])
  })
);

vi.stubGlobal("fetch", fetch);

// Mock IntersectionObserver
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn()
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

// Mock crypto
const crypto = {
  randomUUID: vi.fn()
};

vi.stubGlobal("crypto", crypto);
