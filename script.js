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

/*
  1. Take the contents of the sonnet div and place it in a variable
  2. Find and output the starting position of the word "orphans"
  3. Output the number of characters in the sonnet
  4. Replace the first occurance of the string "winter" with "yuletide"
  5. Replace all occurances of the string "the" with "a large"
  6. Set the content of the sonnet div with the new string
*/

// var sonnetEl = document.getElementById("sonnet");
// var sonnetText = sonnetEl.innerHTML;
// console.log("sonnetText", sonnetText);

// var indexOfOrphans = sonnetText.indexOf("orphans");
// console.log("indexOfOrphans", indexOfOrphans);

// console.log(sonnetText.length);

// sonnetEl.innerHTML = sonnetText.replace("winter", "yuletide").replace(/the/g, "a large");
//NEW SONGS JAVASCRIPT FILE

var songs = [];

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

// HTML ELEMENT VARIABLES DECLARED	
var mainWindow = document.getElementById("main-window"),
	songTitle1 = document.getElementById("title1"),
	songTitle2 = document.getElementById("title2"),
	songTitle3 = document.getElementById("title3"),
	songTitle4 = document.getElementById("title4"),
	songTitle5 = document.getElementById("title5"),
	songArtist1 = document.getElementById("artist1"),
	songArtist2 = document.getElementById("artist2"),
	songArtist3 = document.getElementById("artist3"),
	songArtist4 = document.getElementById("artist4"),
	songArtist5 = document.getElementById("artist5"),
	songAlbum1 = document.getElementById("album1"),
	songAlbum2 = document.getElementById("album2"),
	songAlbum3 = document.getElementById("album3"),
	songAlbum4 = document.getElementById("album4"),
	songAlbum5 = document.getElementById("album5"),





// songTitle1.innerHTML = songs[0].slice(0, songs[0].indexOf("-") -1);
































































































































