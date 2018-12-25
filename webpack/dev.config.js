'use strict';

const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    performance: {
        hints: false
    },
    entry: [
        './example/app.js'
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/example/index.html' },
            ]
        },
        compress: true,
        port: 8081
    }
};
