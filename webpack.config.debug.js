const shared = require("./webpack.config");

module.exports = {
	...shared,
	mode: "none",
	optimization: {
		minimize: false
	},
	devtool: "source-map"
}