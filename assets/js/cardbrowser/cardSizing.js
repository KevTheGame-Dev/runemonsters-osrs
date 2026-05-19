(function($) {
  var largeCardSelector = $('#largeCardScale');
  var smallCardSelector = $('#smallCardScale');
	largeCardSelector.on('click', function(event) {
    if (largeCardSelector.hasClass('selected')) {
      return;
    }
    largeCardSelector.addClass('selected');
    smallCardSelector.removeClass('selected');

    $('.cardContainer').each(function (index, element) {
      $(this).css('width', 'calc(33.33333% - 2.5em)');
    });
	});

	smallCardSelector.on('click', function(event) {
    if (smallCardSelector.hasClass('selected')) {
      return;
    }
    smallCardSelector.addClass('selected');
    largeCardSelector.removeClass('selected');
    $('.cardContainer').each(function (index, element) {
      console.log('hello')
      $(this).css('width', 'calc(16.66666% - 2.5em)');
    });
	});
})(jQuery);