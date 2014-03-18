;(function ( $, window, document, undefined ) {

		// Create the defaults once
		var pluginName = "passwordStrength";
		var defaults = {
				
		};

		// The actual plugin constructor
		function PasswordStrength ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		PasswordStrength.prototype = {
				init: function () {

				},
                calculate : function () {

            }
		};


		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new PasswordStrength( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );
