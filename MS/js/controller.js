/*
2015.3.22 by hhjiang email:hhjiang13@gmail
this js is for all the controller
*/

// we don't support IE with lower than 9, so here is the check  
$(function () { 
	var brow=navigator.userAgent.indexOf('MSIE');
    if(brow>0){
    	var browVer = Number(navigator.userAgent.substring(brow+5, brow+8));
    	if(browVer <= 8){
    		document.body.innerHTML="";
    		var infoDiv = document.createElement('div');
    		infoDiv.innerHTML="为了您的更好体验，请更换浏览器或者升级IE浏览器";
    		infoDiv.style.margin="20% 0 0 35%";
    		document.body.appendChild(infoDiv);
    	}
    }


    function removeEventHandler(target, type, func) {
        if (target.removeEventListener){
            //监听IE9，谷歌和火狐
            target.removeEventListener(type, func, false);
        } else if (target.detachEvent){
            target.detachEvent("on" + type, func);
        }else {
            delete target["on" + type];
        }
    }
    //addEventHandler(bindEventBtn,"click",eventTwo );
    //removeEventHandler(bindEventBtn,"click",eventOne);

    //for the nav
    $("[data-toggle='popover']").popover();
	$('#myTab a:last').tab('show')

    //navbar-header + -
    $('.navbar-header button').click(function(){
        if($(this).children('.glyphicon').hasClass('glyphicon-plus')){
            $(this).children('.glyphicon').removeClass("glyphicon-plus");
            $(this).children('.glyphicon').addClass('glyphicon-minus');
        }else{
            $(this).children('.glyphicon').removeClass("glyphicon-minus");
            $(this).children('.glyphicon').addClass('glyphicon-plus');
        }
    });

    //this is for img record 
     numRec = 1;
     //showBit if 1 the clock is work, 0 is not
     showBit = 1;
     //initial the pic
    for (var i = IMGNUM; i >= 1; i--) {
        drawimage(i);
    };
    drawimage(4);
    changeIMG();
    imgClock = self.setInterval(function () {
        changeIMG();
    }, 4000);

    //change the screen
    window.onresize = function ()
    {
        WIDTH = document.documentElement.clientWidth;
        HEIGHT = document.documentElement.clientHeight;
        if (WIDTH * HEIGHT == 0)
        {
            WIDTH = document.body.clientWidth;
            HEIGHT = document.body.clientWidth;
        }
        for (var i = IMGNUM; i >= 1; i--) {
            drawimage(i);
        };
        drawimage(4);
    }; 


    //bind the event for left and right 
    $(".iconImgL").click(function(){changeLR(-1)});
    $(".iconImgR").click(function(){changeLR(1)});
    $('#tabSet button').on('click', stopImg);
    $('.navbar-header').on('click', reloadImg);


    //for the recommend page
    // for the pictures showing
    $(".specialH").hover(
          function () {
            $(this).css('display','none').fadeOut(1000);
            $(this).siblings('.specialC').css('display','block').fadeIn(1000);
          },
          function () {
          }
        );

    $(".specialC").hover(
          function () {
            
          },
          function () {
            $(this).css('display','none').fadeOut(1000);
            $(this).siblings('.specialH').css('display','block').fadeIn(1000);
          }
        );
    //for load more pictures
    $(".recomLoad a").on('click', loadMore);


    //clock for the information page
    $('.infoNav').on('click', setClock); 

});
