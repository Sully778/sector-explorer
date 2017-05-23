function SectorExplorer(options){
	var self = this;

	self.Start = function(){
		Log("Starting...","Startup");


		var canvas = $('#my_canvas')[0];

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		var ctx = canvas.getContext('2d');




		ctx.fillStyle = "#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);


	};

}