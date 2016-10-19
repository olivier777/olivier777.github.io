popupWin=null 

a=0;

function openWindow(url, name, w, h){ 

a++;
if(a!=1){

popupWin.close();

}



var winX , winY 

winX = (screen.availWidth - w)/2 

winY = (screen.availHeight - h)/2 

var features = 'width=' + w + ',height=' + h + ',left=' + winX + ',top=' + winY 

popupWin = window.open(url, name, features) 


} 