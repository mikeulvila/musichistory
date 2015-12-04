app.factory("songStorage", ["$q", "$http", function ($q, $http) {

 var song_list;

   function getJSONSongs () {
    return $q(function (resolve, reject) {
        $http.get("data/songs.json")
        .success(
          function (objectFromJSONFile) {console.log("JSON OBJECT", objectFromJSONFile);
            console.log("objectFromJSONFile.songs", objectFromJSONFile.songs);
            song_list = Object.keys(objectFromJSONFile.songs).map(function(song) { return objectFromJSONFile.songs[song] });
            console.log("song_list", song_list);
            resolve(objectFromJSONFile.songs);
          }, function (error) {
            reject(error);
          }
        );
      });
   } 


  var songPromise = getJSONSongs();

  return {
    loadSongs: function () {
      return songPromise;
    },
    getSongs: function() {
      return song_list;
    },
    getSong: function (id) {
      return song_list.filter(function(song){
        return song.id === id;
      })[0];
    },
    addSong: function (song) {
      console.log("Added single song to factory");
      song_list.push(song);
      return song_list;
    }
  }
}]);