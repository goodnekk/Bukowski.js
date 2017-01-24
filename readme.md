#buckowski.js
Buckowski allows you to embed your stylesheets directly into your javascript code.
Just create a new class like in the example below. Bukowski will automagically create a unique classname and add it to your document, because to do a dull thing with style is preferable to doing a dangerous thing without it.

```javascript
var myclass = b.cl({ //an object containing the key value pairs
	"padding": "20px",
	"background-color": "#FFFFFF",
	"box-shadow": "1px 1px 5px #AAAAAA",
	"margin": "30px",
},{ //optional, an object containing any conditional stylings on this class
	":hover": {
		"background-color": "#DDDDDD",
	}
});

//add the new div to the document
var newDiv = document.createElement("div");
newDiv.innerHTML = "Style is the answer to everything";
newDiv.className = myclass;
document.getElementById("content").appendChild(newDiv);
```

## Mithril
I like to use bukowsk to stylize my (mithril)[https://github.com/lhorie/mithril] components.
