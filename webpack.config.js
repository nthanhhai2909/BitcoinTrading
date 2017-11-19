var webpack = require('webpack');
var path = require('path');
module.exports = {

    entry:{
        app: './src/App.js'
    },
    output:{
        filename: 'public/build/bundle.js',
        sourceMapFilename:'public/build/bundle.map'
    },
    devtool: '#source-map',
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets:['react', 'es2015']
                }
            },
             { test: /\.css$/, loader: "style-loader!css-loader" },
        ],
    }
}