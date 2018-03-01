const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './js'),
    entry: {
        app: './game.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, './js'),
                ],
                test: /\.js$/,
                query: {
                    presets: ['es2015']
                }
            },
        ]
    }
};
