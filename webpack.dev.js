const {merge:mergeDev} = require('webpack-merge');
const commonDev = require('./webpack.common');
const port = process.env.PORT || 8080;

module.exports=mergeDev(commonDev,{
    mode:'development',
    devServer:{
        port:8080,
    },
});