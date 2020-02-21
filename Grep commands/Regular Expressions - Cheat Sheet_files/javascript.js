//$(document).ready( highlight_code ); 

var mechanism_example_counter = 0;

function mechanism_example (direction) {
	var mechanism_example_steps = [
			{ "expression" : "p.t",
			      "string" : "<span class='pointer'></span>My appetite is huge.",
			     "comment" : "We begin searching.  The pointer is set at the beginning of the string." } ,
			     
		        { "expression" : "<span class='nomatch'>p</span>.t",
			      "string" : "<span class='pointer'></span><span class='nomatch'>M</span>y appetite is huge.",
			     "comment" : "'M' doesn't fit into our regular expression.  Let's keep looking." } ,
			     
		        { "expression" : "p.t",
			      "string" : "M<span class='pointer'></span>y appetite is huge.",
			     "comment" : "Move the pointer forward." } ,
			     
			{ "expression" : "<span class='nomatch'>p</span>.t",
			      "string" : "M<span class='pointer'></span><span class='nomatch'>y</span> appetite is huge.",
			     "comment" : "'y' doesn't fit into our regular expression.  Let's keep looking." } ,
			     
		        { "expression" : "p.t",
			      "string" : "My<span class='pointer'></span> appetite is huge.",
			     "comment" : "Move the pointer forward." } ,
			     
			{ "expression" : "<span class='nomatch'>p</span>.t",
			      "string" : "My<span class='pointer'></span><span class='nomatch'> </span>appetite is huge.",
			     "comment" : "' ' doesn't fit into our regular expression.  Let's keep looking." } ,
			     
			{ "expression" : "p.t",
			      "string" : "My <span class='pointer'>a</span>ppetite is huge.",
			     "comment" : "Move the pointer forward." } ,
				     
			{ "expression" : "<span class='nomatch'>p</span>.t",
			      "string" : "My <span class='pointer'></span><span class='nomatch'>a</span>ppetite is huge.",
			     "comment" : "'a' doesn't fit into our regular expression.  Let's keep looking." } ,
					     
			{ "expression" : "p.t",
			      "string" : "My a<span class='pointer'></span>ppetite is huge.",
			     "comment" : "Move the pointer forward." } ,
			     
			{ "expression" : "<span>p</span>.t",
			      "string" : "My a<span class='pointer'></span><span class='match'>p</span>petite is huge.",
			     "comment" : "'p' fits.  Let's see if it continues." } ,
			     
			{ "expression" : "<span>p.</span>t",
			      "string" : "My a<span class='pointer'></span><span class='match'>pp</span>etite is huge.",
			     "comment" : "The next character in our RE is '.' for any character and 'p' fits.  Let's see if it continues." } ,
			     
			{ "expression" : "<span>p.</span><span class='nomatch'>t</span>",
			      "string" : "My a<span class='pointer'></span><span class='match'>pp</span><span class='nomatch'>e</span>tite is huge.",
			     "comment" : "The next character in our RE is 't' and we've found an 'e' so it breaks.  Oh well,  we'll keep looking." } ,
			     
			{ "expression" : "p.t",
			      "string" : "My ap<span class='pointer'>petite is huge.",
			     "comment" : "Move the pointer forward." } ,
			     
			{ "expression" : "<span>p</span>.t",
			      "string" : "My ap<span class='pointer'></span><span class='match'>p</span>etite is huge.",
			     "comment" : "'p' fits.  Let's see if it continues." } ,
				     
			{ "expression" : "<span>p.</span>t",
			      "string" : "My ap<span class='pointer'></span><span class='match'>pe</span>tite is huge.",
			     "comment" : "The next character in our RE is '.' for any character and 'e' fits.  Let's see if it continues." } ,
					     
			{ "expression" : "<span>p.t</span>",
			      "string" : "My ap<span class='pointer'></span><span class='match'>pet</span>ite is huge.",
			     "comment" : "The next character in our RE is 't' and we've found a 't'.  The RE is completed, we have found a match." }
		];
	
	mechanism_example_counter += direction;
	console.log(mechanism_example_counter);
	
	if (mechanism_example_counter <= 1) {
		$('#mechanism-example-button-back').attr('disabled', 'disabled');
		$('#mechanism-example-button-forward').removeAttr('disabled', 'disabled');
		mechanism_example_counter = 1;
	}else if (mechanism_example_counter >= mechanism_example_steps.length) {
		$('#mechanism-example-button-back').removeAttr('disabled', 'disabled');
		$('#mechanism-example-button-forward').attr('disabled', 'disabled');
		mechanism_example_counter = mechanism_example_steps.length;
	} else {
		$('#mechanism-example-button-back').removeAttr('disabled', 'disabled');
		$('#mechanism-example-button-forward').removeAttr('disabled', 'disabled');
	}
	
	$('#mechanism-example-looking-for').html(mechanism_example_steps[mechanism_example_counter - 1].expression);
	$('#mechanism-example-string').html(mechanism_example_steps[mechanism_example_counter - 1].string);
	$('#mechanism-example-comment').html(mechanism_example_steps[mechanism_example_counter - 1].comment);
	
}


