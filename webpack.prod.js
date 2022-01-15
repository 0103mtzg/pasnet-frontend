const {merge:mergeDev} = require('webpack-merge');
const commonDev = require('./webpack.common');

module.exports=mergeDev(commonDev,{
    mode:'production',
});