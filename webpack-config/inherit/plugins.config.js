const path = require('path');
const webpack = require('webpack');
const dirVars = require('../base/dirVars.config.js');
const entryArr = require('../base/entryArr.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pluginsConfig = [
	new ExtractTextPlugin('[name]/styles.[contenthash:8].css'),
	new webpack.ProvidePlugin({
		React: 'react',
		ReactDOM: 'react-dom'
	})
];

entryArr.forEach(entry => {
	const htmlPlugin = new HtmlWebpackPlugin({
		filename: `${entry}/index.html`,
		template: path.resolve(dirVars.htmlDir, `${entry}/index.html`),
		chunks: ['vendor', 'runtime', entry]
	});
	pluginsConfig.push(htmlPlugin);
});

module.exports = pluginsConfig;
