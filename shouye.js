function $(id){
	return document.getElementById(id);
}

$('btn1').onmouseover = function () {
	var imgurl = "url('images1/ss2.png') no-repeat -3px -3px";
	$('btn1').style.background = imgurl;
}

$('btn1').onmouseout = function () {
	var imgurl = "url('images1/ss1.png') no-repeat -2px -2px";
	$('btn1').style.background = imgurl;
}

$('txt1').oninput = $('txt1').onpropertychange = function(){
    if($('txt1').value == "")
    {
        $("message").style.display = "block";
    }else{
        $("message").style.display = "none";
    }
}
$('txt2').oninput = $('txt2').onpropertychange = function(){
    if($('txt2').value == "")
    {
        $("message2").style.display = "block";
    }else{
        $("message2").style.display = "none";
    }
}

	var lis  = document.getElementsByName('lis');
	var menu = document.getElementById('menuu');
	var target = 0,leader = 0;
	for (var i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function(){
			 target = this.offsetLeft;
		}
		lis[i].onmouseout = function(){
			menu.style.left = target+"px";
		}
		lis[i].onclick = function(){
			menu.style.left = target+"px";
		}
	}
	setInterval(function(){
		leader = leader+(target-leader)/10;
		menu.style.left = leader+"px";
	},10);

	var lisd  = document.getElementsByName('lisd');
	var menud = document.getElementById('menud');
	var targetd = 0,leaderd = 0;
	for (var i = 0; i < lisd.length; i++) {
		lisd[i].onmouseover = function(){
			 targetd = this.offsetLeft;
		}
		lisd[i].onmouseout = function(){
			menud.style.left = targetd+"px";
		}
		lisd[i].onclick = function(){
			menud.style.left = targetd+"px";
		}
	}
	setInterval(function(){
		leaderd = leaderd+(targetd-leaderd)/10;
		menud.style.left = leaderd+"px";
	},10);

	function move(){
		var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		$('right').style.top = top+ 'px';
		if(top>633){
			$('daohangtiao').style.display="block";
			$('daohangtiao').style.position = "fixed";
			$('daohangtiao').style.top = "0px";
			$('daohangtiao').style.left ="0px";
			$('r7').style.display="block";
		}else{
			$('daohangtiao').style.display="none";
			$('r7').style.display="none";
		}	
	}
	onscroll=function(){
		move();
	}

	var myshow1;
	var dimgid=1;
	function show1(){
		for(i=1;i<=3;i++){
			if(dimgid==i){
				$('dimg'+dimgid).style.display = "block";
			}
			else{
				$('dimg'+i).style.display = "none";
			}
		}
	    dimgid++;
	    if(dimgid>3){
	    	dimgid=1;
	    }
	}
	onload = show1();
    myshow1 = setInterval('show1()',1500);

    function openj1(no1){
    	dimgid = no1;
    	$('tujs1').style.display = "block";
    }
    function closej1(){
    	$('tujs1').style.display = "none";
    }
    function openj2(no){
    	dimgid = no; 
    	$('tujs2').style.display = "block";
    }
    function closej2(){
    	$('tujs2').style.display = "none";
    } 
	function endShow1(){
		clearInterval(myshow1);
	}
	function startShow1(){
		myshow1 = setInterval("show1()",1500);
	}
	$('r5').onclick = function(){
		$('rer').style.display = "block";
	}
	$('x').onclick = function(){
		$('x').parentNode.style.display = 'none';
	}
    var now=1;
    var myshow2;
    function show2(){
		$('ddd').src="images1/tu"+now+".jpg";
	    now++;
	    $('xiangl').onclick = function(){
	    	now--;
	    	if (now<1) {
	    		now=3;
	    	}
	    	$('ddd').src="images1/tu"+now+".jpg";
	    }
	    $('xiangr').onclick = function(){
	    	now++;
	    	if (now>3) {
	    		now=1;
	    	}
	    	$('ddd').src="images1/tu"+now+".jpg";
	    }
	    if(now>3){
	    	now=1;
	    }
	}
	onload = show2();
    myshow2 = setInterval('show2()',1500);

	function endShow2(){
		clearInterval(myshow2);
	}
	function startShow2(){
		myshow2 = setInterval("show2()",1500);
	}
    function opent(){
    	$('fudongtu').style.display = "block";
    }
    function closet(){
    	$('fudongtu').style.display = "none";
    }
    $('lefttop2').onmouseover = function(){
    	$('leftmain1').style.display = "block";
    	$('line1').style.display = "block";
    	$('leftmain2').style.display = "none";
    	$('line2').style.display = "none";
    	$('leftmain3').style.display = "none";
    	$('line3').style.display = "none";
    }

    $('lefttop3').onmouseover = function(){
    	$('leftmain1').style.display = "none";
    	$('line1').style.display = "none";
    	$('leftmain2').style.display = "block";
    	$('line2').style.display = "block";
    	$('leftmain3').style.display = "none";
    	$('line3').style.display = "none";
    }

    $('lefttop4').onmouseover = function(){
    	$('leftmain1').style.display = "none";
    	$('line1').style.display = "none";
    	$('leftmain2').style.display = "none";
    	$('line2').style.display = "none";
    	$('leftmain3').style.display = "block";
    	$('line3').style.display = "block";
    }

    $('yuan1').onclick = function(){
    	$('tablea').style.display = "block";
    	$('yuana').style.display = "block";
    	$('tableb').style.display = "none";
    	$('yuanb').style.display = "none";
    	$('tablec').style.display = "none";
    	$('yuanc').style.display = "none";
    }
    $('yuan4').onclick = function(){
    	$('tablea').style.display = "block";
    	$('yuana').style.display = "block";
    	$('tableb').style.display = "none";
    	$('yuanb').style.display = "none";
    	$('tablec').style.display = "none";
    	$('yuanc').style.display = "none";
    }
    $('yuan7').onclick = function(){
    	$('tablea').style.display = "block";
    	$('yuana').style.display = "block";
    	$('tableb').style.display = "none";
    	$('yuanb').style.display = "none";
    	$('tablec').style.display = "none";
    	$('yuanc').style.display = "none";
    }
    $('yuan2').onclick = function(){
    	$('tableb').style.display = "block";
    	$('yuanb').style.display = "block";
    	$('tablea').style.display = "none";
    	$('yuana').style.display = "none";
    	$('tablec').style.display = "none";
    	$('yuanc').style.display = "none";
    }
    $('yuan5').onclick = function(){
    	$('tableb').style.display = "block";
    	$('yuanb').style.display = "block";
    	$('tablea').style.display = "none";
    	$('yuana').style.display = "none";
    	$('tablec').style.display = "none";
    	$('yuanc').style.display = "none";
    }
    $('yuan8').onclick = function(){
    	$('tableb').style.display = "block";
    	$('yuanb').style.display = "block";
    	$('tablea').style.display = "none";
    	$('yuana').style.display = "none";
    	$('tablec').style.display = "none";
    	$('yuanc').style.display = "none";
    }
    $('yuan3').onclick = function(){
    	$('tablec').style.display = "block";
    	$('yuanc').style.display = "block";
    	$('tableb').style.display = "none";
    	$('yuanb').style.display = "none";
    	$('tablea').style.display = "none";
    	$('yuana').style.display = "none";
    }
    $('yuan6').onclick = function(){
    	$('tablec').style.display = "block";
    	$('yuanc').style.display = "block";
    	$('tableb').style.display = "none";
    	$('yuanb').style.display = "none";
    	$('tablea').style.display = "none";
    	$('yuana').style.display = "none";
    }
    $('yuan9').onclick = function(){
    	$('tablec').style.display = "block";
    	$('yuanc').style.display = "block";
    	$('tableb').style.display = "none";
    	$('yuanb').style.display = "none";
    	$('tablea').style.display = "none";
    	$('yuana').style.display = "none";
    }
    $('week1').onmouseover = function(){
    	$('weektb1').style.display = "block";
    	$('week1').className = "over";
    	$('week2').className = "out";
    	$('week3').className = "out";
    	$('week4').className = "out";
    	$('week5').className = "out";
    	$('week6').className = "out";
    	$('week7').className = "out";
    	$('weektb2').style.display = "none";
    	$('weektb3').style.display = "none";
    	$('weektb4').style.display = "none";
    	$('weektb5').style.display = "none";
    	$('weektb6').style.display = "none";
    	$('weektb7').style.display = "none";
    }
   $('week2').onmouseover = function(){
    	$('weektb2').style.display = "block";
    	$('week2').className = "over";
    	$('week1').className = "out";
    	$('week3').className = "out";
    	$('week4').className = "out";
    	$('week5').className = "out";
    	$('week6').className = "out";
    	$('week7').className = "out";
    	$('weektb1').style.display = "none";
    	$('weektb3').style.display = "none";
    	$('weektb4').style.display = "none";
    	$('weektb5').style.display = "none";
    	$('weektb6').style.display = "none";
    	$('weektb7').style.display = "none";
    }
    $('week3').onmouseover = function(){
    	$('weektb3').style.display = "block";
    	$('week3').className = "over";
    	$('week2').className = "out";
    	$('week1').className = "out";
    	$('week4').className = "out";
    	$('week5').className = "out";
    	$('week6').className = "out";
    	$('week7').className = "out";
    	$('weektb2').style.display = "none";
    	$('weektb1').style.display = "none";
    	$('weektb4').style.display = "none";
    	$('weektb5').style.display = "none";
    	$('weektb6').style.display = "none";
    	$('weektb7').style.display = "none";
    }
    $('week4').onmouseover = function(){
    	$('weektb4').style.display = "block";
    	$('week4').className = "over";
    	$('week2').className = "out";
    	$('week3').className = "out";
    	$('week1').className = "out";
    	$('week5').className = "out";
    	$('week6').className = "out";
    	$('week7').className = "out";
    	$('weektb2').style.display = "none";
    	$('weektb3').style.display = "none";
    	$('weektb1').style.display = "none";
    	$('weektb5').style.display = "none";
    	$('weektb6').style.display = "none";
    	$('weektb7').style.display = "none";
    }
    $('week5').onmouseover = function(){
    	$('weektb5').style.display = "block";
    	$('week5').className = "over";
    	$('week2').className = "out";
    	$('week3').className = "out";
    	$('week4').className = "out";
    	$('week1').className = "out";
    	$('week6').className = "out";
    	$('week7').className = "out";
    	$('weektb2').style.display = "none";
    	$('weektb3').style.display = "none";
    	$('weektb4').style.display = "none";
    	$('weektb1').style.display = "none";
    	$('weektb6').style.display = "none";
    	$('weektb7').style.display = "none";
    }
    $('week6').onmouseover = function(){
    	$('weektb6').style.display = "block";
    	$('week6').className = "over";
    	$('week2').className = "out";
    	$('week3').className = "out";
    	$('week4').className = "out";
    	$('week5').className = "out";
    	$('week1').className = "out";
    	$('week7').className = "out";
    	$('weektb2').style.display = "none";
    	$('weektb3').style.display = "none";
    	$('weektb4').style.display = "none";
    	$('weektb5').style.display = "none";
    	$('weektb1').style.display = "none";
    	$('weektb7').style.display = "none";
    }
    $('week7').onmouseover = function(){
    	$('weektb7').style.display = "block";
    	$('week7').className = "over";
    	$('week2').className = "out";
    	$('week3').className = "out";
    	$('week4').className = "out";
    	$('week5').className = "out";
    	$('week6').className = "out";
    	$('week1').className = "out";
    	$('weektb2').style.display = "none";
    	$('weektb3').style.display = "none";
    	$('weektb4').style.display = "none";
    	$('weektb5').style.display = "none";
    	$('weektb6').style.display = "none";
    	$('weektb1').style.display = "none";
    }

     $('bimg1').onmouseover = function(){
    	$('bimg1').className = "over1";
    	$('bimg2').className = "out1";
    	$('bimg3').className = "out1";
    	$('bimg4').className = "out1";
    	$('bimg5').className = "out1";
    	$('bimg6').className = "out1";
    	$('bimg7').className = "out1";
    	$('btu1').style.display = "block";
    	$('btu2').style.display = "none";
    	$('btu3').style.display = "none";
    	$('btu4').style.display = "none";
    	$('btu5').style.display = "none";
    	$('btu6').style.display = "none";
    	$('btu7').style.display = "none";
    	$('wenben1').style.display = "block";
    	$('wenben2').style.display = "none";
    	$('wenben3').style.display = "none";
    	$('wenben4').style.display = "none";
    	$('wenben5').style.display = "none";
    	$('wenben6').style.display = "none";
    	$('wenben7').style.display = "none";
    }
    $('bimg2').onmouseover = function(){
    	$('bimg2').className = "over1";
    	$('bimg1').className = "out1";
    	$('bimg3').className = "out1";
    	$('bimg4').className = "out1";
    	$('bimg5').className = "out1";
    	$('bimg6').className = "out1";
    	$('bimg7').className = "out1";
    	$('btu2').style.display = "block";
    	$('btu1').style.display = "none";
    	$('btu3').style.display = "none";
    	$('btu4').style.display = "none";
    	$('btu5').style.display = "none";
    	$('btu6').style.display = "none";
    	$('btu7').style.display = "none";
    	$('wenben2').style.display = "block";
    	$('wenben1').style.display = "none";
    	$('wenben3').style.display = "none";
    	$('wenben4').style.display = "none";
    	$('wenben5').style.display = "none";
    	$('wenben6').style.display = "none";
    	$('wenben7').style.display = "none";
    }
    $('bimg3').onmouseover = function(){
    	$('bimg3').className = "over1";
    	$('bimg2').className = "out1";
    	$('bimg1').className = "out1";
    	$('bimg4').className = "out1";
    	$('bimg5').className = "out1";
    	$('bimg6').className = "out1";
    	$('bimg7').className = "out1";
    	$('btu3').style.display = "block";
    	$('btu2').style.display = "none";
    	$('btu1').style.display = "none";
    	$('btu4').style.display = "none";
    	$('btu5').style.display = "none";
    	$('btu6').style.display = "none";
    	$('btu7').style.display = "none";
    	$('wenben3').style.display = "block";
    	$('wenben2').style.display = "none";
    	$('wenben1').style.display = "none";
    	$('wenben4').style.display = "none";
    	$('wenben5').style.display = "none";
    	$('wenben6').style.display = "none";
    	$('wenben7').style.display = "none";
    }
    $('bimg4').onmouseover = function(){
    	$('bimg4').className = "over1";
    	$('bimg2').className = "out1";
    	$('bimg3').className = "out1";
    	$('bimg1').className = "out1";
    	$('bimg5').className = "out1";
    	$('bimg6').className = "out1";
    	$('bimg7').className = "out1";
    	$('btu4').style.display = "block";
    	$('btu2').style.display = "none";
    	$('btu3').style.display = "none";
    	$('btu1').style.display = "none";
    	$('btu5').style.display = "none";
    	$('btu6').style.display = "none";
    	$('btu7').style.display = "none";
    	$('wenben4').style.display = "block";
    	$('wenben2').style.display = "none";
    	$('wenben3').style.display = "none";
    	$('wenben1').style.display = "none";
    	$('wenben5').style.display = "none";
    	$('wenben6').style.display = "none";
    	$('wenben7').style.display = "none";
    }
    $('bimg5').onmouseover = function(){
    	$('bimg5').className = "over1";
    	$('bimg2').className = "out1";
    	$('bimg3').className = "out1";
    	$('bimg4').className = "out1";
    	$('bimg1').className = "out1";
    	$('bimg6').className = "out1";
    	$('bimg7').className = "out1";
    	$('btu5').style.display = "block";
    	$('btu2').style.display = "none";
    	$('btu3').style.display = "none";
    	$('btu4').style.display = "none";
    	$('btu1').style.display = "none";
    	$('btu6').style.display = "none";
    	$('btu7').style.display = "none";
    	$('wenben5').style.display = "block";
    	$('wenben2').style.display = "none";
    	$('wenben3').style.display = "none";
    	$('wenben4').style.display = "none";
    	$('wenben1').style.display = "none";
    	$('wenben6').style.display = "none";
    	$('wenben7').style.display = "none";
    }
    $('bimg6').onmouseover = function(){
    	$('bimg6').className = "over1";
    	$('bimg2').className = "out1";
    	$('bimg3').className = "out1";
    	$('bimg4').className = "out1";
    	$('bimg5').className = "out1";
    	$('bimg1').className = "out1";
    	$('bimg7').className = "out1";
    	$('btu6').style.display = "block";
    	$('btu2').style.display = "none";
    	$('btu3').style.display = "none";
    	$('btu4').style.display = "none";
    	$('btu5').style.display = "none";
    	$('btu1').style.display = "none";
    	$('btu7').style.display = "none";
    	$('wenben6').style.display = "block";
    	$('wenben2').style.display = "none";
    	$('wenben3').style.display = "none";
    	$('wenben4').style.display = "none";
    	$('wenben5').style.display = "none";
    	$('wenben1').style.display = "none";
    	$('wenben7').style.display = "none";
    }
    $('bimg7').onmouseover = function(){
    	$('bimg7').className = "over1";
    	$('bimg2').className = "out1";
    	$('bimg3').className = "out1";
    	$('bimg4').className = "out1";
    	$('bimg5').className = "out1";
    	$('bimg6').className = "out1";
    	$('bimg1').className = "out1";
    	$('btu7').style.display = "block";
    	$('btu2').style.display = "none";
    	$('btu3').style.display = "none";
    	$('btu4').style.display = "none";
    	$('btu5').style.display = "none";
    	$('btu6').style.display = "none";
    	$('btu1').style.display = "none";
    	$('wenben7').style.display = "block";
    	$('wenben2').style.display = "none";
    	$('wenben3').style.display = "none";
    	$('wenben4').style.display = "none";
    	$('wenben5').style.display = "none";
    	$('wenben6').style.display = "none";
    	$('wenben1').style.display = "none";
    }

    $('bimga1').onmouseover = function(){
    	$('bimga1').className = "over1";
    	$('bimga2').className = "out1";
    	$('bimga3').className = "out1";
    	$('bimga4').className = "out1";
    	$('bimga5').className = "out1";
    	$('bimga6').className = "out1";
    	$('bimga7').className = "out1";
    	$('btua1').style.display = "block";
    	$('btua2').style.display = "none";
    	$('btua3').style.display = "none";
    	$('btua4').style.display = "none";
    	$('btua5').style.display = "none";
    	$('btua6').style.display = "none";
    	$('btua7').style.display = "none";
    	$('wenbena1').style.display = "block";
    	$('wenbena2').style.display = "none";
    	$('wenbena3').style.display = "none";
    	$('wenbena4').style.display = "none";
    	$('wenbena5').style.display = "none";
    	$('wenbena6').style.display = "none";
    	$('wenbena7').style.display = "none";
    }
    $('bimga2').onmouseover = function(){
    	$('bimga2').className = "over1";
    	$('bimga1').className = "out1";
    	$('bimga3').className = "out1";
    	$('bimga4').className = "out1";
    	$('bimga5').className = "out1";
    	$('bimga6').className = "out1";
    	$('bimga7').className = "out1";
    	$('btua2').style.display = "block";
    	$('btua1').style.display = "none";
    	$('btua3').style.display = "none";
    	$('btua4').style.display = "none";
    	$('btua5').style.display = "none";
    	$('btua6').style.display = "none";
    	$('btua7').style.display = "none";
    	$('wenbena2').style.display = "block";
    	$('wenbena1').style.display = "none";
    	$('wenbena3').style.display = "none";
    	$('wenbena4').style.display = "none";
    	$('wenbena5').style.display = "none";
    	$('wenbena6').style.display = "none";
    	$('wenbena7').style.display = "none";
    }
    $('bimga3').onmouseover = function(){
    	$('bimga3').className = "over1";
    	$('bimga2').className = "out1";
    	$('bimga1').className = "out1";
    	$('bimga4').className = "out1";
    	$('bimga5').className = "out1";
    	$('bimga6').className = "out1";
    	$('bimga7').className = "out1";
    	$('btua3').style.display = "block";
    	$('btua2').style.display = "none";
    	$('btua1').style.display = "none";
    	$('btua4').style.display = "none";
    	$('btua5').style.display = "none";
    	$('btua6').style.display = "none";
    	$('btua7').style.display = "none";
    	$('wenbena3').style.display = "block";
    	$('wenbena2').style.display = "none";
    	$('wenbena1').style.display = "none";
    	$('wenbena4').style.display = "none";
    	$('wenbena5').style.display = "none";
    	$('wenbena6').style.display = "none";
    	$('wenbena7').style.display = "none";
    }
    $('bimga4').onmouseover = function(){
    	$('bimga4').className = "over1";
    	$('bimga2').className = "out1";
    	$('bimga3').className = "out1";
    	$('bimga1').className = "out1";
    	$('bimga5').className = "out1";
    	$('bimga6').className = "out1";
    	$('bimga7').className = "out1";
    	$('btua4').style.display = "block";
    	$('btua2').style.display = "none";
    	$('btua3').style.display = "none";
    	$('btua1').style.display = "none";
    	$('btua5').style.display = "none";
    	$('btua6').style.display = "none";
    	$('btua7').style.display = "none";
    	$('wenbena4').style.display = "block";
    	$('wenbena2').style.display = "none";
    	$('wenbena3').style.display = "none";
    	$('wenbena1').style.display = "none";
    	$('wenbena5').style.display = "none";
    	$('wenbena6').style.display = "none";
    	$('wenbena7').style.display = "none";
    }
    $('bimga5').onmouseover = function(){
    	$('bimga5').className = "over1";
    	$('bimga2').className = "out1";
    	$('bimga3').className = "out1";
    	$('bimga4').className = "out1";
    	$('bimga1').className = "out1";
    	$('bimga6').className = "out1";
    	$('bimga7').className = "out1";
    	$('btua5').style.display = "block";
    	$('btua2').style.display = "none";
    	$('btua3').style.display = "none";
    	$('btua4').style.display = "none";
    	$('btua1').style.display = "none";
    	$('btua6').style.display = "none";
    	$('btua7').style.display = "none";
    	$('wenbena5').style.display = "block";
    	$('wenbena2').style.display = "none";
    	$('wenbena3').style.display = "none";
    	$('wenbena4').style.display = "none";
    	$('wenbena1').style.display = "none";
    	$('wenbena6').style.display = "none";
    	$('wenbena7').style.display = "none";
    }
    $('bimga6').onmouseover = function(){
    	$('bimga6').className = "over1";
    	$('bimga2').className = "out1";
    	$('bimga3').className = "out1";
    	$('bimga4').className = "out1";
    	$('bimga5').className = "out1";
    	$('bimga1').className = "out1";
    	$('bimga7').className = "out1";
    	$('btua6').style.display = "block";
    	$('btua2').style.display = "none";
    	$('btua3').style.display = "none";
    	$('btua4').style.display = "none";
    	$('btua5').style.display = "none";
    	$('btua1').style.display = "none";
    	$('btua7').style.display = "none";
    	$('wenbena6').style.display = "block";
    	$('wenbena2').style.display = "none";
    	$('wenbena3').style.display = "none";
    	$('wenbena4').style.display = "none";
    	$('wenbena5').style.display = "none";
    	$('wenbena1').style.display = "none";
    	$('wenbena7').style.display = "none";
    }
    $('bimga7').onmouseover = function(){
    	$('bimga7').className = "over1";
    	$('bimga2').className = "out1";
    	$('bimga3').className = "out1";
    	$('bimga4').className = "out1";
    	$('bimga5').className = "out1";
    	$('bimga6').className = "out1";
    	$('bimga1').className = "out1";
    	$('btua7').style.display = "block";
    	$('btua2').style.display = "none";
    	$('btua3').style.display = "none";
    	$('btua4').style.display = "none";
    	$('btua5').style.display = "none";
    	$('btua6').style.display = "none";
    	$('btua1').style.display = "none";
    	$('wenbena7').style.display = "block";
    	$('wenbena2').style.display = "none";
    	$('wenbena3').style.display = "none";
    	$('wenbena4').style.display = "none";
    	$('wenbena5').style.display = "none";
    	$('wenbena6').style.display = "none";
    	$('wenbena1').style.display = "none";
    }

      $('huatu1').onmouseover = function(){
    	$('btub1').style.display = "block";
    	$('btub2').style.display = "none";
    	$('btub3').style.display = "none";
    	$('btub4').style.display = "none";
    	$('bofanga2').style.display = "block";
    	$('bofanga1').style.display = "none";
    	$('bofangb1').style.display = "block";
    	$('bofangb2').style.display = "none";
    	$('bofangc1').style.display = "block";
    	$('bofangc2').style.display = "none";
    	$('bofangd1').style.display = "block";
    	$('bofangd2').style.display = "none";
    	$('btable1').style.display = "block";
    	$('btable2').style.display = "none";
    	$('btable3').style.display = "none";
    	$('btable4').style.display = "none";
    	$('wenbenb1').style.display = "block";
    	$('wenbenb2').style.display = "none";
    	$('wenbenb3').style.display = "none";
    	$('wenbenb4').style.display = "none";
    }
      $('huatu2').onmouseover = function(){
    	$('btub2').style.display = "block";
    	$('btub1').style.display = "none";
    	$('btub3').style.display = "none";
    	$('btub4').style.display = "none";
    	$('bofanga1').style.display = "block";
    	$('bofanga2').style.display = "none";
    	$('bofangb2').style.display = "block";
    	$('bofangb1').style.display = "none";
    	$('bofangc1').style.display = "block";
    	$('bofangc2').style.display = "none";
    	$('bofangd1').style.display = "block";
    	$('bofangd2').style.display = "none";
    	$('btable2').style.display = "block";
    	$('btable1').style.display = "none";
    	$('btable3').style.display = "none";
    	$('btable4').style.display = "none";
    	$('wenbenb2').style.display = "block";
    	$('wenbenb1').style.display = "none";
    	$('wenbenb3').style.display = "none";
    	$('wenbenb4').style.display = "none";
    }

    $('huatu3').onmouseover = function(){
    	$('btub3').style.display = "block";
    	$('btub1').style.display = "none";
    	$('btub2').style.display = "none";
    	$('btub4').style.display = "none";
    	$('bofanga1').style.display = "block";
    	$('bofanga2').style.display = "none";
    	$('bofangb1').style.display = "block";
    	$('bofangb2').style.display = "none";
    	$('bofangc2').style.display = "block";
    	$('bofangc1').style.display = "none";
    	$('bofangd1').style.display = "block";
    	$('bofangd2').style.display = "none";
    	$('btable3').style.display = "block";
    	$('btable2').style.display = "none";
    	$('btable1').style.display = "none";
    	$('btable4').style.display = "none";
    	$('wenbenb3').style.display = "block";
    	$('wenbenb1').style.display = "none";
    	$('wenbenb2').style.display = "none";
    	$('wenbenb4').style.display = "none";
    }
    $('huatu4').onmouseover = function(){
    	$('btub4').style.display = "block";
    	$('btub1').style.display = "none";
    	$('btub2').style.display = "none";
    	$('btub3').style.display = "none";
    	$('bofanga1').style.display = "block";
    	$('bofanga2').style.display = "none";
    	$('bofangb1').style.display = "block";
    	$('bofangb2').style.display = "none";
    	$('bofangc1').style.display = "block";
    	$('bofangc2').style.display = "none";
    	$('bofangd2').style.display = "block";
    	$('bofangd1').style.display = "none";
    	$('btable4').style.display = "block";
    	$('btable2').style.display = "none";
    	$('btable3').style.display = "none";
    	$('btable1').style.display = "none";
    	$('wenbenb4').style.display = "block";
    	$('wenbenb1').style.display = "none";
    	$('wenbenb2').style.display = "none";
    	$('wenbenb3').style.display = "none";
    }
    $("zi1").onmouseover = function(){
    	$('zi1').className = "over2";
    	$('zi2').className = "out2";
    	$('bttb1').style.display = "block";
    	$('bttb2').style.display = "none";
    }
   $("zi2").onmouseover = function(){
    	$('zi2').className = "over2";
    	$('zi1').className = "out2";
    	$('bttb2').style.display = "block";
    	$('bttb1').style.display = "none";
    }
   
   function tuopen1(){
   	$('hunbena2').style.display = "block";
   }
    function tuclose1(){
   	$('hunbena2').style.display = "none";
   }

