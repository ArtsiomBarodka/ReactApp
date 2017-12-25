const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'build.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', ' ', '.css'],
    },
    module: {
        loaders: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader' 
        },{
            test: /\.css$/,
            loader: [ 'style-loader', 'css-loader','postcss-loader' ]
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 100000
            }  
        }
     ]
    }
};