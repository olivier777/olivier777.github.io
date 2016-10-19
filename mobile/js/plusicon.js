  $(document).ready(function() {
    var documentHeight =  $(document).height();
       //alert(documentHeight);
       $(".box").css('height',documentHeight);

   $("#plus").toggle(function() {
    $('.menu_option li:nth-child(1)').animate({top:-55,opacity:1},'fast');
    $('.menu_option li:nth-child(2)').animate({top:-110,opacity:1}, 'fast');
    $('.menu_option li:nth-child(3)').animate({top:-165,opacity:1}, 'fast');
    $('.box').show();
   },function(){
    $('.menu_option li').animate({top:0,opacity:0}, 'fast');
    $('.box').hide();
   });
   $('.box').click(function(){
    $('.menu_option li').animate({top:0,opacity:0}, 'fast');
    $('.box').hide();
   });
 });