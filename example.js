var myclass = b.cl({
	"padding": "20px",
	"background-color": "#FFFFFF",
	"box-shadow": "1px 1px 5px #AAAAAA",
	"margin": "30px",
},{
	":hover": {
		"background-color": "#DDDDDD",
	}
});

var newDiv = document.createElement("div");
newDiv.innerHTML = "Style is the answer to everything";
newDiv.className = myclass;
document.getElementById("content").appendChild(newDiv);
