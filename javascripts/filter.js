define(
	["jquery", "script"],
	function($, script) {
	// *************FILTER ARTISTS***********************
	$("#artist-select").change(function(e) {
		var filteredArtist = $("#artist-select option:selected").text();
		console.log("selected artist", filteredArtist);
		$(".song-container").show();
		$(".song-artist").each(function() {
			console.log("THIS", $(this).text().length, filteredArtist.length);
			if ($(this).text() === filteredArtist) {
				$(this).parents(".song-container").show();
			} else {
				console.log("hiding");
				$(this).parents(".song-container").hide();
			}
		});
	});

	//************* FILTER ALBUMS ******************
	$("#album-select").change(function(e) {
		var filteredAlbum = $("#album-select option:selected").text();
		console.log("selected album", filteredAlbum);
		$(".song-container").show();
		$(".song-container").not(':contains("' + filteredAlbum + '")').hide();
	});

	//************* CLEAR FILTER *******************
	$("#clear-filter").click(function() {
		$(".song-container").show();
	});
});