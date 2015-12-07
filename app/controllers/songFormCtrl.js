app.controller("songFormCtrl", ["$scope", "songsData",
  function($scope, songsData) {
    //add $firebaseArray so we can have combinedSongs in sync with both musicctrl and songFormCtrl
    $scope.combinedSongs = songsData;
    //creat object with ng-model on inputs of addSong.html
    $scope.newSong = { 
                        title: "", 
                        artist: "", 
                        album: "",
                        genre: ""
                      };

    $scope.addSong = function() {
      // calling $add on a synchronized array is like Array.push(),
      // except that it saves the changes to our database!
      $scope.combinedSongs.$add($scope.newSong);
       // reset the object input
      $scope.newSong = {};
    };
  }
]);