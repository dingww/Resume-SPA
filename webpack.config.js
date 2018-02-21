const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build', // ‘publicPath’被许多webpack的插件用于在生产模式和开发模式下更新内嵌到css、html、img文件里的url
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        },{
            test: /\.less$/i,
            loader: 'style-loader!css-loader!less-loader'
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: { // webpack-dev-server 配置
        historyApiFallback: true,
        noInfo: true,
        inline: true // 实时刷新
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if(process.env.NODE_ENV === 'production'){ // 对生产环境的一些配置
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({   // 通过配置了DefinePlugin，那么这里面的标识就相当于全局变量，你的业务代码可以直接使用配置的标识
            'process.env': {
                NODE_ENV: 'production'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ // 压缩代码
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}