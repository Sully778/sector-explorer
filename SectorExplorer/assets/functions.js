


var LoggingLevel = "FULL";

function Log(message,debugLevel){
	if(LoggingLevel == "Full"){
		console.log(message);
	}else if(debugLevel != null){
		for(var i = 0; i < LoggingLevel.length; i++){
			var category = LoggingLevel[i];
			if(category == debugLevel){
				console.log(message);
				break;
			}
		}
	}
}
