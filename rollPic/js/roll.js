var flag=0,
	slider=document.getElementById('slider'),
	pic=slider.getElementsByTagName('a'),
	items=document.getElementsByClassName('item'),
	prev=document.getElementsByClassName('prev')[0],
	next=document.getElementsByClassName('next')[0],
	len=items.length,
	h=pic[0].offsetHeight,
	delTime=0;


window.onload=init;

function init() {
	for (var i = 0; i < len; i++) {
		items[i].index=i;
		items[i].addEventListener('mouseover',function(){
			clearInterval(delTime);
			flag=this.index;
			rec(this.index);
			reImg();
		});
	}
	prev.addEventListener('click',function(){
		if(flag<=0){
			flag=len-1;
		}else{
			flag--;
		}
		rec(flag);
		reImg();
	}),
	next.addEventListener('click',function(){
		if (flag>=len-1) {
			flag=0;
		}else{
			flag++;
		}
		rec(flag);
		reImg();
	});
	star();
}

function star(){
	clearInterval(delTime);
	delTime=setInterval(function(){
		if (flag>=len-1) {
			flag=0;
		}else{
			flag++;
		}
		rec(flag);
		reImg();
	},4000);
}

function rec(index){
	for (var i = 0; i < len; i++) {
		items[i].className="item";
	}
	items[index].className+=" active";
}
function reImg(){
	slider.style.top=-flag*h+"px";
}
