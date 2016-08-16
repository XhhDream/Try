var dustObj=function () {
	this.x=[];
	this.y=[];
	this.amp=[];
	this.No=[];

	this.alpha;
}
dustObj.prototype.num=30;
dustObj.prototype.init = function(first_argument) {
	for (var i = 0; i < this.num; i++) {
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]=20+Math.random()*15;
		this.No[i]=Math.floor(Math.random()*7);
	}
	this.alpha=0;
};
dustObj.prototype.draw = function(first_argument) {
	this.alpha=ane.alpha;
	var l=Math.sin(this.alpha);
	for (var i = 0; i < this.num; i++) {
		var no=this.No[i];
		ctx1.drawImage(dustPic[no],this.x[i]+l*this.amp[i],this.y[i])
	}
};
