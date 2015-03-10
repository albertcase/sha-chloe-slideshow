var looksInfo = {

	"l1" : "1.,2.,5.,4.,10,33,21",
	"l2" : "24,26,28,6.,16,23,22,20",
	"l3" : "15,17,7.,31,14,19,25,13,29",
	"l4" : "11,39,08,18,37",
	"l5" : "9.,3.,32",
	"l6" : "12,34,35,38,40,42,43",
	"l7" : "23,30,36,41,44,45"
}


function returnfun(a){
	if(looksInfo.l1.indexOf(a) > 0){
		return "以女性浪漫和清新田园风情为灵感基调，沿袭毫无刻意的法式时装精神，Chloé打造出新一季刚柔并济的活力女性形象。"
	}
	if(looksInfo.l2.indexOf(a) > 0){
		return "散发女性意味的紫罗兰、米黄、矢车菊蓝与深色海军蓝、象牙白以及棕红色无间交织，在对比间赋予该系列时装灵动质感。"
	}
	if(looksInfo.l3.indexOf(a) > 0){
		return "立体触感的面料贯穿始终，从柔软的格纹绒呢、挺阔的麦尔登呢、复古灯芯绒到浓密羊毛、精致暗色蟒蛇皮，以及浪漫的真丝绉和细腻蕾丝。"
	}
	if(looksInfo.l4.indexOf(a) > 0){
		return "微微耸起的肩部细节，立体的剪裁，外套单品勾勒出新一季的加长廓形。加宽的前襟翻领设计、军装元素则平衡了蕾丝点缀丝绸释放出的女性柔美。"
	}
	if(looksInfo.l5.indexOf(a) > 0){
		return "短小精干的马甲为飘逸的低领剪裁衬衫注入了率性和洒脱，与之搭配的花呢短裤与长裙更显时髦精致。"
	}
	if(looksInfo.l6.indexOf(a) > 0){
		return "极富层次感的绉纱长裙与长裤周身四处以垂坠的棉绳点缀。"
	}
	if(looksInfo.l7.indexOf(a) > 0){
		return "色彩鲜艳的拼接图案装点了细羊毛针织衫、丝绒面料上的精致提花则如冬季花园一般，散发令人难以抗拒的诱惑。"
	}
}





window.location.hash= '';


	$(".burger").click(function(event){
		$("#mask").fadeIn();
		$(".burger").animate({"left":"-100px"},100,function(){
			$(".menu").show();
		});
		event.stopPropagation();
	})



    

	

document.addEventListener('touchmove' , function (ev){
	ev.preventDefault();
	return false;
} , false)




function reduction_fun(){
	$(".menu,#mask").hide();
	$(".burger").animate({"left":"1em"});

	$(".magnifier-text").hide();
    $(".magnifier").stop().animate({"right":"3em","opacity":1});
}



$(document).mousedown(function(event){
	reduction_fun();
	event.stopPropagation();
})

$("#mask").click(function(event){
	reduction_fun();
	event.stopPropagation();
})








function LoadFn ( arr , fn , fn2){
		var loader = new PxLoader();
		for( var i = 0 ; i < arr.length; i ++)
		{
			loader.addImage(arr[i]);
		};
		
		loader.addProgressListener(function(e) {
				var percent = Math.round( e.completedCount / e.totalCount * 100 );
				if(fn2) fn2(percent)
		});	
		
		
		loader.addCompletionListener( function(){
			if(fn) fn();	
		});
		loader.start();	
}



var LoadingImg = [];

$('img').each( function (){
	if(!$(this).attr('src')) return;
	LoadingImg.push($(this).attr('src'));		
});


