const path = require( 'path' );

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
		entry: './src/index.js',

		output: {
            filename: 'bundle.js',
			path: path.resolve( __dirname, './dist' ),
		    publicPath: 'dist/'
		},
		mode: 'development',	
		// devServer: {
		// 	static: {
		// 	  directory: path.join(__dirname, './dist'),
		// 	},		
		// 	compress: true,
		// 	port: 9000,
		//   },

		module: {
			rules: [
				{
					test: /\.js|\.jsx$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ["@babel/preset-react", "@babel/preset-env"],
						}
					},
					exclude: /node_modules/
				},				
				{
					test: /\.(png|jpg|gif)$/,
					type: 'asset/resource'
				},
                {
					test: /\.css$/,
					use: [				
						  MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'					
					]
				},
                {
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'					
					]
				},
			],
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css',
				// chunkFilename: '[id].css'
			})
		],

	};
