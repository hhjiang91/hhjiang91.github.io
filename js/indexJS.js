/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
colors = ["rgba(222,219,246,0.5)", "rgba(240,245,175,0.5)", "rgba(247,193,82,0.5)", "rgba(237,165,242,0.25)", "rgba(219,152,245,0.75)", "rgba(147,198,240,0.5)", "rgba(233,221,215,0.30)", "rgba(187,175,215,0.5)", "rgba(229,238,247,0.5)", "rgba(229,238,234,0.5)"];
var ball = [];

WIDTH = document.documentElement.clientWidth;
HEIGHT = document.documentElement.clientHeight;
flagMusic = 0;
if (WIDTH * HEIGHT == 0)
{
    WIDTH = document.body.clientWidth;
    HEIGHT = document.body.clientWidth;
}


function drawImg() {
    //drew the image
    var canvas0 = document.getElementById("canvas0");
    canvas0.width = WIDTH;
    canvas0.height = HEIGHT;
    var context0 = canvas0.getContext("2d");
    var img = new Image();
    img.src = "src/images/flower.jpg";
    imgX = WIDTH * 387 / 1399;
    imgY = HEIGHT * 130 / 743;
    imgW = WIDTH * 625 / 1399;
    imgH = HEIGHT * 480 / 743;
    if (img.complete) {
        context0.drawImage(img, imgX, imgY, imgW, imgH);
    } else {
        img.onload = function () {
            context0.drawImage(img, imgX, imgY, imgW, imgH);
        };
        img.onerror = function () {
            window.alert('美女加载失败，请重试');
        };
    }
    ;
}

function drawTalk(){
    var canvasSheep = document.getElementById("sheepTalk");
    canvasSheep.width = WIDTH*0.2;
    canvasSheep.height = HEIGHT * 0.4;
    var hb = canvasSheep.getContext("2d");
    var C = new Array(WIDTH*0.2*0.5, HEIGHT * 0.4*0.85);
    var B = new Array(WIDTH*0.2*0.45, HEIGHT * 0.4*0.76);
    var A = new Array(WIDTH*0.2*0.4, HEIGHT * 0.4*0.60);
    hb.beginPath();
    hb.strokestyle = '#D2C2E2';
    DrawEllipse(hb, A, WIDTH*0.2*0.2, HEIGHT * 0.4*0.08);
    hb.stroke();
    DrawEllipse(hb, B, WIDTH*0.2*0.1, HEIGHT * 0.4*0.03);
    hb.stroke();
    DrawEllipse(hb, C, WIDTH*0.2*0.05, HEIGHT * 0.4*0.01);
    hb.stroke();
    hb.font = '16px Arial bold';
    hb.fillStyle = '#664CC6';
    hb.fillText("求点赞,摸摸头", WIDTH*0.2*0.22, HEIGHT * 0.4*0.63);
    hb.endPath();
}

function DrawEllipse(Canvas, O, OA, OB)
{
//画椭圆，例子：var B=new Array(150,150); DrawEllipse(hb,B,50,30);
    with (Canvas)
    {
        var x = O[0] + OA;
        var y = O[1];
        moveTo(x, y);
        for (var i = 0; i <= 360; i++)
        {
            var ii = i * Math.PI / 180;
            var x = O[0] + OA * Math.cos(ii);
            var y = O[1] - OB * Math.sin(ii);
            lineTo(x, y);
        }
    }
}

function update() {
    for (var i = 0; i < 70; i++)
    {
        WIDTH * HEIGHT 
        if (ball[i].x < WIDTH * 0.1 + ball[i].r && ball[i].y < ball[i].r + HEIGHT*0.25)
        {
            ball[i].vx = -ball[i].vx;
            ball[i].vy = -ball[i].vy;
        }else if(ball[i].x > WIDTH * 0.83 - ball[i].r && ball[i].y >HEIGHT*0.76 - ball[i].r  ) 
        {
            ball[i].vx = -ball[i].vx;
            ball[i].vy = -ball[i].vy;
        }
        
        if(ball[i].x <= ball[i].r || ball[i].x >= WIDTH - ball[i].r)
        {
            ball[i].vx = -ball[i].vx;
        }
        ball[i].x += ball[i].vx;
        ball[i].vx += ball[i].xg;
        if (ball[i].y <= ball[i].r || ball[i].y >= HEIGHT - ball[i].r)
        {
            ball[i].vy = -ball[i].vy;
        }
        ball[i].y += ball[i].vy;
        ball[i].vy += ball[i].yg;

    }
}

