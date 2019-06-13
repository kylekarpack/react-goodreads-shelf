class Xml2JsUtils {

	static options = {
		compact: true,
		trim: true,
		ignoreDeclaration: true,
		ignoreInstruction: true,
		ignoreAttributes: true,
		ignoreComment: true,
		ignoreCdata: true,
		ignoreDoctype: true,
		textFn: Xml2JsUtils.removeJsonTextAttribute
	};

	static nativeType(value) {
		var nValue = Number(value);
		if (!isNaN(nValue)) {
			return nValue;
		}
		var bValue = value.toLowerCase();
		if (bValue === 'true') {
			return true;
		} else if (bValue === 'false') {
			return false;
		}
		return value;
	};

	static removeJsonTextAttribute(value, parentElement) {
		try {
			var keyNo = Object.keys(parentElement._parent).length;
			var keyName = Object.keys(parentElement._parent)[keyNo - 1];
			parentElement._parent[keyName] = Xml2JsUtils.nativeType(value);
		} catch (e) { }
	};
}

export default Xml2JsUtils;