(function($) {
  var searchBar = $('#card-search');
	searchBar.on('input', function(event) {
    if (searchBar.val() === "") {
      $('.cardContainer').each(function (index, element) {
        $(element).show();
      });
      return;
    }
    
    var matchingCards = [];
    var nonMatchingCards = [];
    $('.cardContainer').each(function(index, element) {
      if ($(element).attr("cardname").toLowerCase().indexOf(searchBar.val()) >= 0) {
        matchingCards.push(element);
      } else {
        nonMatchingCards.push(element);
      }
    });
    

    $(matchingCards).each(function (index, element) {
      $(element).show();
    })
    $(nonMatchingCards).each(function (index, element) {
      $(element).hide();
    })
	});
})(jQuery);