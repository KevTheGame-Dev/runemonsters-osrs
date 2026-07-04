(function($) {
	var csvFileUrl = "https://raw.githubusercontent.com/KevTheGame-Dev/runemonsters-osrs/refs/heads/main/assets/cards/cards.csv";

	$.ajax({
			method: 'GET',
			url: csvFileUrl,
			dataType: 'text',
			success: function (data) {
					var parsedData = Papa.parse(data, {
							header: true,
							dynamicTyping: true
					});
					
					$(parsedData.data).each(function(index, card) {
						$("#cardbrowser").append(
							"<article class='cardContainer'\
								cardId='" + card.id + "'\
								cardName='" + card.Name + "'\
								cardType='" + card.Type + "'\
								cardSubTypes='" + card.SubTypes + "'\
								cardSet='" + card.Set + "'\
								cardGuthixCost='" + card.GuthixCost + "'\
								cardSaradominCost='" + card.SaradominCost + "'\
								cardZamorakCost='" + card.ZamorakCost + "'\
								cardArmadylCost='" + card.ArmadylCost + "'\
								cardBandosCost='" + card.BandosCost + "'\
								cardZarosCost='" + card.ZarosCost + "'\
								cardSerenCost='" + card.SerenCost + "'\
								cardHP='" + card.HP + "'\
								cardAttackType='" + card.AttackType + "'\
								cardAttackValue='" + card.AttackValue + "'\
								cardDefensiveWeakness='" + card.DefensiveWeakness + "'\
								cardDefensiveValue='" + card.DefensiveValue + "'\
								cardEffect='" + card.Effect + "'\
								cardFlavorText='" + card.FlavorText + "'\
								>\
									<span class='image cardZoom'>\
										<img src='assets/cards/runemonsters_pngs/fronts/"+ card.CardArtImage +"' alt='' />\
								</span>\
							</article>"
						);
					});

					setupCardZoom();
			},
			error: function(e) {
					console.error("Failed to load the cards csv.", e);
			}
	});
})(jQuery);