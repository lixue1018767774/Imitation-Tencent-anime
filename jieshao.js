function $(id){
	return document.getElementById(id);
}

$('lis1').onmouseover = function(){
	$('lis1').className = "over3";
}
$('lis1').onmouseout = function(){
	$('lis1').className = "out3";
}
$('lis2').onmouseover = function(){
	$('lis2').className = "over3";
}
$('lis2').onmouseout = function(){
	$('lis2').className = "out3";
}
$('lis3').onmouseover = function(){
	$('lis3').className = "over3";
}
$('lis3').onmouseout = function(){
	$('lis3').className = "out3";
}
$('lis4').onmouseover = function(){
	$('lis4').className = "over3";
}
$('lis4').onmouseout = function(){
	$('lis4').className = "out3";
}
$('lis5').onmouseover = function(){
	$('lis5').className = "over3";
}
$('lis5').onmouseout = function(){
	$('lis5').className = "out3";
}
$('lis6').onmouseover = function(){
	$('lis6').className = "over3";
}
$('lis6').onmouseout = function(){
	$('lis6').className = "out3";
}
$('lis7').onmouseover = function(){
	$('lis7').className = "over3";
}
$('lis7').onmouseout = function(){
	$('lis7').className = "out3";
}
$('lis8').onmouseover = function(){
	$('lis8').className = "over3";
}
$('lis8').onmouseout = function(){
	$('lis8').className = "out3";
}
$('lis9').onmouseover = function(){
	$('lis9').className = "over3";
}
$('lis9').onmouseout = function(){
	$('lis9').className = "out3";
}
$('lis10').onmouseover = function(){
	$('lis10').className = "over3";
}
$('lis10').onmouseout = function(){
	$('lis10').className = "out3";
}

$('bk12').onmouseover = function(){
	$('bk12').className = "over4";
}
$('bk12').onmouseout = function(){
	$('bk12').className = "out4";
}
$('bk11').onmouseover = function(){
	$('bk11').className = "over4";
}
$('bk11').onmouseout = function(){
	$('bk11').className = "out4";
}
$('bk10').onmouseover = function(){
	$('bk10').className = "over4";
}
$('bk10').onmouseout = function(){
	$('bk10').className = "out4";
}
$('bk9').onmouseover = function(){
	$('bk9').className = "over4";
}
$('bk9').onmouseout = function(){
	$('bk9').className = "out4";
}
$('bk8').onmouseover = function(){
	$('bk8').className = "over4";
}
$('bk8').onmouseout = function(){
	$('bk8').className = "out4";
}
$('bk7').onmouseover = function(){
	$('bk7').className = "over4";
}
$('bk7').onmouseout = function(){
	$('bk7').className = "out4";
}
$('bk6').onmouseover = function(){
	$('bk6').className = "over4";
}
$('bk6').onmouseout = function(){
	$('bk6').className = "out4";
}
$('bk5').onmouseover = function(){
	$('bk5').className = "over4";
}
$('bk5').onmouseout = function(){
	$('bk5').className = "out4";
}
$('bk4').onmouseover = function(){
	$('bk4').className = "over4";
}
$('bk4').onmouseout = function(){
	$('bk4').className = "out4";
}
$('bk3').onmouseover = function(){
	$('bk3').className = "over4";
}
$('bk3').onmouseout = function(){
	$('bk3').className = "out4";
}
$('bk2').onmouseover = function(){
	$('bk2').className = "over4";
}
$('bk2').onmouseout = function(){
	$('bk2').className = "out4";
}
$('bk1').onmouseover = function(){
	$('bk1').className = "over4";
}
$('bk1').onmouseout = function(){
	$('bk1').className = "out4";
}

$('bk1').onclick = function(){
	$('video1').style.display = 'block';
	$('video2').style.display = 'none';
	$('video1').controls = 'controls';
	$('video2').pause();
}
$('bk2').onclick = function(){
	$('video2').style.display = 'block';
	$('video1').style.display = 'none';
	$('video1').pause();
}
var now = 0;
var sb = $('sb');
var sbzs = sb.children;
var w = sb.clientWidth;
console.log("scrollWidth"+w);
for(var i=1;i<sbzs.length;i++){
    sbzs[i].style.left = w+"px";
}
$("anniu1").onclick = function(){
	console.log("now:"+now);
    clearInterval(sbzs[now].timer);
	//当前图片慢慢往右边走，移出显示区
	animate(sbzs[now],"left",w);
	//要显示的下一张图片马上定位到显示区的左边
	now--;
	if(now<0){
		now = sbzs.length-1;
	}
	sbzs[now].style.left = -w+"px";
	//要显示的图片从左边再进入显示区
	animate(sbzs[now],"left",0);
}
$("anniu2").onclick = function(){
	console.log("now:"+now);
    clearInterval(sbzs[now].timer);
	//点击了右边的下一张，当前图片从右往左移动出显示区，下一张图片显示
//当前图片慢慢往左边走，移出显示区
	animate(sbzs[now],"left",-w);
	//要显示的下一张图片马上定位到显示区的左边
	now++;
	if(now>=sbzs.length){
		now = 0;
	}
	sbzs[now].style.left = w+"px";
	//要显示的图片从左边再进入显示区
	animate(sbzs[now],"left",0);
}
//obj，要移动的对象
//attr，移动对象的属性值，如left、right
//target，移动到的目标
function animate(obj,attr,target) {
	//自定义属性objtimer指向的是它上面绑定的定时器，先停止
    clearInterval(obj.timer);
    //自定义属性，定时器开启
    obj.timer = setInterval(function() {  
      	 //开始遍历 json
        // 计算步长    用 target 位置 减去当前的位置  除以 10
        var current = parseInt(getStyle(obj,attr)); // 数值
        //当前位置
        console.log("current"+current);
        // 目标位置就是  属性值 用目标位置 - 现在的位置 / 10
        var step = ( target - current) / 10;  // 步长 
        //Math.ceil(0.8) 返回大于0.8的最小整数 向上取整
        // Math.floor(0.8) 返回小于0.8的最大整数，向下取整 
        console.log("Math.ceil"+Math.ceil(0.8)); //返回1
        console.log("Math.floor"+Math.ceil(0.8)); //返回0
        //小于1像素就不要移动了
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        console.log("step:"+step);
        obj.style[attr]= current  + step + "px" ;
        // 用于判断定时器停止的条件，当前元素的给定属性值等于目标值
        if(current==target){
            clearInterval(obj.timer);
        }
    },10);
}

