var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: {
		//the app.js is where our react code begins. we write that code
		app: "./src/app.js"
	},
	output: {
		//this is the code that runs in our project
		filename:"build/bundle.js",
		sourceMapFilename: "build/bundle.map"
	},
	devtool: "#source-map",
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel",
				query: {
					presets: ["react", "es2015"]
				}
			}
		]
	}
}