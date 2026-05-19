(function($) {
  var zoomedInCard = $('#zoomedInCard');
	$('.cardZoom').each(function (index, element) {
		$(this).on('click', function(event) {
      var baseChildImg = $(this).children('img').first();
      var zoomedChildImg = zoomedInCard.children('img').first();

      zoomedChildImg.attr('src', baseChildImg.attr('src'));
      zoomedInCard.show();
			event.stopPropagation();
		});
	});

  zoomedInCard.on('click', function(event) {
    zoomedInCard.hide();
  });
	
})(jQuery);