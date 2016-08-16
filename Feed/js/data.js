var dataObj=function(){
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}
dataObj.prototype.draw = function() {
	ctx1.save();
	ctx1.shadowBlur = 5;
	ctx1.shadowColor="#fff";

	ctx1.fillText("SCORE: "+this.score,canWidth*0.5,canHeight-80); 
	if(data.gameOver){
		if(this.alpha<1)
			this.alpha += deltaTime*0.001;
		if(this.alpha>1)
			this.alpha = 1;
		ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("GAME OVER",canWidth*0.5,canHeight*0.5)
	}
	ctx1.restore();
};
dataObj.prototype.addScore = function() {
	this.score +=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
	mom.momBodyCount=0;
};