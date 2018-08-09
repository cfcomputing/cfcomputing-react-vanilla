const paths = require("./paths");

module.exports = {
	entry: {
		app: ["babel-polyfill", paths.indexfile]
	},
	output: {
		filename: "main.js",
		path: paths.dist
	},
	resolve: {
		alias: {
			app: paths.app
		}
	},
	module: {
		rules: [
			{
				loader: "eslint-loader",
				test: /\.(js|jsx)$/,
				enforce: "pre",
				exclude: /node_modules/,
				include: paths.src
			},

			{
				loader: "babel-loader",
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: paths.src
			}
		]
	}
};
