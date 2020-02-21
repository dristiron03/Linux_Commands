var tt = TweenMax.to, tf = TweenMax.from, tft = TweenMax.fromTo,td = TweenMax.delayedCall, ts = TweenMax.set, tweenDelay = .5;



init = function(){
	build_timeline_main();
	addListeners();
	
	TweenMax.staggerTo(".star", 0, {x:100},0)
	
	
}
function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

function build_timeline_main() {	
	
	function bg2In() {
		var bg2TL = new TimelineMax();
			bg2TL.fromTo(scrub_bar, 10, {scaleX:.2}, {scaleX:.7, transformOrigin:"202px 100%", ease:Power0.easeNone},"start")		
		return bg2TL;		
		//bg2TL.timeScale( 0.8);
	}	
	
	function bg3In() {
		var bg3TL = new TimelineMax({repeat:0});
			bg3TL.timeScale(1)
				.fromTo("#main_img", 10, {scale:1,rotation:.01, transformOrigin:"50% 20%",},{scale:1.3, rotation:1.01, transformOrigin:"50% 20%", ease:Power0.easeNone},"start+=0")
				// hair
				.to("#img_head", 1, {rotation:3, transformOrigin:"367px 39px", yoyo:true, repeat:1, repeatDelay:.25, ease:"Power3.easeOut"}, "start+=.5")
				.from("#img_blink", .01, {autoAlpha:0, yoyo:true, repeat:1, repeatDelay:.1}, "start+=.4")
				.to("#img_blink", .01, {autoAlpha:1, yoyo:true, repeat:1, repeatDelay:.1}, "start+=1.75")
				
		return bg3TL;
	}	
	
	//Show Ad
	ts("#container_dc", {display:"block"});
	var mainTL = new TimelineMax();
		mainTL.to(bgFade, .25, {autoAlpha:0, ease:Power1.easeInOut, overwrite:"none", onComplete:hideBGFade},"fr0")
		.set("#anim_holder", {scale:1.75, x:10, y:15},"fr0")
		
		.add("fr1", "+=0")
		.staggerFromTo("#copy1 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},1,"fr1+=.2")	
			
		.add("fr1_out", "+=1.5")
		.from("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out" )
		.to("#copy1", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out+=.25" )
		.add(bg2In,"fr1_out+=0")
		.add(bg3In,"fr1_out+=0")
		
		//.addPause()		
		.add("fr2", "+=2.25")
		.to("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeInOut"},"fr2" )
		.staggerFromTo("#copy2 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},1,"fr2+=.3")
		
		.add("fr3", "+=2.25")
		
		.to("#copy2", .01, {autoAlpha:0,ease:"Power3.easeOut"},"fr3" )
		.staggerFromTo("#copy3 .text1", .5, {autoAlpha:0, x:-20},{autoAlpha:1, x:0,  ease:"Power3.easeOut"},.07,"fr3+=.3" )
		.staggerFromTo("#copy3 .text2", .5, {autoAlpha:0, x:-20},{autoAlpha:1, x:0, ease:"Power3.easeOut"},.07,"+=.25" )
		.add("ef")
		.call(function(){console.log(mainTL.duration());});
		//mainTL.seek("fr1_out")		
}



hideBGFade = function(){
	bgFade.style.display = "none";
}


//Add Event Listeners
setRoll = function(){
	var x = document.getElementById("background_exit_dc");
	if (x.addEventListener) {                    
		// For all major browsers, except IE 8 and earlier
	    x.addEventListener('mouseover', bgOverHandler, false);
	    x.addEventListener('mouseout', bgOutHandler, false);
	} else {                  
		// For IE 8 and earlier versions hide rollover effect
	}
}
addListeners = function() {
	setRoll();
}


bgOverHandler = function(e) {
	ts(cta, {autoAlpha:.7, overwrite:"true"});			
}

bgOutHandler = function(e) {
	ts(cta, {autoAlpha:1, overwrite:"true"});			
}



function bgExitHandler() {

}


