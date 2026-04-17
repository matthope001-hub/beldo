//get cookie

function getCookie(name){
var cname = name + "=";
var dc = document.cookie;
if(dc.length >0){
   begin = dc.indexOf(cname);
   if(begin != -1 ) {
      begin += cname.length;
      end = dc.indexOf(";", begin);
      if (end == -1) end = dc.length;
        return unescape(dc.substring(begin,end));
      }
   } 
return null;
}   

function setCookie(name, value, expires){
document.cookie = name + "=" + escape(value) + "; path=/" + 
 ((expires == null) ? "" : "; expires=" + expires.toGMTString());
}

function setExpireCookie(name, value, expires){
 var cookie = name + "=" + escape(value) + "; path=/";
 if( expires != null ) {
  // cookie expires after 6 days
  var exp = new Date();
  exp.setTime(exp.getTime() + (24 * 60 * 60 * 1000 * expires ));
  cookie = cookie + "; expires=" + exp.toGMTString();
 }
 document.cookie = cookie;
}

function genRandom( maxval, devider){ 

        var generatornum=Math.random();//Number between 0 and 1
        var randomnum=Math.round(generatornum*maxval);//Converts to whole num 
       var ndevider = 9; 
        
        if ( (randomnum % ndevider) == 0){
            showwindow();
        } 
}  

function showwindow(){
if (getCookie(cookieName)== null){ 
launchRemote();
}
}


function launch(newURL, newName, newFeatures, orgName) {
var remote = open(newURL, newName, newFeatures);
if (remote.opener == null)
remote.opener = window;
remote.opener.name = "opener";
return remote;
}

function launchRemote() {
myRemote =launch("/survey/popup.html",
"myRemote",
"height=175,width=250,alwaysLowered=0,alwaysRaised=0,channelmode=0,dependent=0,directories=0,fullscreen=0,hotkeys=1,location=0,menubar=0,resizable=0,scrollbars=0,status=0,titlebar=1,toolbar=0,z-lock=0",
"myWindow");
}

function popup(){
popup =  window.open("","popup","toolbar=no,width=200,height=150,status=no,menubar=no,scrollbars=no,");
popup.location.href = 'popup.html';
if(popup.opener == null) popup.opener = window;
popup.opener.name = "opener";
}

function popWin(url, width, height){
popup =  window.open(url,"popup","toolbar=no,width=" + width + ",height=" + height + ",status=no,menubar=no,scrollbars=no,");
//popup.location.href = 'popup.html';
if(popup.opener == null) popup.opener = window;
popup.opener.name = "opener";
}

function delCookie(name){
document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";
}

// cookie expires after 30 days
var exp = new Date();
exp.setTime(exp.getTime() + (24 * 60 * 60 * 1000 * 30));
var cookieName = 'StarSurvey0307';
var theMessage = 'test';

function setLongCookie(name, value) {
 var today=new Date();
 var expiry = new Date(today.getTime() + 366*24*3600*1000);
 // the following line is for testing purpose only
 // var expiry = new Date(today.getTime() + 30*60*1000);
  if(value !=null && value != "")
   document.cookie=name + "=" + escape(value) + "; expires=" + expiry.toGMTString()+"; path=/";
}

function getDomain(){
	url=document.location+"";
	if(url.indexOf("://")==-1){return "-";}
	rest=url.substring(url.indexOf("://")+3);
	domain=rest.substring(0,rest.indexOf("/"));
	return domain;
}

if(getCookie("gx_session_id_")){
        if(!getCookie("starAccess")){
                setLongCookie("starAccess", "Star-"+getCookie("gx_session_id_")+"||"+getDomain());
//                window.open("/jsp/subscribeq.htm","aaa","width=300,height=200,location=no,resizable=yes");
        }
        else{
        	oldCookie=getCookie("starAccess");
        	if(oldCookie.indexOf("||")==-1){ thisCookie=oldCookie+"||"+getDomain();}
        	else{thisCookie=oldCookie;}
                setLongCookie("starAccess", thisCookie);
        }
}

//currentpop="sept";
//currentpage="/jsp/star1popw.html";
//if(getCookie("popup")!=currentpop){
//	setLongCookie("popup",currentpop);
//	window.open(currentpage, "aaa", "width=300,height=200,location=no,resizable=yes");
//}


function gallery_open( gid, w, h ) {
	var GalleryWindow;
	var url = '/NASApp/cs/ContentServer?pagename=hamilton/Render&c=Gallery&cid='+gid;
	if (h == null) {
		h = 500;
	}
	if (w == null) {
		w = 488;
	}
	
        GalleryWindow = window.open( url, 'gallery_window', 'height=' + h + ',width=' + w + ',screenX=10,screenY=10,top=10,left=100,resizable=yes,scrollbars=yes' );
	if (GalleryWindow.opener == null) {
		GalleryWindow.opener = self;
	}
	GalleryWindow.focus();
}

function checkforblanks()
{
	for (var i = 0; i < arguments.length; i += 2)
	{
	if (!arguments[i])
		{
		alert("The search field is empty. Please enter text to search HamiltonSpectator.com.");
		return false;
		}
	}
	return true;
}

function validate(theform)
{
// changed this function to use "theform" instead of "document.myform"
	var isFull = checkforblanks(theform.searchstring.value, "Search String");
	if (!isFull)
		{return false;}
}

