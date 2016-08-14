/*画布*/
var can;
var ctr;

/*画布宽高*/
var w;
var h;

/*图片*/
var girlPic=new Image();
var starPic=new Image();

var num=60;
var stars=[];

var lastTime;
var deltaTime;

var flag=false;
var life=0;

document.body.onload=init;

function init(){
	can=document.getElementById('canvas');
	ctx=can.getContext('2d');

	w=can.width;
	h=can.height;

	document.addEventListener('mousemove',mousemove,false);

	girlPic.src='src/girl.jpg';
	starPic.src='src/star.png';

	for (var i = 0; i < num; i++) {
		stars[i]=new starObj();
		stars[i].init();
	}

	lastTime=Date.now();

	gameloop();
}

function gameloop(){
	window.requestAnimFrame(gameloop);

	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;

	drawBackground();
	drawGirl();
	drawStars();
}

function drawBackground(){
	ctx.fillStyle='#393550';
	ctx.fillRect(0,0,w,h)
}

function drawGirl(){
	ctx.drawImage(girlPic,100,150,600,300);
}

function mousemove(e){
	e=window.e||e;
	if (e.offsetX||e.layerX) {
		var px = e.offsetX?e.offsetX:e.layerX;
		var py = e.offsetY?e.offsetY:e.layerY;

		if(px>100&&px<700&&py>150&&py<450){
			flag=true;
		}else{
			flag=false;
		}
		console.log(flag);
	}
	
}