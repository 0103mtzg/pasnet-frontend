const {merge:mergeDev} = require('webpack-merge');
const commonDev = require('./webpack.common');
const port = process.env.PORT || 3000;

module.exports=mergeDev(commonDev,{
    mode:'development',
    devServer:{
        port:3000,
        hot:true,
    },
});