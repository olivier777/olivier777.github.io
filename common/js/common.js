//html파일이 저장된 위치가 기준!

$(document).ready(function(){
	// 검색어 입력칸 클릭시
	$('.search #search').click(function(){
    $(this).attr('value','');
  	});

// Navi 파트
      $('ul.dropdownmenu li ul').hide(); //모든 서브메뉴를 닫아라

      $('ul.dropdownmenu li.menu').hover( //메인메뉴에 마우스 오버/아웃시
         function() { 
            $('ul', this).slideDown('fast',function(){$(this).stop();});
          },
        function() {
       $('ul', this).fadeOut('fast');
       });


      //키보드 탭키 처리
      $('ul.dropdownmenu li.menu .depth1').bind('focus', function () { 
      //각각의 메인메뉴가 포커스를 받으면!       
          $(this).parents('.menu').find('ul').fadeIn('fast');
          //부모찾기 - parents() .menu인 부모를 찾아서 그 자식의 ul을 찾아라
          //find(a) 자식 a를 찾아라 
          $(this).parents('.menu').siblings().find('ul').fadeOut('fast');
     		//parents('.menu).sibligs().앞의 선택된 부분은 남기고 나머지 다른 .menu들을 찾아라.
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').bind('blur', function () {        
           $('ul.dropdownmenu li.m6 ul').fadeOut('fast');
     });

    //마지막 메뉴에 있는 서브메뉴 중에서 마지막 a태그 포커스를 잃으면, fadeOut해라

	//스크롤 부드럽게
	 window.gambitScrollWheelAmount = 16;
      window.gambitScrollKeyAmount = 10;
      window.gambitScrollDecompositionRate = 0.95;
      window.gambitUseRequestAnimationFrame = true;

});