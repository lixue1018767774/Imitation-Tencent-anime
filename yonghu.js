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

$("a1").onclick = function(){
	$('show1').style.display = "none";
	$("show2").style.display ="block";
}
$("a2").onclick = function(){
	$('show2').style.display = "none";
	$("show1").style.display ="block";
}

$("x1").onclick  = function(){
	$('mask').style.display = 'none';
	$('x1').parentNode.style.display="none";
}
$("x2").onclick  = function(){
	$('mask').style.display = 'none';
	$('x2').parentNode.style.display="none";
}
var marginTop = 314;
function move(){
	var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	$('show1').style.top = top + marginTop + 'px';
	$('show2').style.top = top + marginTop + 'px';
}

onscroll=function(){
	move();
}

$("uname").oninput = $("uname").onpropertychange = function(){
    if($('uname').value == "")
    {
        $("message1").style.display = "block";
    }else{
        $("message1").style.display = "none";
    }
}

$("pwd").oninput = $("pwd").onpropertychange = function(){
    if($('pwd').value == "")
    {
        $("message2").style.display = "block";
    }else{
        $("message2").style.display = "none";
    }
}