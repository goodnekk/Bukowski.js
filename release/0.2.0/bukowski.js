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


	var cl = function(rulesobject, conditionals){
		//create class
		uuidCounter++;
		var uuid = "stylizeclass"+uuidCounter;
		set("."+uuid, rulesobject);

		//create optional conditionals
		if(conditionals){
			for(var i in conditionals){
				set("."+uuid+i, conditionals[i]);
			}
		}

		return " "+uuid+" ";
	};

	return {
		set: set,
		cl: cl
	};
})();
