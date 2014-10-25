// JavaScript Document
function changeDiv(Obj){
switch(Obj.id){
	case "1":
			document.getElementById("mainContent").style.display = "block";
			document.getElementById("nowContent").style.display = "none";
			document.getElementById("yesterdayContent").style.display = "none";
			document.getElementById("contactContent").style.display = "none";
			break
	case "2":
			document.getElementById("mainContent").style.display = "none";
			document.getElementById("nowContent").style.display = "block";
			document.getElementById("yesterdayContent").style.display = "none";
			document.getElementById("contactContent").style.display = "none";
			break
	case "3":
			document.getElementById("mainContent").style.display = "none";
			document.getElementById("nowContent").style.display = "none";
			document.getElementById("yesterdayContent").style.display = "block";
			document.getElementById("contactContent").style.display = "none";
			break
	case "4":
			document.getElementById("mainContent").style.display = "none";
			document.getElementById("nowContent").style.display = "none";
			document.getElementById("yesterdayContent").style.display = "none";
			document.getElementById("contactContent").style.display = "block";
			break		
		}
		}
		
function tellMe(){
	//document.getElementById("txt1").innerText = "";
	alert("我已经收到啦")
	return false
	}
	
window.onresize = window.onload = function(){
var w,h;
if(!!(window.attachEvent && !window.opera))
{
		h = document.documentElement.clientHeight;
		w = document.documentElement.clientWidth;
	}else{
		h =    window.innerHeight;
		w = window.innerWidth;
	}
document.getElementById("container").value  ="窗口大小：" + "width:" + w +"; height:"+h;
var bgImg = document.getElementById("bg").getElementsByTagName("img")[0];
bgImg.width = (w);
bgImg.height= (h) ;
}