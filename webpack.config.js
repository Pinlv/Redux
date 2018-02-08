var path=require('path');
var webpack=require('webpack');


module.exports={
    devtool:"eval-source-map",
    entry:{
        app:"./app/main/main.js"
    },
    output:{
        path: path.resolve(__dirname,'./app/main'),
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets: [
                        "env", "react"
                    ]
                }
            },
            {
                test:/\.css$/,
                loaders:['style-loader','css-loader']    
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase:"./app/main",
        hot:true,
        inline:true,
        port:8080,
        historyApiFallback:true
    }
}