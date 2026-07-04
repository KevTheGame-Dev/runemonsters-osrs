function setupCardZoom () {
  var zoomedInCard = $('#zoomedInCard');
	$('.cardZoom').each(function (index, element) {
    console.log(element)
		$(element).on('click', function(event) {
      console.log(element)
      var baseChildImg = $(element).children('img').first();
      var zoomedChildImg = zoomedInCard.children('img').first();

      zoomedChildImg.attr('src', baseChildImg.attr('src'));
      zoomedInCard.show();
			event.stopPropagation();
		});
	});

  zoomedInCard.on('click', function(event) {
    zoomedInCard.hide();
  });
	
}