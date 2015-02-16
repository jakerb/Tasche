Tasche JS Minimal Templating
===========

**Version: 1.0.1**

> **Use Tasche to create and maintain templates in JS with minimal effort.**

Installation
=====

Download the minified version of Tasche from the repo and add it below your jQuery include within your website. 

### Get Started

For this demo, I've created an index page and added a the variable `name`: 

```
<html>
	<head>
		<title></title>
	</head>
	<body>
		<p class="demo">Hi, my name is {{name}}</p>
	<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="tasche.js"></script>
	</body>
</html>
```

I now want to render the page content, to do this, I instantiate Tasche by doing: 

```
$(document).ready(function() {
		$(".demo").tasche({
			name: "Jake"
		});
});
```

When the page is loaded in the browser, we get: 

```
Hi, my name is Jake
```

### Using Templates

You can also use templates with the extension `.tasche`, a `demo.tasche` file is included above which contains:

```
<p>Hi {{name}}, this is a template.</p>
```

Now, we use the option `template` when instantiating Tasche, the value will contain the location of the `.tasche` file, like so: 

```
$(document).ready(function() {
		$(".demo").tasche({
			name: "Jake",
			template: "demo.tasche"
		});
});
```

Once the page has been loaded, we get: 

```Hi Jake, this is a template.```


### Thats it!

Feel free to fork this project.
