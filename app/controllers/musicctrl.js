app.controller("musicctrl", ["$scope", "songsData",
  function($scope, songsData) {
    $scope.searchText = "";
    $scope.selectedArtist = {};
    $scope.selectedAlbum = {};

   // we add $firebaseArray returned from songsData.js to the $scope.combinedSongs
   // to be used in our ng-repeat in song-list.html
    $scope.combinedSongs = songsData;
    console.log('combinedSongs', $scope.combinedSongs);

    //clear filter button
    $scope.clearFilter = function() {
      $scope.selectedArtist = {};
      $scope.selectedAlbum = {};
    };

}]);

