const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		library: "",
		libraryTarget: "commonjs",
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true // true outputs JSX tags
						}
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules|bower_components|dist|.*\.spec\.js)/,
				use: {
					loader: "swc-loader",
					options: {
						"jsc": {
							"parser": {
								"syntax": "ecmascript",
								"jsx": true,
								"numericSeparator": false,
								"classPrivateProperty": false,
								"privateMethod": false,
								"classProperty": false,
								"functionBind": false,
								"decorators": false,
								"decoratorsBeforeExport": false
							},
							"transform": {
								"react": {
									"pragma": "React.createElement",
									"pragmaFrag": "React.Fragment",
									"throwIfNamespace": true,
									"development": false,
									"useBuiltins": false
								},
								"optimizer": {
									"globals": {
										"vars": {
											"__DEBUG__": "true"
										}
									}
								}
							}
						},
						minify: true
					}
				},
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
