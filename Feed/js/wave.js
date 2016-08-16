//加特效 Duang Duang Duang
var waveObj = function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
}
waveObj.prototype.num=10;
waveObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
	}
};
waveObj.prototype.draw = function() {
	ctx1.save();
	ctx1.lineWidth=2;
	ctx1.shadowBlur=10;
	ctx1.shadowColor="#fff";
	for (var i = 0; i < this.num; i++) {
		if(this.alive[i]){
			//draw
			this.r[i] += deltaTime*0.05;
			if (this.r[i]>40){
				this.alive[i]=false;continue;
			}
			var alpha = 1 - this.r[i]/40;

			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
			ctx1.closePath();
			ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
			ctx1.stroke();

		}
	}
	ctx1.restore();
};
waveObj.prototype.born = function(fx,fy) {
	for (var i = 0; i < this.num; i++) {
		if(!this.alive[i]){
			//born
			this.alive[i]=true;
			this.x[i]=fx;
			this.y[i]=fy;
			this.r[i]=10;
			return;
		}
	}
};