var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;

var ane;
var fruit;

var mom;
var baby;

var data;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];


var mx;
var my;

var wave;
var halo;

var dust;
var dustPic=[];

var bgPic=new Image();

document.body.onload=game;
function game() {
	init();
	lastTime= Date.now();
	deltaTime=0;
	gameloop();
}

function init() {
	//获得canvas context
	can1=document.getElementById('canvas1');//fishes,dust,UI,circle
	ctx1=can1.getContext('2d');
	can2=document.getElementById('canvas2');//background,ane,fruits
	ctx2=can2.getContext('2d');

	can1.addEventListener("mousemove",onMouseMove,false);

	bgPic.src="./src/background.jpg";

	canWidth=can1.width;
	canHeight=can1.height;

	ane=new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	data = new dataObj();

	mx = canWidth*0.5;
	my = canHeight*0.5;

	for (var i = 0; i < 8; i++) {
		//Tail
		babyTail[i]=new Image();
		babyTail[i].src="./src/babyTail"+i+".png";
		momTail[i]=new Image();
		momTail[i].src="./src/bigTail"+i+".png";

		//big fish img init
		momBodyOra[i]=new Image();
		momBodyOra[i].src="./src/bigSwim"+i+".png";
		momBodyBlue[i]=new Image();
		momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";

	}
	for (var i = 0; i < 2; i++) {
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+i+".png";
		momEye[i]=new Image();
		momEye[i].src="./src/bigEye"+i+".png";
	}
	for (var i = 0; i < 20; i++) {
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
	}
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	ctx1.fillStyle="#fff";

	wave=new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();

	for (var i = 0; i < 7; i++) {
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust"+i+".png";
	}

	dust=new dustObj();
	dust.init();
}

function gameloop(){
	window.requestAnimFrame(gameloop);//setInterval,setTimeout
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40)deltaTime=40;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitsCollision();
	baby.draw();
	momBabyCollision();

	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e){
	if(data.gameOver)return;
	if(e.offsetX||e.layarX){
		mx=e.offsetX?e.offsetX:e.layarX;
		my=e.offsetY?e.offsetY:e.layarY;
	}
	if (!my) {
		my=0;
	}
}