/*인덱스 main JavaScript*/

$(document).ready(function(){


//.conTop .quick_bn 퀵메뉴 hover시
$('.conTop .quick_bn .newmore').hover(function(){
  $(this).stop().animate({left:-320},'fast')
},function(){
  $(this).stop().animate({left:0},'fast')});

$('.conTop .quick_bn .preview').hover(function(){
  $(this).stop().animate({left:-320},'fast')
},function(){
  $(this).stop().animate({left:0},'fast')});

$('.conTop .quick_bn #ticket').hover(function(){
  $(this).stop().animate({left:-320},'fast')
},function(){
  $(this).stop().animate({left:0},'fast')});

	  
//상영예정작 리스트
var cnt=true;
  $('.midleft .left').click(function () {
       cnt=true;
             $('.comingsoonbox li').first().appendTo('.comingsoonbox');
         });
  $('.midleft .right').click(function () {
       cnt=false;
             $('.comingsoonbox li').last().prependTo('.comingsoonbox');
         });

// 이메일 입력칸 클릭시
$('.submit #email').click(function(){
    $(this).attr('value','');
  })

//History filp 기능

var flip=8
for(var i=1;i<=flip;i++){
           $('#movie'+i).flip({trigger: 'hover'
            }).stop().clearQueue();
        }


//History animate, setInterval
var timeonoff;  //자동기능 구현시 변수 (재생/중지)

$('.Slidewrap .skipright').click(function (){                
    $('.movielists').animate({left:-1020}, 'slow');
    $(this).fadeOut('slow');
  });

$('.Slidewrap .skipleft').click(function (){
    $('.Slidewrap .skipright').fadeIn('slow');
    $('.movielists').animate({left:0}, 'slow');
  });

function move1(){                
    $('.movielists').animate({left:-1020}, 'slow');
  }
function move2(){
    $('.movielists').animate({left:0}, 'slow');
  }
timeonoff= setInterval(move1,4000)
timeonoff1= setInterval(move2,8000);

$('.movielists').hover(function(){
        clearInterval(timeonoff);
        clearInterval(timeonoff1);   //타이머를 중지!!
    },function(){
      timeonoff= setInterval(move1,4000)
      timeonoff1= setInterval(move2,8000);  //타이머의 재 동작
    });
});


