import { vi } from "vitest";
import { fetchAllBooks } from "./api";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../__test__/data/jsonp.test.html");
const sampleResponse = fs.readFileSync(filePath).toString();

describe("api", () => {
  beforeAll(() => {
    const fetch = vi.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve(sampleResponse)
      })
    );

    vi.stubGlobal("fetch", fetch);
  });

  it("fetches books", async () => {
    const [bookGroup] = await fetchAllBooks({ userId: "123" });
    expect(bookGroup.books.length).toBe(30);
  });

  it("stops when getting a 204", async () => {
    const fetch = vi.fn(() =>
      Promise.resolve({
        status: 204
      })
    );

    vi.stubGlobal("fetch", fetch);
    const [bookGroup] = await fetchAllBooks({ userId: "123" });
    expect(bookGroup.books.length).toBe(0);
  });
});
