const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		libraryTarget: "commonjs",
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			},
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules|bower_components|dist|.*\.spec\.js)/,
				use: ["swc-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	externals: {
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React",
		},
	},
};
