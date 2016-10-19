
$(document).ready(function(){
  $('#list1').click(function(){
    $('.background li img').attr('src','images/content1/list1.jpg');
  }); 
  $('#list2').click(function(){
    $('.background li img').attr('src','images/content1/list2.jpg');
  });
  $('#list3').click(function(){
    $('.background li img').attr('src','images/content1/list3.jpg');
  });
  $('#list4').click(function(){
    $('.background li img').attr('src','images/content1/list4.jpg');
  });
  $('#list5').click(function(){
    $('.background li img').attr('src','images/content1/list5.jpg');
  });
  $('#list6').click(function(){
    $('.background li img').attr('src','images/content1/list6.jpg');
  });

  var cnt=true;
  $('.skipleft').click(function () {
       cnt=true;
             $('.photolist li').first().appendTo('.photolist ul');
             $('.background li').first().appendTo('.background ul');

         });
  $('.skipright').click(function () {
       cnt=false;
             $('.photolist li').last().prependTo('.photolist ul');
             $('.background li').last().prependTo('.background ul');
         });
  $('.photolist li a').hover(
            function() { 
               $(this).css('border','5px solid #fc0'); 
             },
            function() {
               $(this).css('border','0');
             });
  $('.comment #textbox').click(function(){
    $(this).html('');
  })
});