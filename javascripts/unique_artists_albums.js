define(["lodash"],
	function(_) {

		return {
			getUniqueArtists: function(dataArray) {
				var uniqueArtists = _.chain(dataArray)
									.uniq("artist")
									.pluck("artist")
									.value();
				// console.log("unique-artists", uniqueArtists);
				return uniqueArtists;
			},
			getUniqueAlbums: function(dataArray) {
				var uniqueAlbums = _.chain(dataArray)
									.uniq("album")
									.pluck("album")
									.value();
				// console.log("unique-albums", uniqueAlbums);
				return uniqueAlbums;
			},
			getMatchedAlbums: function(dataArray) {
		 		var matchedAlbums = _.chain(config.dataArray)
		 							.filter(songs, songs.artist === selectedArtist)
		 							.uniq("album").pluck("album").value();
		 			console.log("matchedAlbums", matchedAlbums);
		 		return matchedAlbums;
			}//--end matched albums
		};//--end return

});