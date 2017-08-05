function $(id){
	return document.getElementById(id);
}

$('txt').oninput = $('txt').onpropertychange = function(){
    if($('txt').value == "")
    {
        $("message").style.display = "block";
    }else{
        $("message").style.display = "none";
    }
}

function changebor(i){
	$('circle'+i).className = "over";
}
function nchangebor(i){
	$('circle'+i).className = "out";
}

function changeb(n){
	$('question'+n).style.background = "#2ea9e0";
	$('question'+n).style.color = "white";
}
function nchangeb(n){
	$('question'+n).style.background = "#f7f7f7";
	$('question'+n).style.color = "#2ea9e0";
}
