class Xml2JsUtils {

	// static options = {
	// 	compact: true,
	// 	trim: true,
	// 	ignoreDeclaration: true,
	// 	ignoreInstruction: true,
	// 	ignoreAttributes: true,
	// 	ignoreComment: true,
	// 	ignoreCdata: true,
	// 	ignoreDoctype: true,
	// 	textFn: Xml2JsUtils.removeJsonTextAttribute
	// };

	static nativeType(value) {
		let nValue = Number(value);
		if (!isNaN(nValue)) {
			return nValue;
		}
		let bValue = value.toLowerCase();
		if (bValue === "true") {
			return true;
		} else if (bValue === "false") {
			return false;
		}
		return value;
	};

	static removeJsonTextAttribute(value, parentElement) {
		try {
			const keyNo = Object.keys(parentElement._parent).length,
				keyName = Object.keys(parentElement._parent)[keyNo - 1];
			parentElement._parent[keyName] = Xml2JsUtils.nativeType(value);
		} catch (e) { }
	};

	static parse(xml) {
		const parsed = new DOMParser().parseFromString(xml, "text/xml");
		return Xml2JsUtils.xmlToJson(parsed);
	}

	static camelCase(str) {
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index == 0 ? word.toLowerCase() : word.toUpperCase();
		}).replace(/\s+/g, '');
	}

	static xmlToJson(xml) {

		// Create the return object
		let obj = {};

		if (xml.nodeType == 1) { // element
			// do attributes
			if (xml.attributes.length > 0) {
				obj["@attributes"] = {};
				for (let j = 0; j < xml.attributes.length; j++) {
					const attribute = xml.attributes.item(j);
					obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
				}
			}
		} else if (xml.nodeType == 3) { // text
			obj = xml.nodeValue;
		}

		// do children
		// If just one text node inside
		if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
			obj = Xml2JsUtils.nativeType(xml.childNodes[0].nodeValue);
		}
		else if (xml.hasChildNodes()) {
			for (let i = 0; i < xml.childNodes.length; i++) {
				const item = xml.childNodes.item(i);
				const nodeName = item.nodeName;
				if (typeof (obj[nodeName]) == "undefined") {
					obj[nodeName] = Xml2JsUtils.xmlToJson(item);
				} else {
					if (typeof (obj[nodeName].push) == "undefined") {
						const old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(Xml2JsUtils.xmlToJson(item));
				}
			}
		}
		return obj;
	}
}

export default Xml2JsUtils;