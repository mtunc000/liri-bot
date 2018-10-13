var Spotify = require('node-spotify-api');
var request = require('request');

require("dotenv").config();

// request
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

 //# Spotify API keys  Client ID c15ae69cc18d4c8281a014d5162c3f2b
 

//  fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${userAccessToken}`     
//   }
// })
// .then(response => response.json())
// .then(({beats})) => {
//   beats.forEach((beat, index) => {
//     console.log(`Beat ${index} starts at ${beat.start}`);
//   })
// }


// SPOTIFY_ID=34e84d93de6a4650815e5420e0
// SPOTIFY_SECRET=5162cd8b5cf940f48702df

// prints `34e84d93de6a4650815e5420e0` to the console
console.log(process.env.SPOTIFY_ID) 

// prints `5162cd8b5cf940f48702df` to the console
console.log(process.env.SPOTIFY_SECRET)

console.log('this is loaded');

// exports.spotify = {
//   id: process.env.SPOTIFY_ID,
//   secret: process.env.SPOTIFY_SECRET
// };


// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// spotify
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