LoadingImg.push('upload/looks/look1.jpg');
LoadingImg.push('upload/looks/look2.jpg');
LoadingImg.push('upload/looks/look3.jpg');
LoadingImg.push('upload/looks/look4.jpg');
LoadingImg.push('upload/looks/look5.jpg');
LoadingImg.push('upload/looks/look6.jpg');
LoadingImg.push('upload/looks/look7.jpg');
LoadingImg.push('upload/looks/look8.jpg');
LoadingImg.push('upload/looks/look9.jpg');
LoadingImg.push('upload/looks/look10.jpg');
LoadingImg.push('upload/looks/look11.jpg');
LoadingImg.push('upload/looks/look12.jpg');
LoadingImg.push('upload/looks/look13.jpg');
LoadingImg.push('upload/looks/look14.jpg');
LoadingImg.push('upload/looks/look15.jpg');
LoadingImg.push('upload/looks/look16.jpg');
LoadingImg.push('upload/looks/look17.jpg');
LoadingImg.push('upload/looks/look18.jpg');
LoadingImg.push('upload/looks/look19.jpg');
LoadingImg.push('upload/looks/look20.jpg');
LoadingImg.push('upload/looks/look21.jpg');
LoadingImg.push('upload/looks/look22.jpg');
LoadingImg.push('upload/looks/look23.jpg');
LoadingImg.push('upload/looks/look24.jpg');
LoadingImg.push('upload/looks/look25.jpg');
LoadingImg.push('upload/looks/look26.jpg');
LoadingImg.push('upload/looks/look27.jpg');
LoadingImg.push('upload/looks/look28.jpg');
LoadingImg.push('upload/looks/look29.jpg');
LoadingImg.push('upload/looks/look30.jpg');
LoadingImg.push('upload/looks/look31.jpg');
LoadingImg.push('upload/looks/look32.jpg');
LoadingImg.push('upload/looks/look33.jpg');
LoadingImg.push('upload/looks/look34.jpg');
LoadingImg.push('upload/looks/look35.jpg');
LoadingImg.push('upload/looks/look36.jpg');
LoadingImg.push('upload/looks/look37.jpg');
LoadingImg.push('upload/looks/look38.jpg');
LoadingImg.push('upload/looks/look39.jpg');
LoadingImg.push('upload/looks/look40.jpg');
LoadingImg.push('upload/looks/look41.jpg');
LoadingImg.push('upload/looks/look42.jpg');
LoadingImg.push('upload/looks/look43.jpg');
LoadingImg.push('upload/looks/look44.jpg');
LoadingImg.push('upload/looks/look45.jpg');


LoadingImg.push('upload/acc/acc1.jpg');
LoadingImg.push('upload/acc/acc2.jpg');
LoadingImg.push('upload/acc/acc3.jpg');
LoadingImg.push('upload/acc/acc4.jpg');
LoadingImg.push('upload/acc/acc5.jpg');
LoadingImg.push('upload/acc/acc6.jpg');
LoadingImg.push('upload/acc/acc7.jpg');
LoadingImg.push('upload/acc/acc8.jpg');
LoadingImg.push('upload/acc/acc9.jpg');
LoadingImg.push('upload/acc/acc10.jpg');

LoadingImg.push('upload/backstage/backstage1.jpg');
LoadingImg.push('upload/backstage/backstage2.jpg');
LoadingImg.push('upload/backstage/backstage3.jpg');
LoadingImg.push('upload/backstage/backstage4.jpg');
LoadingImg.push('upload/backstage/backstage5.jpg');
LoadingImg.push('upload/backstage/backstage6.jpg');
LoadingImg.push('upload/backstage/backstage7.jpg');
LoadingImg.push('upload/backstage/backstage8.jpg');
LoadingImg.push('upload/backstage/backstage9.jpg');
LoadingImg.push('upload/backstage/backstage10.jpg');
LoadingImg.push('upload/backstage/backstage11.jpg');
LoadingImg.push('upload/backstage/backstage12.jpg');
LoadingImg.push('upload/backstage/backstage13.jpg');


LoadingImg.push('upload/details/detail1.jpg');
LoadingImg.push('upload/details/detail2.jpg');
LoadingImg.push('upload/details/detail3.jpg');
LoadingImg.push('upload/details/detail4.jpg');
LoadingImg.push('upload/details/detail5.jpg');


