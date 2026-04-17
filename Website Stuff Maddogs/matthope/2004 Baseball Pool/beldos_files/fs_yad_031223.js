function banner_click_DoFSCommand(command, args) {
if(command=="banner_click"){if(yad_target=="_top"){top.location=yad_URL[1]+args;}else{window.open(yad_URL[1]+args);}}
else if(command=="banner_click2"){if(yad_target=="_top"){top.location=yad_URL[2]+args;}else{window.open(yad_URL[2]+args);}}
else if(command=="banner_click3"){if(yad_target=="_top"){top.location=yad_URL[3]+args;}else{window.open(yad_URL[3]+args);}}
else if(command=="banner_click4"){if(yad_target=="_top"){top.location=yad_URL[4]+args;}else{window.open(yad_URL[4]+args);}}
else if(command=="banner_click5"){if(yad_target=="_top"){top.location=yad_URL[5]+args;}else{window.open(yad_URL[5]+args);}}
}
var yad_MM_FlashCanPlay;
function yad_031223(){
if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.appVersion.indexOf("Win") != -1)) {
	document.write('<SCR'+'IPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('yad_MM_FlashCanPlay=(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash."&yad_MM_contentVersion)))\n');
	document.write('</SCR'+'IPT\> \n');
}
if (yad_MM_FlashCanPlay) {
	document.write('<scr'+'ipt language=vbscript\>\non error resume next\nSub banner_click_FSCommand(ByVal command, ByVal args)\ncall banner_click_DoFSCommand(command, args)\nend sub</scr'+'ipt\>');
	document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id=banner_click width='+yad_width+' height='+yad_height+'>');
	document.write('<param name=movie value="'+yad_flashfile+'"><param name=quality value=high><param name=wmode value=opaque><PARAM NAME=loop VALUE=false>');
	document.write('<a href="'+yad_altURL+'" target="'+yad_target+'"><img src="'+yad_altimg+'" width='+yad_width+' height='+yad_height+' border=0></a>');
	document.write('</OBJECT>');
} else{
	document.write('<a href="'+yad_altURL+'" target="'+yad_target+'"><img src="'+yad_altimg+'" width='+yad_width+' height='+yad_height+' border=0></a>');
}
}yad_031223();