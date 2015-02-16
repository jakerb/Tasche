/*
 * Created by Jake Bown (@jakebown1)
 * For support, see my Github (https://github.com/jakerb)
 * Feel free to drop me a line at jake@jakebown.com
 */

$.fn.tasche = function (tasche) {
	var page;
	if(!typeof(tasche.template) === 'undefined') { 
		$.ajax({ url: tasche.template, type: "GET", async: false, success: function(reply) {
			if(reply != null && reply.length > 1) {
				render(reply);
			}
			else {
				render($(this).html());
			}
		}});
	}
	else {
		render($(this).html());
	}

		$(this).html(page);

	
	function render(val) {
		find = val.match(/([^}{]+)(?=})/g);
		var y = val;
	    if (find != null && find.length > 0) { 
			for (var i = find.length - 1; i >= 0; i--) {
				var x = find[i];
				var z = tasche[x];
				console.log("{{"+x+"}}");
				var y = y.replace("{{"+x+"}}", z);
			};
			page = y;
		}
		else {
			console.log("Tasche Error.");
		}
	}

	
	
};