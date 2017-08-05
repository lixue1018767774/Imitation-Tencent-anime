function $(id){
	return document.getElementById(id);
}

$("txt").oninput = $("txt").onpropertychange = function(){
    if($('txt').value == "")
    {
        $("message").style.display = "block";
    }else{
        $("message").style.display = "none";
    }
}

function setClass(id,str,className){
	$(id).innerText = str;
	$(id).className = className;
}
var pwd1;
var pwd2;
function checkuname(){
	var u = $('username').value;
	if(u==""){
		setClass('usermess','*昵称不能为空！','red');
		return false;
	}
	else if(!/^\w{4,12}$/.test(u)){
		setClass('usermess','*长度为4-12位,由数字、字母和下划线组成','red');
		return false;
	}
	else{
		setClass('usermess','*√','green');
		return true;
	}
}

function checkpwd1(){
    pwd1 = $('pwd1').value;
	if(pwd1==""){
		setClass('pwdmess1','*密码不能为空！','red');
		return false;
	}
	else if(!/^\w{6,12}$/.test(pwd1)){
		setClass('pwdmess1','*长度为6-12位,由数字、字母和下划线组成','red');
		return false;
	}
	else{
		setClass('pwdmess1','*√','green');
		return true;
	}
}

 function checkpwd2(){
    pwd2 = $('pwd2').value;
	if(pwd2==""){
		setClass('pwdmess2','*密码不能为空！','red');
		return false;
	}
	else if(!/^\w{6,12}$/.test(pwd2)){
		setClass('pwdmess2','*长度为6-12位,由数字、字母和下划线组成','red');
		return false;
	}
	else if(pwd1!=pwd2){
		setClass('pwdmess2','*和上面的密码不同，请修改！','red');
		return false;
	}
	else{
		setClass('pwdmess2','*√','green');
		return true;
	}

}	
function checkbtn1(){
	if(!$('m').checked&&!$('f').checked){
		setClass('smess','*性别不能为空！','red');
		return false;
	}	
	else{
		setClass('smess','*√','green');
		return true;
	}
}

function checkphone(){
	var pp = $('phone').value;
	if(pp==""){
		setClass('pmess','*号码不能为空！','red');
		return false;
	}
	else if(!/^1\d{10}$/.test(pp)){
		setClass('pmess','*号码输入不合法','red');
		return false;
	}else{
		setClass('pmess','*√','green');
		return true;
	}
}

function tj(){
	if(checkuname()&&checkpwd2()&&checkpwd1()&&checkbtn1()&&checkphone()){
		return true;
	}
	else{
		return false;
	}
}


    var myshow;
	
var s = 1;
function show(){
   
   for(i=1;i<=5;i++){

   if (s==i) {
   	$("d"+s).style.display="block";
   }else{
    $("d"+i).style.display="none";
   }
 } 
 s++;  
 if(s>5){
		location.href = "用户登录.html";	
	}
}
onload = show();
myshow = setInterval("show()",1000);