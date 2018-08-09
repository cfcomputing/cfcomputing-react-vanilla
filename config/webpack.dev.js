const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");
const webpackSharedConfig = require("./webpack.shared");

module.exports = {
	entry: webpackSharedConfig.entry,
	output: webpackSharedConfig.output,
	resolve: webpackSharedConfig.resolve,
	module: webpackSharedConfig.module,
	/* The devtool line enables source maps for us */
	devtool: "cheap-module-inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.htmlfile
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.NamedModulesPlugin()
	],
	devServer: {
		// make sure to set this so that our router paths will work
		historyApiFallback: true,

		// take all requests to the /api endpoint and send over to our json schema server
		proxy: {
			"/api": {
				target: {
					host: "0.0.0.0",
					protocol: "http:",
					port: "80"
				},
				pathRewrite: { "^/api": "" },
				ignorePath: false,
				changeOrigin: true,
				secure: false
			}
		},
		contentBase: paths.publicsrc,
		disableHostCheck: true
	}
};
