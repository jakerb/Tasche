/*
 * Created by Jake Bown (@jakebown1)
 * For support, see my Github (https://github.com/jakerb)
 * Feel free to drop me a line at jake@jakebown.com
 */

$.fn.tasche = function (tasche) {
	var page;

	if(tasche.template != null && tasche.template.length > 1) { 
		$.ajax({ url: tasche.template, type: "GET", async: false, success: function(reply) {
			if(reply != null && reply.length > 1) {
				render(reply);
			}
			else {
				render($(this).html());
			}
		}});
		
		$(this).html(page);

	}

	
	function render(val) {
		find = val.match(/([^}{]+)(?=})/g);
	    if (find != null && find.length > 0) { 
			for (var i = find.length - 1; i >= 0; i--) {
				var x = find[i];
				var z = tasche[x];
				if(tasche.template != null && tasche.template.length > 1) {
					var y = val.replace("{{"+x+"}}", z);
				} else {
					var y = $(this).html().replace("{{"+x+"}}", z);
				}
				page = y;
			};
		}
		else {
			console.log("Tasche Error.");
		}
	}
};