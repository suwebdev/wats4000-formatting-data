const path = require('path');
module.exports = {
    runtimeCompiler: true,
    css: {
        sourceMap: true
    },
    //build for docs folder to enable gh-pages hosting
    outputDir: './docs/',
    assetsDir: 'assets'
}