LoadingImg.push('upload/guests/guest1.jpg');
LoadingImg.push('upload/guests/guest2.jpg');
LoadingImg.push('upload/guests/guest3.jpg');
LoadingImg.push('upload/guests/guest4.jpg');
LoadingImg.push('upload/guests/guest5.jpg');
LoadingImg.push('upload/guests/guest6.jpg');
LoadingImg.push('upload/guests/guest7.jpg');
LoadingImg.push('upload/guests/guest8.jpg');
LoadingImg.push('upload/guests/guest9.jpg');
LoadingImg.push('upload/guests/guest10.jpg');
LoadingImg.push('upload/guests/guest11.jpg');
LoadingImg.push('upload/guests/guest12.jpg');
LoadingImg.push('upload/guests/guest13.jpg');
LoadingImg.push('upload/guests/guest14.jpg');
LoadingImg.push('upload/guests/guest15.jpg');
LoadingImg.push('upload/guests/guest16.jpg');
LoadingImg.push('upload/guests/guest17.jpg');
LoadingImg.push('upload/guests/guest18.jpg');
LoadingImg.push('upload/guests/guest19.jpg');
LoadingImg.push('upload/guests/guest20.jpg');
LoadingImg.push('upload/guests/guest21.jpg');
LoadingImg.push('upload/guests/guest22.jpg');
LoadingImg.push('upload/guests/guest23.jpg');
LoadingImg.push('upload/guests/guest24.jpg');
LoadingImg.push('upload/guests/guest25.jpg');
LoadingImg.push('upload/guests/guest26.jpg');
LoadingImg.push('upload/guests/guest27.jpg');
LoadingImg.push('upload/guests/guest28.jpg');
LoadingImg.push('upload/guests/guest29.jpg');
LoadingImg.push('upload/guests/guest30.jpg');
LoadingImg.push('upload/guests/guest31.jpg');
//LoadingImg.push('upload/guests/guest32.jpg');
//LoadingImg.push('upload/guests/guest33.jpg');




if(!window.location.hash){
	LoadFn(LoadingImg , function (){
		setTimeout( function (){
			$('#loading').fadeOut();
			$(".arr").fadeIn();
			accfun();
		} , 200)
	} , function ( p ){
		$('.loading-mask').css({"width":p+"%"});
		//$('.loading-mask').html('<br />' + p + '%')
	});
}else{
	// $('#loading').hide();
	// accfun();
}









var accHtml = "";
var backstageHtml = "";
var detailsHtml = "";
var guestsHtml = "";
var looksHtml = "";
var looknum = 0;
function accfun(){

	$.map(LoadingImg,function(key,n){
		if(key.indexOf("acc")>0){
			accHtml+="<div class='slide'><img src='"+key+"' style='width:109%' /></div>"
		}else if(key.indexOf("backstage")>0){
			backstageHtml+="<div class='slide'><img src='"+key+"' style='width:109%' /></div>"
		}else if(key.indexOf("details")>0){
			detailsHtml+="<div class='slide'><img src='"+key+"' style='width:109%' /></div>"
		}else if(key.indexOf("guests")>0){
			guestsHtml+="<div class='slide'><img src='"+key+"' style='width:109%' /></div>"
		}else if(key.indexOf("looks")>0){
			looknum++;
			looksHtml+="<div class='slide'><div class='magnifier-text'><p>"+returnfun(looknum)+"</p></div><span class='magnifier'><img src='../images/magnifier.png' style='width:30%' /></span><img src='"+key+"' style='width:109%' /></div>"
		}
	})
	

	$("#details").empty().html(detailsHtml);
	$("#acc").empty().html(accHtml);
	$("#backstage").empty().html(backstageHtml);
	$("#guests").empty().html(guestsHtml);
	$("#looks").empty().html(looksHtml);

	$('#fullpage').fullpage({
			sectionsColor: ['#000', '#000', '#000', '#000', '#000','#fff'],
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],    // 'lastPage'
			menu: '#menu',
			scrollingSpeed: 600,
			//easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			css3: true,
			slidesNavigation: false
	});

	$("#fullpage").animate({"opacity":1},600);


	$(".magnifier").click(function(event){
    	$(this).stop().animate({"right":"4em","opacity":0},100,function(){
    		$(this).siblings(".magnifier-text").show();
    	})
    	
    	event.stopPropagation();
    })
}






function swipeFun(){
      window.mySwipe = new Swipe(document.getElementById('slider'), {
      startSlide: 0,
      auto: false, //设置自动切换时间，单位毫秒
      continuous: false,
      disableScroll: false,
      stopPropagation: false
      })
}


swipeFun()










