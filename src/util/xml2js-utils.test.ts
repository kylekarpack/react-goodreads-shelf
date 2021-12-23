import fs from "fs";
import path from "path";
import { Xml } from "./xml2js-utils";

const filePath = path.join(__dirname, "../../__test__/data/response.test.xml");
const sampleXml = fs.readFileSync(filePath).toString();

describe("XML deserializer", () => {
  it("deserializes empty XML", () => {
    expect(Xml.parseXmlStringToObject("")).toBeDefined();
  });

  it("deserializes sample XML", () => {
    const parsed = Xml.parseXmlStringToObject(sampleXml);
    expect(parsed).toBeDefined();
    expect(parsed.GoodreadsResponse).toBeDefined();
  });
});
