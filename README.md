Tasche JS Minimal Templating
===========

**Version: 1.0.1**

> **Use Tasche to create and maintain templates in JS with minimal effort.**

Installation
=====

Download the minified version of Tasche from the repo and add it below your jQuery include within your website. 

### Get Started

For this demo, I've created an index page and added the variable `name`: 

```
<html>
	<head>
		<title></title>
	</head>
	<body>
		<div class="wrapper"></div>
	<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="tasche.js"></script>
	</body>
</html>
```

### Using Templates

You can also use templates with the extension `.tasche`, a `demo.tasche` file is included in this repo which contains:

```
<p>Hi {{name}}, this is a template.</p>
```

Now, we use the option `template` when instantiating Tasche, the value will contain the location of the `.tasche` file, like so: 

```
$(document).ready(function() {
		tasche.render({
			name: "Jake",
			element: ".wrapper",
			template: "http://www.site.com/views/demo.tasche"
		});
});
```

Once the page has been loaded, the template is rendered and inserted into the index page: 

```Hi Jake, this is a template.```

### Callbacks

You can add callbacks when using Tasche, simply by adding it to the render function. In the demo above we can alert a "hello" dialogue box by simply doing: 

```
$(document).ready(function() {
		tasche.render({
			name: "Jake",
			element: ".wrapper",
			template: "http://www.site.com/views/demo.tasche"
		}, function(){ 
			alert("hello");
		});
});
```


### Thats it!

Feel free to fork this project.