// 使用document.getElementById(‘element').style.xxx只能获得行内样式
// 对于通过class属性引用的外部样式表，就拿不到想要要的信息了
// DOM标准里有个全局方法getComputedStyle可以获得
// obj是指哪个对象的,attr是哪个属性
function getStyle(obj,attr) {
    // ie 等
    if(obj.currentStyle)  {
        // 返回传递过来的某个属性，写在类样式里面的也可以获得
        return obj.currentStyle[attr];  
    }else{
        // w3c 标准浏览器
        return window.getComputedStyle(obj,null)[attr];  
    }
}





$('bl1').onmouseover = function(){
	$('bl1').style.background = "url('images2/icon.png') no-repeat 0px -153px";
}
$('bl1').onmouseout = function(){
	$('bl1').style.background = "url('images2/icon.png') no-repeat 0px 0px";
}
$('bl2').onmouseover = function(){
	$('bl2').style.background = "url('images2/icon.png') no-repeat -127px -153px";
}
$('bl2').onmouseout = function(){
	$('bl2').style.background = "url('images2/icon.png') no-repeat -127px 0px";
}
$('bl3').onmouseover = function(){
	$('bl3').style.background = "url('images2/icon.png') no-repeat -263px -153px";
}
$('bl3').onmouseout = function(){
	$('bl3').style.background = "url('images2/icon.png') no-repeat -263px 0px";
}
$('bl4').onmouseover = function(){
	$('bl4').style.background = "url('images2/icon.png') no-repeat -403px -153px";
}
$('bl4').onmouseout = function(){
	$('bl4').style.background = "url('images2/icon.png') no-repeat -403px 0px";
}
$('bl5').onmouseover = function(){
	$('bl5').style.background = "url('images2/icon.png') no-repeat -549px -153px";
}
$('bl5').onmouseout = function(){
	$('bl5').style.background = "url('images2/icon.png') no-repeat -549px 0px";
}
$('bl6').onmouseover = function(){
	$('bl6').style.background = "url('images2/icon.png') no-repeat -701px -153px";
}
$('bl6').onmouseout = function(){
	$('bl6').style.background = "url('images2/icon.png') no-repeat -701px 0px";
}
$('bl7').onmouseover = function(){
	$('bl7').style.background = "url('images2/icon.png') no-repeat -835px -153px";
}
$('bl7').onmouseout = function(){
	$('bl7').style.background = "url('images2/icon.png') no-repeat -835px 0px";
}
var index;
function cshow(no){
	index = no;
	$('div'+index).style.display = 'block';
}
function xshow(no){
	index = no;
	$('div'+index).style.display = 'none';
}

$('btn').onclick = function(){
	var txt  = $('c1').value;
	if(txt=="#从前有座灵剑山#"){
		alert("请添加内容");
		return;//终结程序或者终结本段代码
	}
	var li1 = document.createElement('li');
    li1.innerHTML = txt+"<a href='#ling' onclick='zhuanfa(this)' id='aa1' name='zf'>转发</a>"+
    	"<a href='#ling' onclick='del(this)' id='aa2' name='sc'>删除</a>";
	var childrens = $('u1').children;
	if($('u1').children.length==0){
		$('u1').appendChild(li1);
	}else{
		$('u1').insertBefore(li1,childrens[0]);
	}
	$('c1').value = "#从前有座灵剑山#";
}
	
function del(t){
	 var lid = t.parentNode; 
	 $('u1').removeChild(lid);
}
function zhuanfa(s){
	var childrens = $('u1').children;
	 var liz = s.parentNode.innerHTML; 
	 var lizf = document.createElement('li');
	 lizf.innerHTML = liz;
	$('u1').insertBefore(lizf,childrens[0]);
}