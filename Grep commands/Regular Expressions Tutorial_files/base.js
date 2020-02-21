 
$(document).ready(setSideNavWidth);
 
$(window).resize(setSideNavWidth);
 
 
 
function setSideNavWidth () {
	$('#sidebox').css('width', $('#sideboxcol').width() + 'px');
	$('#rhythm').css('height', $(document).height() + 'px');
}