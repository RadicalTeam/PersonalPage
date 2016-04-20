
var  side_left=document.getElementById('side_left');
var tooltip=document.getElementById('tooltip');
var timer=null;
//滑动显示和隐藏个人简介动画
function move(){
	var target=parseInt(getStyle(side_left,'left'))==0?-250:0;
		timer=setInterval(function(){
			var left=parseInt(getStyle(side_left,'left'));
			var speed=(target-left)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(left==target){
				clearInterval(timer);
			}
			else
			side_left.style.left=left+speed+"px";
		},20)
}
//获取元素属性的函数
function getStyle(obj,atrr){
	if(obj.currentStyle)
		return obj.currentStyle[atrr];
	else
		return getComputedStyle(obj,false)[atrr];
}
tooltip.onmouseover=move;
//目录显示与隐藏的元素

function display(obj){
	var parent=obj.parentNode;
	var handle=getChilds(parent,'UL')[0];
	if(getStyle(handle,'display')=='none'){
		handle.style.display='block';
	}
	else
		handle.style.display='none';
}	
//获取子元素的函数
function getChilds(obj,el){
		var childs=obj.childNodes;
		var realChilds=new Array();
		for (index in childs){
			if(childs[index].nodeType==1&&childs[index].nodeName==el)
				realChilds.push(childs[index]);
		}
		return realChilds;
	}
var buttons=document.getElementsByClassName('spread');
var program_wraps=document.getElementsByClassName('program_wrap');
var second_list=document.getElementsByClassName('second_list');

for(var count=0;count<buttons.length;count++){
	buttons[count].onclick=function(){
		display(this);
	}
}