function render(cxt) {
    cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);
    for (var i = 0; i < 70; i++)
    {
        cxt.fillStyle = ball[i].color;
        cxt.beginPath();
        cxt.arc(ball[i].x, ball[i].y, ball[i].r, 0, 2 * Math.PI);
        cxt.closePath();
        cxt.fill();
    }
}


//change the screen
//
/*
var flag = 0;
window.onresize = function ()
{
    if (flag == 0)
    {
        WIDTH = document.documentElement.clientWidth;
        HEIGHT = document.documentElement.clientHeight;
        if (WIDTH * HEIGHT == 0)
        {
            WIDTH = document.body.clientWidth;
            HEIGHT = document.body.clientWidth;
        }
        update();
        drawImg();
        var canvas = document.getElementById("canvas");
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        flag = 1;
    } else {
        flag = 0;
    }
    // ... 
};
*/


function changeSheep()
{
    if(sheepFlag == 0 )
    {
        document.getElementById("sheep").src = "src/images/sheep2.jpg";
        sheepFlag = 1;
    }else{
        document.getElementById("sheep").src = "src/images/sheep1.jpg";
        sheepFlag = 0;
    }
    
}


function mouseOut()
{
    $("#showInfo").hide(10);
}

var firstFlag = 0;
var changeFlag;
function listening() {
    if (firstFlag == 0) {
        $("#musicS").show();
        setTimeout("$('#musicM').show()", 1000);
        setTimeout("$('#musicB').show()", 2000);
    }
    var t3 = setTimeout("firstFlag = 1;", 3000);
    changeFlag = setInterval(function () {
        changeMusic();
    }, 500)
}
function stopPlay() {
    changeFlag = window.clearInterval(changeFlag);
}


function changeMusic() {
    changeSet = ["0% 0%", "0% 100%", "100% 0%", "100% 100%"];
    document.getElementById("musicB").style.backgroundPosition = document.getElementById("musicM").style.backgroundPosition;
    document.getElementById("musicM").style.backgroundPosition = document.getElementById("musicS").style.backgroundPosition;
    document.getElementById("musicS").style.backgroundPosition = changeSet[Math.floor(Math.random() * 3.5)];
    document.getElementById("musicB").style.top = 65 + Math.floor(Math.random() * 5);
    document.getElementById("musicM").style.top = 50 + Math.floor(Math.random() * 3);
    document.getElementById("musicS").style.top = 70 + Math.floor(Math.random() * 2);
}

window.onload = function () {
    //music paly 
    var audio = document.getElementById("musicAud");
    if (audio != null && audio.canPlayType && audio.canPlayType("audio/mp3"))
    {
        audio.src = "src/audio/bgmusic.mp3";
        //audio.play();
        audio.loop = "loop";
    }
    $("#audioDiv").click(function () {
        if (flagMusic == 0) {
            audio.play();
            flagMusic = 1;
            $("#showInfo").html("stop music");
            listening();
        } else {
            flagMusic = 0;
            audio.pause();
            $("#showInfo").html("listen music");
            stopPlay();
        }
    });
    $("#audioDiv").hover(function () {
        $("#showInfo").show();
    });
    
    $("#sheep").click(function(){
        window.location.href = "myblog.html";
    });

    drawImg();
    var canvas = document.getElementById("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    for (var i = 0; i < 70; i++)
    {
        var aBall = {
            xg: 0 * Math.random(),
            yg: 0 * Math.random(),
            vx: Math.floor(Math.random() * 5) + 1,
            vy: Math.floor(Math.random() * 5) + 1,
            color: colors[ Math.floor(Math.random() * colors.length)],
            r: Math.floor(Math.random() * 50 + 5),
            x: Math.floor(Math.random() * WIDTH*0.5) + 170,
            y: Math.floor(Math.random() * HEIGHT*0.5) + 250
        }
        if (aBall.x <= aBall.r) {
            aBall.x = aBall.r + 1 + 170;
        } else if (aBall.x >= WIDTH - aBall.r) {
            aBall.x = WIDTH - aBall.r - 1;
        }
        if (aBall.y <= aBall.r) {
            aBall.y = aBall.r + 1 + 250;
        } else if (aBall.y >= HEIGHT - aBall.r) {
            aBall.y = HEIGHT - aBall.r - 1;
        }
        ball.push(aBall)
    }
    var context = canvas.getContext("2d");
    sheepFlag = 0;
    setInterval(function () {
        render(context);
        update();
    }, 50);
    setInterval(function () {
        changeSheep();
    }, 1000);
     drawTalk();
}

