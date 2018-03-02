import webpack from 'webpack'
import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const PATH = {

    app: path.join(__dirname, "app"), 
    build: path.join(__dirname, "dist")
}

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: PATH.app + '/index.html', 
    filename: 'index.html', 
    inject: 'body'
})
const base={
    devtool: 'cheap-module-inline-source-map',
    entry: [PATH.app], 
    output:{
       path: PATH.build, 
       filename: 'index_bundle.js'
    }, 
    module:{
        loaders:[
            {
                test: /\.js$/, exclude: /node_modules/, loader:'babel-loader'
            }, 
            {test: /\.css$/, loader: ['style-loader' , 'css-loader']},
           
        ]
    }, 
    plugins:[HTMLWebpackPluginConfig],
    devServer:{
        historyApiFallback: true
       }
}

export default Object.assign({}, base)