/*
 * Created by Jake Bown (@jakebown1)
 * For support, see my Github (https://github.com/jakerb)
 * Feel free to drop me a line at jake@jakebown.com
 */

var tasche = {

	render:function(tasche, callback) {
		var page;
		var that = this;
		$.ajax({
		  url: tasche.template,
		  success: function(html) {
		  	that.process(html, tasche);
		  	if(callback) {
				callback();
			}
		  },
		  dataType: "html"
		});

	},

	process:function(val, tasche) {
		find = val.match(/([^}{]+)(?=})/g);
		var y = val;

	    if (find != null && find.length > 0) { 
			for (var i = find.length - 1; i >= 0; i--) {
				var x = find[i];
				var z = tasche[x];
				var y = y.replace("{{"+x+"}}", z);
			};
			page = y;
		}
		else {
			page = y;
		}

		$(tasche.element).html($('body').find(tasche.element).html() + page);
	}
}
