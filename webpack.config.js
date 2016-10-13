//GREAT TUTORIAL! https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.bq510etu7

//webpack is a module bundler for React and Redux apps. has features to split your code and load parts of the app asynchronously

//everything is a module, so you require what you need, when you need it
var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: { //tell Webpack where the starting point is. (can be a string, object, or array)
		//the app.js is where our react code begins. we write that code
		app: "./src/app.js"
	},
	output: { //tells Webpack where and how to store the resulting files
		//this is the code that runs in our project
		filename:"build/bundle.js",
		sourceMapFilename: "build/bundle.map"
	},
	watch: true, //webpack will rebuild the bundle when files change
	//choose a developer tool to enhance debugging
	devtool: "#source-map", //a sourceMap is emitted
	module: {
		//loaders are additional node modules that 'load' or 'import' files of various types into browser acceptable formats like JS, CSS, etc.
		loaders: [
			{
				test: /\.jsx?$/, //test for ".js" file. if it passes, use the loader 
				exclude: /(node_modules|bower_components)/, //exclude node_modules folder and bower.
				//bower (like node) manages (fetches and installs) packages - anything you depend on an external author for (ex. Bootstrap, jQuery, Angular)
				loader: "babel", //use babel (short for babel-loader)
				query: { //pass options to the loader but writing them as a query string or property (here we're using the query property, not a string)
					presets: ["react", "es2015"] //lets us use the react and es2015 presets that were installed earlier
				}
			}
		]
	}
}