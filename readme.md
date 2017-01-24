#bukowski.js
Bukowski allows you to embed your stylesheets directly into your javascript code.
Just create a new class like in the example below. Bukowski will automagically create a unique classname and add it to your document, because to do a dull thing with style is preferable to doing a dangerous thing without it.

```
var myclass = b.cl({
	"padding": "20px",
	"background-color": "#FFFFFF",
	"box-shadow": "1px 1px 5px #AAAAAA",
	"width": "100%",
	"margin-bottom": "30px",
	"padding-bottom": "60px",
});


var newDiv = document.createElement("div");
newDiv.className = myclass;
document.getElementById("content").appendChild(newDiv);
```
