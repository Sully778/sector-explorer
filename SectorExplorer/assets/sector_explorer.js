function SectorExplorer(options){
	var self = this;


	self.canvas = null;
	self.ctx = null;


	


	self.Start = function(){
		Log("Starting...","Startup");


		self.canvas = $('#my_canvas')[0];

		self.canvas.width = window.innerWidth;
		self.canvas.height = window.innerHeight;

		self.ctx = self.canvas.getContext('2d');

		
		self.ClearToBlack();

		Log("Starting up Universe Generator");
		self.Generator = new UniverseGenerator();


	};


	self.ClearToBlack = function(){

		self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
		self.ctx.fillStyle = "#000000";
		self.ctx.fillRect(0,0,self.canvas.width,self.canvas.height);
	};

}


var generationRules = {
	Universe: {
		children: [
			{
				class: "Galaxy",
				name: "GalaxyList",
				options: {},
				count: {
					min: 204,
					max: 342
				}
				
			}
		]
	}
}

function UniverseGenerator(){
	var self = this;

	
	
}




function Universe(){
	var self = this;


	self.rules = generationRules[self.constructor.name];
	self.children = [];


	for(var i = 0; i < self.rules.children.length; i++){
		var child = self.rules.children[i];

		var count = rnd(child.count.min,child.count.max);

		for(var j = 0; j < count; j++){
			children.push(new window[child.class](self,child.options));
		}

	}
}