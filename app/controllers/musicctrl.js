app.controller("musicctrl", ["$q", "$http", "$scope", "songStorage", 
  function($q, $http, $scope, songStorage) {

  var selectedArtist = {};
  
  //define combined songs array
  $scope.combinedSongs = [];

  songStorage.loadSongs().then(function() {
    $scope.combinedSongs = songStorage.getSongs();
    console.log("combinedSongs after load songs", $scope.combinedSongs);
    }, function (error) {
    console.log("error", error);
  });

}]);