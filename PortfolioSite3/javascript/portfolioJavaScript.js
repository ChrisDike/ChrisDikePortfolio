$( document ).ready(function() {
	//Open portfolio work button
	$('.thumb-button').on('click', function() {
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
			$('.work-div').append('<iframe width="640" height="360" src="' + workPath + '" frameborder="0" allowfullscreen></iframe></div>');
		}/*TEMPORARILY HIDDEN else if(workType == 'image'){

		}*/
	})

	//Close portfolio work button
	$('.close-button').on('click', function() {
		$('.portfolio-overlay').hide(); //Disable the dark overlay
		$('.overlay').hide(); //Diasable the work overlay
		$('iframe').remove();
		$('.video').removeClass('video'); //Remove the video div class
		//$('.picture').remove(); //Remove the picture div


	})
	
});