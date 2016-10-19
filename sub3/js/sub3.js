
$(document).ready(function(){
  $('.titleArea h2').fadeIn('slow');

  //
  $('.contlist .info').hover(function(){
    $(this).attr('src','images/hover_btn1.jpg');
  },function(){
    $(this).attr('src','images/btn1.jpg');
  });

  $('.contlist .video').hover(function(){
    $(this).attr('src','images/hover_btn2.jpg');
  },function(){
    $(this).attr('src','images/btn2.jpg');
  });

//tab menu

  var cnt=5;
  $(".contlist").hide(); 
  $('.contlist:eq(0)').show(); 
  $('.tab1').css('background','url(images/tab1on.jpg)');
  
  $('.tab').each(function (index) {
    $(this).click(function(){    
    $(".contlist").hide(); 
    $(".contlist:eq("+index+")").show();
    for(var i=1;i<=cnt;i++){
           $('.tab'+i).css('background','url(images/tab'+i+'.jpg)');
      }
      $(this).css('background','url(images/tab'+(index+1)+'on.jpg)'); 
   });
  });
});