var b = (function(){

	var uuidCounter = 0;

	var style = document.createElement('style');
	style.type = 'text/css';
	document.getElementsByTagName('head')[0].appendChild(style);

	var set = function(name, rulesobject){
		var rules = "";
		for(var i in rulesobject){
			rules+= i+":" + rulesobject[i]+";";
		}

		if(!(style.sheet||{}).insertRule)
			(style.styleSheet || style.sheet).addRule(name, rules);
		else
			style.sheet.insertRule(name+"{"+rules+"}",0);
	};

	//class
	var cl = function(rulesobject, conditionals){
		//create class
		var uuid = generate_uuid();
		set("."+uuid, rulesobject);

		//create optional conditionals
		if(conditionals){
			for(var i in conditionals){
				set("."+uuid+i, conditionals[i]);
			}
		}

		return " "+uuid+" ";
	};

	//mediaquery
	var mq = function(rulesobject){
		var uuid = generate_uuid();


		for(var i in rulesobject){
			var query = "";
			var rules = "."+uuid+ " { ";

			if(i==="mobile"){
				query = "@media only screen and (max-width: 500px)";
			}
			if(i==="monitor"){
				query = "@media only screen and (min-width: 500px)";
			}

			for(var j in rulesobject[i]){
				rules+= j+":" + rulesobject[i][j]+";";
			}
			rules += " } ";

			console.log(query);
			if(!(style.sheet||{}).insertRule)
				(style.styleSheet || style.sheet).addRule(query, rules);
			else
				style.sheet.insertRule(query+" { "+rules+" } ",0);
		}

		return uuid;
	};

	var generate_uuid = function(){
		uuidCounter++;
		var uuid = "bukowski_"+uuidCounter;
		return uuid;
	};

	return {
		set: set,
		cl: cl,
		mq: mq
	};
})();
