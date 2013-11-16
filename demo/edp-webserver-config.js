/**
 * EDP配置DEMO
 * 
 * @author firede[firede@firede.us]
 */

exports.port = 8848;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;

// 引入archer，在实际项目中请直接在npm配置'archer'依赖，然后引入：
// var archer = require( 'archer' );
var archer = require( '../lib/archer' );

exports.getLocations = function () {
    return [
        { 
            location: /\/$/, 
            handler: home( 'index.html' )
        },
        { 
            location: /^\/redirect-local/, 
            handler: redirect('redirect-target', false) 
        },
        { 
            location: /^\/redirect-remote/, 
            handler: redirect('http://www.baidu.com', false) 
        },
        { 
            location: /^\/redirect-target/, 
            handler: content('redirectd!') 
        },
        { 
            location: '/empty', 
            handler: empty() 
        },
        // 在autocss中使用archer插件
        {
            location: /\.css($|\?)/, 
            handler: [
                autocss({
                    'stylus': archer()
                })
            ]
        },
        // 在stylus中使用archer插件
        { 
            location: /\.styl($|\?)/, 
            handler: [
                file(),
                stylus(archer())
            ]
        },
        {
            location: '*.html',
            handler: [
                file(),
                livereload()
            ]
        },
        { 
            location: /^.*$/, 
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

exports.injectResource = function ( res ) {
    for ( var key in res ) {
        global[ key ] = res[ key ];
    }
};
