//왼쪽 클릭 부분


$(document).ready(function() {
  var imageCount=4;   //이미지의 개수 ***
  var cnt=1;  // 이미지 동작 번호.   1 2 3 4 5
  var position=0;  // 겔러리의 left값=>목적지  (0 -1000 -2000 ..)
  var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
  

 function moveg1(){
      cnt--;  // 1 2 3 4 5 4 3 2 1... 반복..
  
    if(cnt==0){   // 카운트가 1이면 목적지 0  ***
       position=-3000;
    }else if(cnt==-1){  // 카운트가 2이면 목적지 -1000
         position=-2000;
    }else if(cnt==-2){  // 카운트가 2이면 목적지 -1000
         position=-1000;
    }else if(cnt==-3){
       position=0;
    }else if(cnt<-3){
       position=-3000;
      cnt=0;
    }
                                                
     for(var i=1;i<=imageCount;i++){ //모든 버튼에 불꺼..
      $('.btn'+i).css('background','url(images/bnt.png)'); 
     }
     $('.btn'+(cnt+4)).css('background','url(images/bnt_on.png)'); 
      // 현재 카운트의 버튼만 불켜~~
                           
    $('.gallery').animate({left:position}, 'slow'); //해당 목적지로 이동

 }

  $('.mainwrap .skipleft').click(function(){
    moveg1();
  })

});