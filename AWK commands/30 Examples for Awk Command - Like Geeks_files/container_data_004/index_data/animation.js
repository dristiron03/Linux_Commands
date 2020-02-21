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

function build_timeline_main() {	
	
	function bg2In() {
		var bg2TL = new TimelineMax();
			bg2TL.fromTo(scrub_bar, 10, {scaleX:.1}, {scaleX:.6, transformOrigin:"17px 100%", ease:Power0.easeNone},"start")		
		return bg2TL;		
		//bg2TL.timeScale( 0.8);
	}	
	function bg1In() {
		var bg1TL = new TimelineMax();
			bg1TL.timeScale( 1 )
				.add("start", "+=0")
				//.to(["#img_lady_holder","#img_lady1_hand"], .3, {rotation:1, transformOrigin:"154px 222px", ease:Power1.easeOut}, "start+=.5")	
				//.from("#img_face2", .3, {autoAlpha:0, repeat:1, yoyo:true, repeatDelay:.7, ease:Power1.easeInOut}, "start+=.5")	
				
				
				.to(["#img_lady_holder","#img_lady1_hand"], .3, {rotation:-1, y:1, transformOrigin:"154px 222px", ease:Power1.easeOut}, "start")	
				.to(["#img_lady_holder","#img_lady1_hand"], .3, {rotation:-8, y:4, x:-5,transformOrigin:"154px 222px", ease:Power1.easeIn}, "start+=.8")	
				.from("#img_face3", .1, {autoAlpha:0, ease:Power1.easeInOut}, "start+=.8")							
		
		
				.to(["#img_lady_holder","#img_lady1_hand"], .01, {autoAlpha:0}, "start+=.91")	
				.from(["#img_lady2_holder"], .01, {autoAlpha:0}, "start+=.9")	
		
				.to(["#img_lady2_holder"], .3, {rotation:-8, y:6, x:-5, transformOrigin:"154px 222px",  ease:Power1.easeIn}, "start+=.8")	
				.fromTo(["#img_lady2_arm"], .2, {rotation:-50, transformOrigin:"210px 159px"},{rotation:10, transformOrigin:"210px 159px", ease:Power1.easeInOut}, "start+=.8")	
		
				.to(["#img_lady2_holder"], .07, {rotation:-5, y:4, x:-4, yoyo:true, repeat:20, transformOrigin:"154px 222px",  ease:Power1.easeIn}, "start+=1.1")	
				.to(["#img_lady2_arm"], .07, {rotation:12, yoyo:true, repeat:20, transformOrigin:"210px 159px", ease:Back.easeInOut}, "start+=1.1")	
				.to(["#img_monitor"], .07, {rotation:5, yoyo:true, repeat:20, transformOrigin:"210px 159px", ease:Back.easeInOut}, "start+=1.1")	
				
		return bg1TL;
		
		
	}	
	
	//Show Ad
	ts("#container_dc", {display:"block"});
	var mainTL = new TimelineMax();
		mainTL.to(bgFade, .25, {autoAlpha:0, ease:Power1.easeInOut, overwrite:"none", onComplete:hideBGFade},"fr0")
			
		.set("#anim_holder", {scale:2.1, x:-120, y:410})	
		.add("fr1", "+=0")
		.staggerFromTo("#copy1 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},1,"fr1+=.2")	
			
		.add("fr1_out", "+=1.5")
		.from("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out" )
		.to("#copy1", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out+=.25" )
		.add(bg1In,"fr1_out+=0")
		.add(bg2In,"fr1_out+=0")
		
		//.addPause()
		.add("fr2", "+=2")
		.to("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeInOut"},"fr2" )
		.staggerFromTo("#copy2 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},1.25,"fr2+=.3")
		
		.add("fr3", "+=2.25")
		
		.to("#copy2", .01, {autoAlpha:0,ease:"Power3.easeOut"},"fr3" )
		.staggerFromTo("#copy3 .text1", .5, {autoAlpha:0, x:-20},{autoAlpha:1, x:0,  ease:"Power3.easeOut"},.07,"fr3+=.3" )
		.staggerFromTo("#copy3 .text2", .5, {autoAlpha:0, x:-20},{autoAlpha:1, x:0, ease:"Power3.easeOut"},.07,"+=.25" )
		.add("ef")
		.call(function(){console.log(mainTL.duration());});
	//	mainTL.seek("fr1_out")		
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


