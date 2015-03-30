//this is for display
IMGNUM = 3;
//decription for all the pic in the home page,each page has two items, h1 and p, please attention.
DESC = ["旧金山高端富人区公寓-Toorak Park, Armadale","首付3.9万澳币起，坐落在布里斯班中央商业区，坐拥俯瞰城市全景，布里斯班河景，故事桥和Coot-tha山景。","https://www.baidu.com/","旧金山高端富人区公寓","首付3.9万澳币起，坐落在布里斯班中央商业区，坐拥俯瞰城市全景，布里斯班河景，故事桥和Coot-tha山景。","https://www.baidu.com/","旧金山高端富人区","首付3.9万澳币起，坐落在布里斯班中央商业区，坐拥俯瞰城市全景，布里斯班河景，故事桥和Coot-tha山景。","http://www.sohu.com/"];
WIDTH = document.documentElement.clientWidth;
HEIGHT = document.documentElement.clientHeight;
if (WIDTH * HEIGHT == 0)
{
    WIDTH = document.body.clientWidth;
    HEIGHT = document.body.clientWidth;
}

function drawimage(imgIndex){
	var mycanvas = document.getElementById("myCanvas"+imgIndex);
	mycanvas.width = WIDTH;
    mycanvas.height = HEIGHT*0.85;
}


function changeIMG(){
  //  gurantee numRec ++ using bibao
  if(showBit===1){ 
      numRec++;
    var preNum = numRec-1;
    if (preNum <= 0) {preNum = IMGNUM};
    var preImg = document.getElementById("myCanvas"+preNum);
    preImg.className = 'a-fadeoutL';
    if (numRec>IMGNUM) {numRec=1;};
    var nextImg = document.getElementById("myCanvas"+numRec);
    nextImg.className = 'a-fadein';
    $('.descriptionCont').children('h2').text(DESC[numRec*3 - 3]);
    $('.descriptionCont').children('span').text(DESC[numRec*3-2]);
    $('.descriptionCont').children('.infoHref')[0].href = DESC[numRec*3 - 1];
  }
}

// for the left and right
function changeLR(){
    showBit = 0;
    if (numRec===0) {numRec=1;};
    var preNum = numRec;
    var preImg = document.getElementById("myCanvas"+preNum);
    preImg.className = 'a-fadeoutL';
    if(isNaN(arguments[-1])){
          this.length = 0;
     }
    numRec = numRec + arguments[0];
    if (numRec>IMGNUM) {
        numRec=1;
    }else if(numRec<=0){
        numRec=IMGNUM;
    };
    var nextImg = document.getElementById("myCanvas"+numRec);
    nextImg.className = 'a-fadein';
}

//for other tabs to hide the img
// function hideImg(){
//     showBit = 0;
//     for (var i = IMGNUM; i >= 1; i--) {
//         document.getElementById("myCanvas"+i).className = 'a-fadeout';
//     };
//         //this guarantee the display of
//     $(".home").className="tab-pane";
//     $()
// }

//for the home 
function reloadImg(){
    showBit = 1;
    if(numRec===0){numRec=1;}
    document.getElementById("myCanvas"+numRec).className = 'a-fadein';
}

//for login
function stopImg(){
    showBit = 0;
}

//for the recount of information page
var firstTime = 0;
function setClock(){
    $(".playPic").children('span').text('还有'+setTime+'秒就给您播放美国购房小指南');
    if(firstTime === 0){
        console.log(firstTime);
         timer = setInterval(CountDown,1000);  
        firstTime = 1;
    }
}
var setTime = 10;//10s
function CountDown(){
    console.log(setTime);
    if(setTime>0){
        setTime--;
    }else{
        clearInterval(timer);
        $('.playPic')[0].style.display="none";
        openInfo();
    }
    $(".playPic").children('span').text('还有'+setTime+'秒就给您播放美国购房小指南');
}

function openInfo(){
    window.open("http://www.w3school.com.cn","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400")
}


