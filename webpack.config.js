const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src') + '/app/master.js',
	output: {
		path: path.resolve(__dirname, 'dist') + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},
	devServer: {
		contentBase: __dirname + '',
		port: 3000
	},
	module:{
		rules:[
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /(node_modules)/,
				options: {
					presets: ['@babel/preset-react']
				}
			},
			{
				test: /\.s?css/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
};