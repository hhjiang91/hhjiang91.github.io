// hhjiang 2015.3.26 data for MS 
//Recomend page, load more, assume 8 onetime
function loadMore(){
	var moreNum = 8;
	//here need a ajax to get the resource , need src number, head line, content,link
	var contentRec = "房价：约人民币121万起<br>土地面积：5380 sq.ft <br>室内面积：3700 sq.ft <br>构建时间：2005<br>";
	var head1 = "The Encore Club at Reunion";
	var head2 = '美国，奥兰多';
	var linkA = 'http://www.baidu.com';
	for (var i = 1; i <= moreNum; i++) {
		if (i%2 === 1) {
			var str = '<div class="col-lg-5 col-md-5 col-xs-8 col-lg-offset-1 col-xs-offset-2 specialTol" style="background: url(src/img/'+1+'.jpg)">';
		}else{
			var str = '<div class="col-lg-5 col-md-5 col-xs-8  specialTol col-lg-offset-0 col-xs-offset-2" style="background: url(src/img/'+1+'.jpg)">';
		};
			str += '<div class="specialH"><h1>'+head1+'</h1><h1>'+head2+'</h1></div><div class="specialC" style="display:none">';
			str += '<h1>'+head1+'</h1><h1>'+head2+'</h1><p>'+contentRec+'<a href="'+linkA+'">查看更多</a></p></div></div>';

			$(".recommAdd").append(str);
	};
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
}
