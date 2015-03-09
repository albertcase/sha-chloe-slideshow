
	$(".burger").click(function(event){
		$(".burger").animate({"left":"-100px"},function(){
			$(".menu").show();
			$(".menu li").each(function(){
				$(this).animate({"opacity" : 1});
			})
		});
		event.stopPropagation();
	})



    $(".magnifier").click(function(event){
    	$(this).stop().animate({"right":"4em","opacity":0},600,function(){
    		$(this).siblings(".magnifier-text").slideDown();
    	})
    	
    	event.stopPropagation();
    })

	

document.addEventListener('touchmove' , function (ev){
	ev.preventDefault();
	return false;
} , false)




function reduction_fun(){
	$(".menu li").each(function(){
		$(this).animate({opacity : 0},600,function(){
			$(".menu").hide();
			$(".burger").animate({"left":"1em"});
		}).css("transform",'translate3d(95deg,0,-50px)');
	})

	$(".magnifier-text").slideUp();
    $(".magnifier").stop().animate({"right":"5em","opacity":1});
}



$(document).click(function(event){
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






LoadFn(LoadingImg , function (){
	setTimeout( function (){
		$('#loading').fadeOut();
		accfun();
	} , 200)
} , function ( p ){
	$('#loading').html('<br />' + p + '%')
});











var accHtml = "";
var backstageHtml = "";
var detailsHtml = "";
var guestsHtml = "";
var looksHtml = "";

function accfun(){

	$.map(LoadingImg,function(key){
		if(key.indexOf("acc")>0){
			accHtml+="<div class='slide'><img src='"+key+"' style='height:100%' /></div>"
		}else if(key.indexOf("backstage")>0){
			backstageHtml+="<div class='slide'><img src='"+key+"' style='height:100%' /></div>"
		}else if(key.indexOf("details")>0){
			detailsHtml+="<div class='slide'><img src='"+key+"' style='height:100%' /></div>"
		}else if(key.indexOf("guests")>0){
			guestsHtml+="<div class='slide'><img src='"+key+"' style='height:100%' /></div>"
		}else if(key.indexOf("looks")>0){
			looksHtml+="<div class='slide'><img src='"+key+"' style='height:100%' /></div>"
		}
	})
	

	$("#details").empty().html(detailsHtml);
	$("#acc").empty().html(accHtml);
	$("#backstage").empty().html(backstageHtml);
	$("#guests").empty().html(guestsHtml);
	$("#looks").empty().html(looksHtml);

	console.log(detailsHtml)


	$('#fullpage').fullpage({
			sectionsColor: ['#000', '#000', '#000', '#000', '#000','#000','#000','#000'],
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage'],    // 'lastPage'
			menu: '#menu',
			scrollingSpeed: 600,
			easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			css3: true
	});

	$("#fullpage").animate({"opacity":1},600);
}


























