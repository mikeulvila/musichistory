app.controller("songFormCtrl", ["$scope", "songStorage",
  function($scope, songStorage) {

    /*
      Add the following code
    */
    $scope.newSong = { 
                        title: "", 
                        artist: "", 
                        album: ""
                      };

    $scope.addSong = function() {
      console.log("newSong", $scope.newSong)
      songStorage.addSong($scope.newSong);
      // $scope.songs.$add({
      //   title: $scope.newSong.title,
      //   artist: $scope.newSong.artist,
      //   album: $scope.newSong.album
      // });
    };
  }
]);