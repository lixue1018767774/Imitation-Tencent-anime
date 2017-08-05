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

 var strArr = document.getElementsByName('chcevery');
 for (i = 0; i < strArr.length; i++) {
 	strArr[i].onclick = function(){
   	    var flag = true;
  		for (var j = 0; j < strArr.length; j++) {
     		if(!strArr[j].checked){
     			flag = false;
     			break;
   			}
   		}
		$('chcall').checked = flag;
   	}
}

var chcAll = $('chcall');
function show() {
	var strArr = document.getElementsByName('chcevery');
	for (var i = 0; i < strArr.length; i++) {
		strArr[i].checked = chcAll.checked;
	}
}

function opendel(no){
	$('del'+no).style.display = 'block';
	$('td'+no).style.background = "#eef1fb";
}
function closedel(no){
	$('del'+no).style.display = 'none';
	$('td'+no).style.background = "#e8e8e8";
}

var dels = document.getElementsByName('delevery');
for (var i = 0; i < dels.length; i++) {
	dels[i].onclick = function(){
		// alert(this.parentNode.parentNode.parentNode.tagName);
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	}
}

$('delall').onclick = function(){
	if(chcAll.checked){
		var trs = document.getElementsByTagName('tr');
		var len =trs.length;
		var s = $('tab').firstElementChild;
		for (var i = 2; i < len; i++) {
			s.removeChild(s.children[2]);
		}
	}
}
