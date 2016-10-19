$(document).ready(function() {
             
  
  //줄거리 더보기 기능

      $('.plot').hide();

      $('a.readmore').toggle(function(){
          $('.plot').slideDown('normal');
          $(this).text("▲줄거리 접기");
       },
       function(){
        $('.plot').slideUp();
        $(this).text("▶ 더보기");
       });
});