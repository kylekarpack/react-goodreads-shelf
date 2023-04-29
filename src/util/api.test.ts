import { vi } from "vitest";
import { ALL_GROUP_TITLE, fetchAllBooks } from "./api";
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
    expect(bookGroup.title).toBe(ALL_GROUP_TITLE);
  });

  it("fetches grouped books", async () => {
    const groups = await fetchAllBooks({ userId: "123", groupBy: "year" });
    expect(groups.length).toBe(2);
    expect(groups[0].title).toBe("2022");
    expect(groups[1].title).toBe("2021");
  });

  it("fetches with limit", async () => {
    const [bookGroup] = await fetchAllBooks({ userId: "123", limit: 5 });
    expect(bookGroup.books.length).toBe(5);
  });

  it("fetches with filter", async () => {
    const [bookGroup] = await fetchAllBooks({
      userId: "123",
      filter: (book) => book.title?.includes("The Club") ?? false
    });

    expect(bookGroup.books.length).toBe(1);
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
