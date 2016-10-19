 $(document).ready(function() {
   $("#left_menu").click(function() {
     var documentHeight =  $(document).height();
       //alert(documentHeight);
       $(".box").css('height',documentHeight);
       
    $("#nav").animate({left:0,opacity:1}, 'normal');
    $(".box").show();
   });
   
   $(".box").click(function() {
     $("#nav").animate({left:'-100%',opacity:0}, 'normal');
     $(".box").hide();
   });
   $("#close").click(function() {
     $("#nav").animate({left:'-100%',opacity:0}, 'normal');
     $(".box").hide();
   });
  });
