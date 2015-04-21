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
			$('.work-container').append('<div class="video"><a href="#"><i class="glyphicon glyphicon-remove close-button"></i></a><iframe width="640" height="360" src="' + workPath + '" frameborder="0" allowfullscreen></iframe></div>');
		}else if(workType == 'image'){

		}
	})

	//Close portfolio work button
	$('.close-button').on('click', function() {
		$('.portfolio-overlay').hide(); //Disable the dark overlay
		$('.overlay').hide(); //Diasable the work overlay
		$('.video').remove(); //Remove the video div
		//$('.picture').remove(); //Remove the picture div


	})
	
});