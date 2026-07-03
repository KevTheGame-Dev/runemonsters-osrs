(function($) {
  var allCards = $('.cardContainer');

  var searchBar = $('#card-search');
  var cardTypeDropdown = $('#card-type');
  var cardRarityDropdown = $('#card-rarity');

  function filterCards() {
    allCards.each(function(index, element) {
      var isNameMatch = matchesByName(element);
      var isTypeMatch = matchesByType(element);
      var isRarityMatch = matchesByRarity(element);

      if (isNameMatch && isTypeMatch && isRarityMatch) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  }

  function matchesByName (element) {
    if (searchBar.val() === "") {
      return true;
    }

    if ($(element).attr("cardname").toLowerCase().indexOf(searchBar.val()) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  function matchesByType (element) {
    if (cardTypeDropdown.val() === "") {
      return true;
    }

    if ($(element).attr("cardtype") === cardTypeDropdown.val()) {
      return true;
    } else {
      return false;
    }
  }

  function matchesByRarity (element) {
    if (cardRarityDropdown.val() === "") {
      return true;
    }

    if ($(element).attr("cardrarity") === cardRarityDropdown.val()) {
      return true;
    } else {
      return false;
    }
  }

	searchBar.on('input', function(event) {
    filterCards();
	});
  cardTypeDropdown.on('change', function(event) {

    filterCards();
  });
  cardRarityDropdown.on('change', function(event) {
    filterCards();
  });
})(jQuery);