// to cover highlighting different sectiosn of regular expressions on hover

$(document).ready( setUpHovers );

function setUpHovers() {
	$('.regexHovers li').hover(
		function() {
			$(this).addClass('regex-trigger');
			var match = /eg(\d+)trigger(\d+)/.exec($(this).attr('id'));
			$('#eg'+match[1]+'section'+match[2]).addClass('regex-section');
		}, function () {
			$(this).removeClass('regex-trigger');
			var match = /eg(\d+)trigger(\d+)/.exec($(this).attr('id'));
			$('#eg'+match[1]+'section'+match[2]).removeClass('regex-section');
		}
	);
	$('.exampleHovers span').hover(
		function() {
			$(this).addClass('regex-trigger');
			var match = /eg(\d+)example(\d+)/.exec($(this).attr('id'));
			$('#eg'+match[1]+'section'+match[2]).addClass('regex-section');
		}, function () {
			$(this).removeClass('regex-trigger');
			var match = /eg(\d+)example(\d+)/.exec($(this).attr('id'));
			$('#eg'+match[1]+'section'+match[2]).removeClass('regex-section');
		}
	);
}


// cheatsheet stuffs

function organise_sections () {
	
	var width = $(document).width();
	
	if (width > 1400) {
		columns = 4;
	} else if (width > 1100) {
		columns = 3;
	} else if (width > 767) {
		columns = 2;
	} else {
		columns = 1;
	}
	
	// adjust width of sections
	$('.sectioncontainer').css('width', '100%');
	
	// remove all sections from existing columns
	var tempItems = $('.sectioncontainer').detach();
	tempItems.appendTo('#sectionsmain');
	
	// put them back in the required order
	var currentColumn = 0;
	var placedItem = false;
	var nextColumn = 0;
	var itemHolder;
	
	for (var i=0;i<(sections.length - 1);i++) {
		placedItem = false;
		
		while (!placedItem) {
			if (currentColumn == (columns - 1)) {
				thisColumnHeight = $('#cheatsheetcolumn' + currentColumn).height();
				nextColumnHeight = $('#cheatsheetcolumn0').height();
				
				if (thisColumnHeight > nextColumnHeight) {
					currentColumn = 0;
				} else {
					placedItem = true;
				}
			} else {
				nextColumn = currentColumn + 1;
				thisColumnHeight = $('#cheatsheetcolumn' + currentColumn).height();
				nextColumnHeight = $('#cheatsheetcolumn' + nextColumn).height();
				
				if (thisColumnHeight > nextColumnHeight) {
					currentColumn++;
				} else {
					placedItem = true;
				}
			}
		}
		
		itemHolder = $('#' + sections[i]).detach();
		
		itemHolder.appendTo('#sectionholder' + currentColumn);
		
		currentColumn++;
		if (currentColumn >= columns) {
			currentColumn = 0;
		}
	}
	
	// place the last item in the shortest column
	currentColumn = 0;
	var currentShortest = 0;
	var currentShortestHeight = $('#cheatsheetcolumn0').height();
	for (var i=1;i<columns;i++) {
		if ($('#cheatsheetcolumn' + i).height() < currentShortestHeight) {
			currentShortest = i;
			currentShortestHeight = $('#cheatsheetcolumn' + i).height();
		}
	}
	
	var lastItem = sections[sections.length - 1];
	
	itemHolder = $('#' + lastItem).detach();
	itemHolder.appendTo('#sectionholder' + currentShortest);
}


function activate_sections() {
	$('.sectioncontainer').on('click', '.toggle-section', toggle_section_data);
}


function toggle_section_data(event) {
	//console.log(event);
	
	var itemId = event.delegateTarget.id;
	
	$('#' + itemId + ' > dl').slideToggle();
	$('#' + itemId + ' > .toggle-section > span').toggleClass('glyphicon-chevron-up glyphicon-chevron-down')
	setTimeout(organise_sections, 450);
}
