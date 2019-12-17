/*!
 * jQuery lightweight plugin to animate hero background images 
 * Original author: Cosmo Mathieu
 * Licensed under the MIT license
 */


// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function ( $, window, document, undefined ) {
    
    var pluginName = 'backstretch',
        defaults = {
            blur: false,
            zoom: true,
            fade: true
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
      
      var _this = this;
      var $el   = $(_this.element);
      var range = 200;
      
      $(window).on('scroll', function() {
        
        var scrollTop = $(this).scrollTop();
        // var height = $el.outerHeight();
        // var offset = height / 2;
        // var opacity = 1 - (scrollTop - offset + range) / range;
        var opacity = 1 - scrollTop / 450;
        var pixs = scrollTop / 100;
        
        if (_this.options.fade) {
          $el.css({
            'opacity': opacity
          });
          if (opacity > '1') {
            $el.css({ 'opacity': 1 });
          } else if ( opacity < '0' ) {
            $el.css({ 'opacity': 0 });
          }
        }
        
        if (_this.options.zoom) {
          $el.css({
            'background-size': (100 + 100 * scrollTop / 1000) + "%"
          });
        }
        
        if (_this.options.blur) {
          $el.css({
            "-webkit-filter": "blur(" + pixs + "px)",
            "filter": "blur(" + pixs + "px)",
          });
        }
        
      });
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, 
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );
