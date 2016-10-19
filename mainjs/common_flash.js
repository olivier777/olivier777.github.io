////////////////////////////////////////////////////////////////////////////////////
// flash 연동 관련 function
////////////////////////////////////////////////////////////////////////////////////
//
// Flash Grid Component 동작 개괄
//
// 1. flash가 로딩이 완료되면 flash ==> script dataGridLoadOk() 호출
// 2. 로딩 직후 Object 태그의 param에서 flashVars속성의 requestUrl이 존재하면 flash ==> script flash_enc() 호출
// 3. 로딩 직후 Object 태그의 param에서 flashVars속성의 requestUrl이 존재하지 않으면 멈춤
// 4. 전송 버튼을 클릭 시에 flashDataGridSend()를 호출하면 flash ==> script flash_enc() 호출
////////////////////////////////////////////////////////////////////////////////////

// Flash Grid load 완료 여부
var isFlashGridLoadOk = false;

// Flash Grid 작업중 여부
var isFlashGridWorkingOk = false;

// flashLoad(파일경로, 가로, 세로, 아이디, 배경색, 변수, 윈도우모드)
function flashLoad(url,w,h,id,bg,vars,win) {
	
	win = "transparent";
	
	// 플래시 코드 정의
	var flashStr=
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,1,102,64' width='"+w+"' height='"+h+"' id='"+id+"' align='middle'>"+
	"<param name='allowScriptAccess' value='always' />"+
	"<param name='movie' value='"+url+"' />"+
	"<param name='FlashVars' value='"+vars+"' />"+
	"<param name='wmode' value='"+win+"' />"+
	"<param name='menu' value='false' />"+
	"<param name='quality' value='high' />"+
	"<param name='bgcolor' value='"+bg+"' />"+
	"<param name='base' value='.'>"+
	"<embed src='"+url+"' FlashVars='"+vars+"' wmode='"+win+"' menu='false' base='.' quality='high' bgcolor='"+bg+"' width='"+w+"' height='"+h+"' name='"+id+"' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
	"</object>";

	// 플래시 코드 출력
	document.write(flashStr);
	
	//Flash의 ExternalInterface가 Form Tag내에서 오류나는 버그를 해결하는 코드     
	eval("window." + id + " = document.getElementById('" + id + "');");

}