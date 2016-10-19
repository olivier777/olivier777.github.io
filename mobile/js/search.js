  $(document).ready(function() {
   $("#btn1").toggle(function() {
    $("#content").css("display","block");
   }, function() {
    $("#content").css("display","none");
   });
  });