(function($) {
	var folder = "assets/cards/runemonsters_pngs/fronts";

	$.ajax({
			method: 'GET',
			url : folder,
			success: function (data) {
					$(data).find("a").attr("href", function (i, val) {
							if( val.match(/\.(jpe?g|png|gif)$/) ) { 
									$("#cardbrowser").append(
										"<article class='cardContainer' cardName='" + val + "'>\
												<span class='image cardZoom'>\
													<img src='"+ folder + val +" alt='' />\
											</span>\
										</article>"
									);
							} 
					});
			}
	});
	// assets/cards/runemonsters_pngs/fronts/Abyssal_leech.png" alt="" />
	// 	</span>
	// </article>
})(jQuery);