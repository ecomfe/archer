/**
 * Arhcer
 * 
 * @author firede[firede@firede.us]
 */

var stylus = require( 'stylus' );
var autoprefixer = require('autoprefixer');

exports = module.exports = plugin;

exports.path = __dirname;

/**
 * Archer做为Stylus插件导出
 * 
 * @return {Function}
 */
function plugin( options ) {
    options = options || {};
    var support = options.support || [ "android >= 2.3", "ios >= 5" ];

    return function( style ) {
        style.include( __dirname );

        style.on( 'end', function( css, callback ) {
            callback(
                null,
                autoprefixer.apply( this, support ).compile( css )
            );
        });
    };
}
