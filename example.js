var myclass = b.cl({
	"padding": "20px",
	"background-color": "#FFFFFF",
	"box-shadow": "1px 1px 5px #AAAAAA",
},{
	":hover": {
		"background-color": "#DDDDDD",
	}
});

var responsive = b.mq({
	"mobile": {
		"margin": "10px",
	},

	"monitor": {
		"margin": "30px",
	}
});

var newDiv = document.createElement("div");
newDiv.innerHTML = "Style is the answer to everything";
newDiv.className = myclass+responsive; //simply add the classnames
document.getElementById("content").appendChild(newDiv);
