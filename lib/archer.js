/**
 * Arhcer
 * 
 * @author firede[firede@firede.us]
 */

var stylus = require( 'stylus' );

exports = module.exports = plugin;

exports.path = __dirname;

/**
 * Archer做为Stylus插件导出
 * 
 * @return {Function}
 */
function plugin() {
    return function( style ) {
        style.include( __dirname );
    };
}
