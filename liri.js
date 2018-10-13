

// // var bandsintown = require('bandsintown');
// require("dotenv").config();
//  var request = require("request");

//  var fs = require('fs')



// // var keys= require('./keys.js')
// // // var spotify = new Spotify(keys.spotify);


// function Liri(concert,song,movie){

//     this.concert= concert;
//     this.song= song;
//     this.movie=movie;

//     this.doWhatItSays=function(){

//     }
// }
 
// var action = process.argv[2];
// var value = process.argv[3];

// // We will then create a switch-case statement (if-else would also work).
// // The switch-case will direct which function gets run.
// switch (action) {
// case "concert":
//   concert();
//   break;

// case "song":
//   song();
//   break;

// case "movie":
//   movie();
//   break;

// }
// // node liri.js spotify-this-song '<song name here>'
// function Song() {

//   // We will add the value to the bank file.
//   fs.appendFile("random.txt", ", " + value, function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   // We will then print the value that was added (but we wont print the total).
//   console.log("" + value + ".");
// }

// node liri.js movie-this '<movie name here>'
var request = require("request");
// function movie() {


// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=897062a2";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Release imdbRating: " + JSON.parse(body).imdbRating);
    // var Rotten =Ratings[1];
    // value =Rotten.value;
    console.log("Release RottenTomatoRating: " + JSON.parse(body).Ratings);
    console.log("Release Country: " + JSON.parse(body).Country);
    console.log("Release Language: " + JSON.parse(body).Language);
    console.log("Release Plot: " + JSON.parse(body).Plot);
    console.log("Release Actors: " + JSON.parse(body).Actors);
  }
});

  // We will add a negative value to the bank file.
//   fs.appendFile("random.txt", ", -" + value, function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   // We will then print the value that was subtracted (but we wont print the total).
//   console.log("movie" + value + ".");
// }

// // node liri.js concert-this <artist/band name here>
// function concert() {

//   // We will add a negative value to the bank file.
//   fs.appendFile("random.txt", ", -" + value, function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   // We will then print the value that was subtracted (but we wont print the total).
//   console.log("concert" + value + ".");
// }



//////////////////////////////////////////////////
// node liri.js spotify-this-song '<song name here>'

// This will show the following information about the song in your terminal/bash window

// Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from


///////////////////////////////////////////////////////

// node liri.js movie-this '<movie name here>'

// This will output the following information to your terminal/bash window:

//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.




// /////////////////////////////////////////

// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=99cc365901692bdd5b696b746596a6ad") for an artist and render the following information about each event to the terminal:

// Name of the venue

// Venue location

// Date of the Event (use moment to format this as "MM/DD/YYYY")



// var request = require("request");

// // Store all of the arguments in an array
// var nodeArgs = process.argv;

// // Create an empty variable for holding the artist name
// var artist = "";

// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {

//     artist = artist + "+" + nodeArgs[i];

//   }

//   else {

//     artist += nodeArgs[i];

//   }
// }


// var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=99cc365901692bdd5b696b746596a6ad";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {

//     console.log("venue: " + JSON.parse(body).city);
//     console.log( JSON.parse(body).datetime);

//   }
// });
// var BandsInTownEvents = require('bandsintown-events');

// var Events = new BandsInTownEvents();

// //set options for instance
// //app_id and artists are required
// Events.setParams({
//   "app_id":"Liri", //can be anything
//   "artists":[ //accepts string for single artist or an array of artist names
//     "Wilco",
//     "Yeah Yeah Yeahs"
//   ]
// });

// //get your events with success and error callbacks
// Events.getEvents(function( events ){
//   for(var i = 0; i < events.length; i++){
//     console.log( events[i].venue.city + ", " + events[i].venue.region );
//   }
// },function( errors ){
//   console.log(errors);
// });