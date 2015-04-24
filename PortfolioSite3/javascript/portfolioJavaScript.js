$( document ).ready(function() {
	//Reusable function to close out all of the portfolio content overlays
	var closeOverlays = function(event){
		event.preventDefault();
		$('.portfolio-overlay').hide(); //Disable the dark overlay
		$('.overlay').hide(); //Diasable the work overlay
		$('iframe').remove(); //Remove the video from the work-container
		$('.video').removeClass('video'); //Remove the video div class
		$('.remove-me').remove(); //Remove the img
		$('.picture').removeClass('picture'); //Remove the picture class
		$('.work-div').removeAttr('style'); //Remove the adjusted width from adding the picture
	}

	//Open portfolio work button
	$('.thumb-button').on('click', function(event) {
		//Prevenet the page from jumping to the top on clicks
		event.preventDefault();
		
		//Pull the necessary data from the thumbnails
		var buttonNum = $(this).data('button-num');
		var workType = $(this).data('work-type');
		var workPath = $(this).data('content-source');

		//alert("ButNum " + buttonNum + " WorkType " + workType + " WorkPath " + workPath);
		

		$('.portfolio-overlay').show(); //Enable the dark overlay
		$('.overlay').show(); //Enable the work overlay
		
		//Create the video
		if(workType == 'video'){
			$('.work-div').addClass('video');
			$('.work-div').append('<iframe width="640" height="360" src="' + workPath + '" frameborder="0" allowfullscreen></iframe>');
		}else if(workType == 'image'){
			var picWidth = $(this).data('pic-width');
			var picHeight = $(this).data('pic-height');
			$('.work-div').addClass('picture');
			$('.work-div').append('<div class="scroll-container remove-me"><img src="' + workPath + '" width="' + picWidth + '" height="' + picHeight + '"></div>');
			$('.work-div').css('width', picWidth);
		}
	})

	//Close portfolio work button
	$('.close-button').on('click', function(event) {
		closeOverlays(event);
	})

	//Close portfolio on pressing Escape
	$(document).keyup(function(event) {
		//event.preventDefault();
		if (event.keyCode == 27){
			closeOverlays(event);
		}
	})

	//Close portfolio by clicking outside of the work
	$('.work-container').on('click', function(event) {
		closeOverlays(event);
	})

	//Make the picture div unclickable
	$('.picture').on('click', function(event) {
		preventDefault(event);
	})

});