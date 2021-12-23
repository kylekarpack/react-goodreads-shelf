export class Xml {
  static parseXmlStringToObject = (stringContent: string): any => {
    const parsed = Xml.parse(stringContent);
    return Xml.xmlToJson(parsed);
  };

  static parse = (stringContent: string) => {
    const parser = new DOMParser();
    return parser.parseFromString(stringContent, "text/xml");
  };

  static xmlToJson = (xml: Document | ChildNode): any => {
    // Create the return object
    let obj = {};

    if (xml.nodeType === 3) {
      // text
      obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (typeof obj[nodeName] === "undefined") {
          obj[nodeName] = Xml.xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push === "undefined") {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(Xml.xmlToJson(item));
        }
      }
    }

    // Move up all text attrs
    for (const key in obj) {
      if (typeof obj[key]["#text"] === "string") {
        obj[key] = obj[key]["#text"];
      } else if (typeof obj[key].text === "string") {
        obj[key] = obj[key].text;
      } else {
        delete obj[key].text;
        delete obj[key]["#text"];
      }
    }

    // Move up all sub-arrays
    for (const key in obj) {
      const value = obj[key];
      const keys = Object.keys(value);
      if (typeof value === "object" && keys.length === 1 && Array.isArray(value[keys[0]])) {
        obj[key] = value[keys[0]];
      }
    }

    return obj;
  };
}
