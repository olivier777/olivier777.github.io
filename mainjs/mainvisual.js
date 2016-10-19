//main 비주얼이미지

/*$(document).ready(function(){
var timeonoff;   //타이머 처리
    var imageCount=4;   //이미지개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....

    $('.btn1').css('background','url(images/bnt_on.png)'); //첫번째 불켜
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
 
    function moveg(){
      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     for(var i=1;i<=imageCount;i++){
            $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
     }
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                          
     for(var i=1;i<=imageCount;i++){
          $('.btn'+i).css('background','url(images/bnt.png)'); //버튼불다꺼!!
      }
      $('.btn'+cnt).css('background','url(images/bnt_on.png)');//자신만 불켜                 
       if(cnt==imageCount)cnt=0;
     }
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리

   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
       var $target=$(event.target); //클릭한 버튼 $target
         clearInterval(timeonoff); //타이머 중지     
   
       for(var i=1;i<=imageCount;i++){
           $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
         } 
   
      if($target.is('.btn1')){
         cnt=1;
      }else if($target.is('.btn2')){
         cnt=2; 
      }else if($target.is('.btn3')){ 
         cnt=3; 
      }else if($target.is('.btn4')){
         cnt=4; 
      } 
      $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
      
      for(var i=1;i<=imageCount;i++){
        $('.btn'+i).css('background','url(images/bnt.png)'); //버튼 모두불꺼
      }
          $('.btn'+cnt).css('background','url(images/bnt_on.png)');//자신 버튼만 불켜 
          if(cnt==imageCount)cnt=0;  //카운트 초기화
          timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
    });


  var position;
  var btn=1;
    $('.mainwrap .skipright').click(function (){
    btn++;  
     if(btn==1){  //첫번째
       position=0;  //목적지 left값
    }else if(btn==2){
         position=-1000;
    }else if(cnt==3){
       position=-2000;
    }else if(cnt==4){
       position=-3000;
    };
    $('.gallery').animate({left:position}, 'slow');
  });

  $('.mainwrap .skipleft').click(function (){
    $('.gallery').animate({left:0}, 'slow');
  });


   //겔러리에 오버/아웃시 타이머의 동작/중지 기능 구현
     $('.gallery').hover(function(){
        clearInterval(timeonoff);   //타이머를 중지!!
    },function(){
      timeonoff= setInterval( moveg , 4000);  //타이머의 재 동작
    });


});
*/

// JavaScript Document

$(document).ready(function() {
  
  var timeonoff;  //자동기능 동작/해제
  var imageCount=4;   //이미지의 개수 ***
  var cnt=1;  // 이미지 동작 번호.   1 2 3 4 5
  var direct=1;  // 방향타  +1/-1
  var position=0;  // 겔러리의 left값=>목적지  (0 -1000 -2000 ..)
  var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
  
  $('.btn1').css('background','url(images/bnt_on.png)'); //첫번째 불켜~ 

 function moveg(){
      cnt++;  // 1 2 3 4 5 4 3 2 1... 반복..
  
    if(cnt==1){   // 카운트가 1이면 목적지 0  ***
       position=0;
    }else if(cnt==2){  // 카운트가 2이면 목적지 -1000
         position=-1000;
    }else if(cnt==3){
       position=-2000;
    }else if(cnt==4){
       position=-3000;
    }else if(cnt>4){
      position=0;
      cnt=1;
    }
                                                
     for(var i=1;i<=imageCount;i++){ //모든 버튼에 불꺼..
      $('.btn'+i).css('background','url(images/bnt.png)'); 
     }
     $('.btn'+cnt).css('background','url(images/bnt_on.png)'); 
      // 현재 카운트의 버튼만 불켜~~
                           
    $('.gallery').animate({left:position}, 'slow'); //해당 목적지로 이동

 }

  timeonoff= setInterval( moveg , 4000)//4초마다 moveg()함수 호출.

  $('.mainwrap .skipright').click(function(){
    clearInterval(timeonoff);
    moveg();
  })
  $('.mainwrap .skipleft').click(function(){
    clearInterval(timeonoff);
  })


  //버튼 부분
  
  $('.mbutton').click(function(event){ //각각의 버튼을 클릭하면..

  var $target=$(event.target);   // $target=>클릭한 해당 버튼 (this)
     clearInterval(timeonoff); // 클릭시 자동기능 멈춘다.

  for(var i=1;i<=imageCount;i++){  //모든버튼 불꺼..
    $('.btn'+i).css('background','url(images/bnt.png)'); 
  }

  if($target.is('.btn1')){ // 첫번째 버튼을 클릭했냐??  ***
         $('.gallery').animate({left:0}, 'slow');
                cnt=1;  //해당 카운트를 맞춘다..
                direct=1;  //방향타 +1
  }else if($target.is('.btn2')){ // 두번째 버튼을 클릭했냐??
         $('.gallery').animate({left:-1000}, 'slow');
                cnt=2;
  }else if($target.is('.btn3')){  // 세번째 버튼을 클릭했냐??
         $('.gallery').animate({left:-2000}, 'slow');
                cnt=3;
  }else if($target.is('.btn4')){  // 네번째 버튼을 클릭했냐??
         $('.gallery').animate({left:-3000}, 'slow');
                cnt=4;
                direct=-1;
  }
     $('.btn'+cnt).css('background','url(images/bnt_on.png)'); 
         //클릭한 해당 버튼만 불켜
     timeonoff= setInterval( moveg , 4000);  // 자동기능 재 동작
   
   if(onoff==false){
     onoff=true;
     $('.ps').css('background','url(images/stop.png)');
   }
  }); 
 
 
  //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
       if(onoff==true){ //재생되고 있다면..
         clearInterval(timeonoff);   // stop버튼 클릭시
       $(this).css('background','url(images/play.png)');
           onoff=false; // 중지된 상태 
     }else{  //중지된 상태에서 클릭 했다면
      timeonoff= setInterval( moveg , 4000); //play버튼 클릭시
       $(this).css('background','url(images/stop.png)');
       onoff=true;
    }
  });
  
  
});



