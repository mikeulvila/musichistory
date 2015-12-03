var app = angular.module("musichistory", []);

app.controller("musicctrl", ["$q", "$http", "$scope", function($q, $http, $scope) {
  //variables
  // $scope.artists = "";
  // $scope.albums = "";
  //define combined songs array
  $scope.combinedSongs = [];
  //get songs.json as a promise
  var getSongs = $q(function(resolve, reject) {
      $http.get("data/songs.json")
      .success(
        function(objectFromJSONFile) {console.log("JSON OBJECT", objectFromJSONFile);
          resolve(objectFromJSONFile.songs);
        }, function(error) {
          reject(error);
        }
      );
    });
  //get more-songs.json as a promise
  var getSongs2 = $q(function(resolve, reject) {
      $http.get("data/more-songs.json")
      .success(
        function(objectFromJSONFile) {console.log("JSON2 OBJECT", objectFromJSONFile);
          resolve(objectFromJSONFile.songs);
        }, function(error) {
          reject(error);
        }
      );
    });
  //call promise and send songs to combined array
  getSongs.then(function (songs) {
    angular.forEach(songs, function (song) {
      $scope.combinedSongs.push(song);
    });
    console.log("getSongs from Angular",songs);
    console.log("combined songs after getSongs", $scope.combinedSongs);
  }, function (error) {
    console.log("Failed");
  });
  //call promise and send songs to combined array
  getSongs2.then(function (songs) {
    angular.forEach(songs, function (song) {
      $scope.combinedSongs.push(song);
    });
    console.log("getSongs2 from Angular",songs);
    console.log("combined songs after getSongs2", $scope.combinedSongs);
  }, function (error) {
    console.log("Failed");
  });

}]);




  // var JSON1 = $http.get("data/songs.json");
  // var JSON2 = $http.get("data/more-songs.json");
  // $q.all([JSON1, JSON2]).then(function(obj) {
  //   console.log("angular songs", obj);
  //   $scope.combined = [];
  //   angular.forEach(obj, function(song) {
  //     $scope.combined.push(song);
  //   });

  //   console.log("angular combined array", $scope.combined);
  // })
