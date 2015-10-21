// var minute = 60;
// var hour = minute * 60;
// var day = hour * 24;
// var year = day * 365;

// var hoursInYear = year / hour;
// 	console.log("hoursInYear", hoursInYear);

// var hoursInDecade = (year * 10) / minute;
// 	console.log("hoursInDecade", hoursInDecade);

// var myAge = 35

// var myAgeInSeconds = myAge * year;
// 	console.log("myAgeInSeconds", myAgeInSeconds);

// var isOld = 80;

// if (myAge < isOld) {
// 	console.log("I am young.");
// } else {
// 	console.log("I am old.");
// }

// var colors = ["red", "blue", "yellow", 10, true];

// var luckyNumbers = [4, 8, 15, 16, 23, 42]

// for (var i = 0; i <= 100; i += 10) {
// 	console.log(i);
// }

// for (var i = 100; i > 0; i = i / 2) {
// 	console.log(i);
// }

// var nums = [];
// for (var i = 0; i < 10; i++) {
// 	nums.push(i);
// }

// console.log(nums);

// var evenOddNums = [];

// for (var i = 100; i > 0; i--) {
// 	if (i % 2 === 0) {
// 		evenOddNums.unshift(i);
// 	} else {
// 		evenOddNums.push(i);
// 	}
// }

// console.log(evenOddNums);



// var el = document.getElementById("container");

// el.innerHTML = "I love NSS";

// var containerText = el.innerHTML;


//  1. Take the contents of the sonnet div and place it in a variable
  //2. Find and output the starting position of the word "orphans"
  //3. Output the number of characters in the sonnet
  //4. Replace the first occurance of the string "winter" with "yuletide"
  //5. Replace all occurances of the string "the" with "a large"
  //6. Set the content of the sonnet div with the new string


// var sonnetEl = document.getElementById("sonnet");
// var sonnetText = sonnetEl.innerHTML;
// console.log("sonnetText", sonnetText);

// var indexOfOrphans = sonnetText.indexOf("orphans");
// console.log("indexOfOrphans", indexOfOrphans);

// console.log(sonnetText.length);

// sonnetEl.innerHTML = sonnetText.replace("winter", "yuletide").replace(/the/g, "a large");
//NEW SONGS JAVASCRIPT FILE

//***************DISPLAY AND HIDE LIST MUSIC AND ADD MUSIC********************
document.getElementById("list-music").addEventListener("click", function(){
	document.getElementById("main-window").classList.remove("hidden");
	document.getElementById("side-nav").classList.remove("hidden");
	document.getElementById("enter-song-info").classList.add("hidden");	
	console.log("list music works");
})
document.getElementById("add-music").addEventListener("click", function(){
	document.getElementById("main-window").classList.add("hidden");
	document.getElementById("side-nav").classList.add("hidden");
	document.getElementById("enter-song-info").classList.remove("hidden");
	console.log("add music works");
})

//*************DECLARE VARIABLES******************************
var songs = [];
var titles = [],
	artists = [],
	albums = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.push("Something > by The Beatles on the album Abbey Road");
songs.unshift("P.Y.T. > by Michael Jackson on the album Thriller");

//  REMOVE BAD CHARACTERS
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace(">", "-");
}
console.log(songs);

// SEPERATE STRINGS TO TITLE, ARTIST, ALBUM

for (var i = 0; i < songs.length; i++) {
	titles.push(songs[i].slice(0, songs[i].indexOf("-") -1));
	artists.push(songs[i].slice(songs[i].indexOf("by") + 3, songs[i].indexOf(" on ")));
	albums.push(songs[i].slice(songs[i].indexOf("album") + 6))
}	

console.log("titles", titles);
console.log("artists", artists);
console.log("albums", albums);

var mainWindow = document.getElementById("main-window");
var outputToDiv = "";

for (var i = 0; i < titles.length; i++) {
	outputToDiv += "<p>{" + titles[i] + "} by {" + artists[i] + "} on the album {" + albums[i] + "}</p>";
    }

mainWindow.innerHTML = outputToDiv;

//******************ADD MUSIC************************
document.getElementById("add").addEventListener("click", function(){
	console.log("add button works");
	titles.push(document.getElementById("song-title").value);
	artists.push(document.getElementById("song-artist").value);
	albums.push(document.getElementById("song-album").value);
	console.log(titles);
	console.log(artists);
	console.log(albums);
	mainWindow.innerHTML += "<p>{" + titles[titles.length - 1] + "} by {" + artists[artists.length - 1] + "} on the album {" + albums[albums.length - 1] + "}</p>";
	document.getElementById("main-window").classList.remove("hidden");
	document.getElementById("side-nav").classList.remove("hidden");
	document.getElementById("enter-song-info").classList.add("hidden");
	document.getElementById("song-title").value = "";
	document.getElementById("song-artist").value = "";
	document.getElementById("song-album").value = "";
})



































































































































