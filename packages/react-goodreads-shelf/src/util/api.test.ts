import { vi } from "vitest";
import { ALL_GROUP_TITLE, fetchBooks } from "./api";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../__test__/data/books.json");
const sampleResponse = JSON.parse(fs.readFileSync(filePath).toString());

describe("api", () => {
  beforeAll(() => {
    const fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(sampleResponse)
      })
    );

    vi.stubGlobal("fetch", fetch);
  });

  it("fetches books", async () => {
    const [bookGroup] = await fetchBooks({ userId: "123" });
    expect(bookGroup.books.length).toBe(30);
    expect(bookGroup.title).toBe(ALL_GROUP_TITLE);
  });

  it("fetches grouped books", async () => {
    const groups = await fetchBooks({ userId: "123", groupBy: "year" });
    expect(groups.length).toBe(3);
    expect(groups[0].title).toBe("2023");
    expect(groups[1].title).toBe("2022");
    expect(groups[2].title).toBe("2021");
  });

  it("fetches with limit", async () => {
    const [bookGroup] = await fetchBooks({ userId: "123", limit: 5 });
    expect(bookGroup.books.length).toBe(5);
  });

  it("fetches with filter", async () => {
    const [bookGroup] = await fetchBooks({
      userId: "123",
      filter: (book) => book.title?.includes("The Club") ?? false
    });

    expect(bookGroup.books.length).toBe(1);
  });
});
