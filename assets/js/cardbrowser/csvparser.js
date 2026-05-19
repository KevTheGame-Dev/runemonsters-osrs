(function($) {
	$('.toggleButton').each(function (index, element) {
		var targetId = $(this).attr('targetId');
		var target = $('#' + targetId);

		if (target.attr('start') == 'closed') {
			target.toggle();
		}

		$(this).on('click', function(event) {
			target.toggle();

			if ($(this).text() == '▶') {
				$(this).html('▼');
			} else {
				$(this).html('▶');
			}
			event.stopPropagation();
		});
	})
	
})(jQuery);