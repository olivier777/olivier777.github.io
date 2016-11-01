/* //refresh page on browser resize
$(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(false); //false to get page from cache
  // true to fetch page from server 
});
*/
$(function(){
	var euniSliderH;
	var browerHeight;
	var bimgheight;
	var bimgwidth;
	var section1;
	var section2;
	var section3;
	var sectionTop;
	var navBarPos;
	var navIdx;

	$(window).on('load resize',function(){
		
		browerHeight= $(window).height();
		bimgheight= $('#eunices li img').eq(0).height(); 
		bimgwidth= $('#eunices li img').eq(0).width(); 
		euniSliderH= $('.contents .left img').height();

		$('.euniSliderWrap').css({height:euniSliderH});
		$('.contents .left,.right').css({height:euniSliderH});
		$('.euniSlider .nano').nanoScroller();
		$('.home').css({height:browerHeight});
		$('#eunices li').css({height:bimgheight}); 
		$('#eunices,#eunices .hBig').css({height:bimgheight*2});
		$('#eunices .ab-01,.ab-02').css({height:bimgheight,top:bimgheight});
		$('#eunices .ab-02').css({left:bimgwidth*2});
		
		section1=$('#about').offset();
		section2=$('#service').offset();
		section3=$('#contact').offset();
		sectionTop=new Array(0,section1.top,section2.top,section3.top);
		navBarPos=new Array ([10,45],[75,54],[140,60],[218,72]);
			
		function navBarMove(navIdx){
			$('.nav-wrap .bar').stop().animate({left:navBarPos[navIdx][0],width:navBarPos[navIdx][1]},200);
		}
		$('.nav a').on('click focus',function(){
			navIdx=$('.nav a').index($(this));
			$('html,body').stop().animate({scrollTop:sectionTop[navIdx]-59},500,function(){
				navBarMove(navIdx);		
			});
		})
	/*	$('.nav a').on('mouseover',function(){
			navIdx=$('.nav a').index($(this));
			$('.nav-wrap .bar').clone().navBarMove();
		})*/
		$(window).scroll(function(){
			wTop=$(this).scrollTop();
			if(wTop >= sectionTop[1]-59 && wTop < sectionTop[2]-59){
				setTimeout(navBarMove(1),1000);
				
			}else if(wTop >= sectionTop[2]-59 && wTop < sectionTop[3]-59){
				setTimeout(navBarMove(2),1000);
			}else if(wTop >= sectionTop[3]-59){
				setTimeout(navBarMove(3),1000);
			}else{
				setTimeout(navBarMove(0),1000);
			}
		}); //nav	
		var $icon = $('#home .btn-arrow')
		setInterval(function(){	
			$icon.animate({'margin-top':80 ,opacity:0},function(){
				$(this).animate({'margin-top':74,opacity:10})	
			})
		},800)
		$icon.on('click',function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop:sectionTop[1]-59},800)
		});//#home btn-arrow
		$('.service_s').on('click',function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop:sectionTop[2]-59},600)
		});
		euniH=$('.euni-contents').offset();
		euniHTop=(euniH.top);
		$('.euni-contents #bxPager a,#eunices a').on('click',function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop:euniHTop-59});
		});
		$('.eunices-logo,.topbg_gradation,.service_s,.btn-arrow','#home').appendTo($('#home'));
	});
	$(this).on('scroll',function(){
			if($(window).scrollTop() <= 83){
				$('.header .header-bg').fadeOut().parent().removeClass('bg-on').find('.logo').fadeOut()			
			}else{
				$('.header .header-bg').fadeIn().parent().addClass('bg-on').find('.logo').fadeIn()	
			}
	}); //nav bg	
	$(".wrap .home").vegas({
		delay:10000,
		timer:false,
		slides: [
			{ src: "images/home_bg_01.jpg" },
			{ src: "images/home_bg_02.jpg" },
			{ src: "images/home_bg_03.jpg" },
			{ src: "images/home_bg_04.jpg" }
		],
		overlay: 'src/overlays/01.png',
		animation: 'kenburns'
	});
	$('#eunices>li').hoverdir(); 
	setInterval(function(){
		$('.right .chevron.ir').animate({opacity:10},function(){
			$(this).animate({opacity:0},600,function(){
				$(this).animate({opacity:10},1000)
			})
		})
	},2000)
	setInterval(function(){
		$('#bxPager a.active i').stop().animate({top:1},function(){
				$(this).animate({top:-6},function(){
					$(this).animate({top:1});
				})	
		})
	},1000)//btn 애니메이션

	$('.euniSlider').bxSlider({
		 pagerCustom: '#bxPager'
		/* onSlideBefore:function($slideElement, oldIndex, newIndex){ 
			$('.left .twrap').animate({opacity:0})
		},
		 onSlideAfter:function($slideElement, oldIndex, newIndex){
			$slideElement.find('.left .twrap').animate({opacity:10})
		}*/
	});		
	$('.euniSlider .tt a').on('click',function(e){
		e.preventDefault();
		//var $title=$(this).parent();
		if($(this).parent().parent().hasClass('on')){ //hasClass('on') = displasy:none상태(접힌상태)
			$(this).parent().next().slideDown(300,function(){
				$(this).parent().removeClass('on');
			})
		}else{
			$(this).parent().next().slideUp(300,function(){
				$(this).parent().addClass('on');
			})
		}
	});
	$('.euni-contents .btn-prev').on('click',function(e){
		e.preventDefault();
		$('.euni-contents .bx-prev').click();	
	});
	$('.euni-contents .btn-next').on('click',function(e){
		e.preventDefault();
		$('.euni-contents .bx-next').click();	
	});//service



})
//구글지도:순수스크립트
	function kkMap(x,y){

		var text="<div class='map-t'><img src='images/logo_map_infowindow.png' alt='유니스의 정원'><p>경기도 안산시 팔곡일동 163-2</p></div>"	
		var kmap=new google.maps.Map(document.getElementById('eunicesMap'),{
			center:{lat:37.312082, lng:126.889085},
			zoom:17
		})

		var image='images/map-mark.png';
			infowindow = new google.maps.InfoWindow({
			content:text
		})
		var marker= new google.maps.Marker({
			position:{lat:x,lng:y},
			map:kmap ,
			title:'유니스의 정원',
			icon:image
		});
		marker.addListener('click', function() {
			infowindow.open( kmap, marker);
		})
	}
	kkMap(37.312082,126.889085);

