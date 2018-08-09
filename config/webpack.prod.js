const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");
const webpackSharedConfig = require("./webpack.shared");

module.exports = {
	entry: webpackSharedConfig.entry,
	output: {
		...webpackSharedConfig.output,
		filename: "[name][chunkhash]-bundle.js",
		chunkFilename: "[name][chunkhash].bundle.js",
		publicPath: "/"
	},
	resolve: webpackSharedConfig.resolve,
	module: webpackSharedConfig.module,
	optimization: {
		minimize: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.htmlfile,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	]
};
