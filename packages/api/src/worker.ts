/* eslint-disable node/no-unpublished-import */
import { Text, Element } from "@cloudflare/workers-types";
import type { Book, Status } from "../../react-goodreads-shelf/src/types";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const forwardedRequest = new Request(request);
    forwardedRequest.headers.set("accept", "application/javascript");

    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    const url = new URL(request.url);

    // make subrequests with the global `fetch()` function
    const urlToFetch = `https://www.goodreads.com/review/list/${url.pathname.replace("users/", "")}${url.search}`;
    const res = await fetch(urlToFetch, forwardedRequest);

    let output: {
      data: Book[];
      status: Partial<Status>;
    };

    // Simulate success if we get a 204 No Content response
    if (res.status === 204) {
      const page = Number(url.searchParams.get("page"));
      const pageSize = 30;
      output = {
        data: [],
        status: {
          pageSize,
          start: page * pageSize - pageSize,
          end: page * pageSize,
          total: 0
        }
      };
    } else {
      const body = await res.text();
      const { html, status } = parseJsonP(body);

      const table = `<table>${html}</table>`;

      const rawData = await stream(table);
      const imageWidth = url.searchParams.get("imageWidth");
      const data = rawData.map((el) => bookCleaner(el, Number(imageWidth ?? 100)));
      status.start = status.end! - data.length;
      status.pageSize = data.length;

      output = {
        data,
        status
      };
    }

    const response = new Response(JSON.stringify(output));
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Content-Type", "application/json");

    return response;
  }
};

const stream = async (table: string): Promise<any[]> => {
  const data: any[] = [];

  let curIndex = 0;

  const getText = (key: keyof Book) => {
    return {
      text(element: Text) {
        data[curIndex][key] = data[curIndex][key] ?? "";
        data[curIndex][key] += element.text.trim();
      }
    };
  };

  const getAttribute = (key: keyof Book, attribute?: string) => {
    attribute = attribute ?? key;
    return {
      element(element: Element) {
        data[curIndex][key] = element.getAttribute(attribute!);
      }
    };
  };

  return new Promise((resolve) => {
    new HTMLRewriter()
      .on("table", {
        element(element) {
          element.onEndTag(() => {
            resolve(data);
          });
        }
      })
      .on("tr.review", {
        element(element) {
          data[curIndex] = {
            rating: 0
          };
          element.onEndTag(() => {
            curIndex++;
          });
        }
      })
      .on("td.field.isbn .value", getText("isbn"))
      .on("td.field.asin .value", getText("asin"))
      .on("td.field.title a", getAttribute("title"))
      .on("td.field.author .value", getText("author"))
      .on("td.field.cover img", getAttribute("imageUrl", "src"))
      .on("td.field.date_read .date_read_value", getText("dateRead"))
      .on("td.field.date_added span", getText("dateAdded"))
      .on("td.field.cover a", getAttribute("link", "href"))
      .on("td.field.rating .staticStars .p10", {
        element() {
          data[curIndex].rating++;
        }
      })

      .transform(new Response(table));
  });
};

const parseJsonP = (jsonp: string): { html: string; status: Partial<Status> } => {
  const [html, status] = jsonp.split("\n");

  const json = html.replace('Element.insert("booksBody", ', "").replace(" });", "}").replace("bottom", '"bottom"');
  const output = JSON.parse(json).bottom;

  const matches = status.match(/(?<end>\d*) of (?<total>\d*) loaded/);
  return {
    html: output,
    status: {
      end: parseInt(matches?.groups?.end ?? "0"),
      total: parseInt(matches?.groups?.total ?? "0")
    }
  };
};

const bookCleaner = (rawBook: any, thumbnailWidth = 100): any => {
  rawBook.author = rawBook.author?.replace("*", "").split(", ").reverse().join(" ");
  rawBook.imageUrl = rawBook.imageUrl?.replace(/\._(S[Y|X]\d+_?){1,2}_/i, `._SX${thumbnailWidth * 2}_`);

  rawBook.dateRead = rawBook.dateRead ? new Date(rawBook.dateRead) : undefined;
  rawBook.dateAdded = rawBook.dateAdded ? new Date(rawBook.dateAdded) : undefined;

  rawBook.link = `https://www.goodreads.com/${rawBook.link}`;

  const splitTitle = rawBook.title.split(":");
  if (splitTitle.length > 1) {
    rawBook.title = splitTitle[0];
    rawBook.subtitle = splitTitle[1]?.trim();
  }

  const parens = rawBook.title.match(/\(.*\)/);
  if (parens) {
    const [match] = parens;
    rawBook.subtitle = match.replace("(", "").replace(")", "")?.trim();
    rawBook.title = rawBook.title.replace(match, "")?.trim();
  }

  return rawBook as Book;
};
