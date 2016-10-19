// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.579199, 126.891453);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"CJ E&M"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "CJ E&M 서울시 마포구 상암산로 66 CJ E&M Center"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }

