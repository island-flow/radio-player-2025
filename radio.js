//JavaScript Document

//global variables
let currentStationIndex = 0;

//commented stations don't work sometimes due to stream issues
const stations = [
  { name: "Groove Salad", url: "https://ice2.somafm.com/groovesalad-128-mp3" },
  { name: "Radio Paradise", url: "https://stream.radioparadise.com/aac-320" },
 // { name: "Lofi Radio", url: "https://stream.lofi.radio/lofi.mp3" },
 // { name: "Chillhop Radio", url: "https://stream.chillhop.com/chillhop.mp3" },
  { name: "Smooth Lounge", url: "https://streamingv2.shoutcast.com/smoothlounge" },

  // Your existing stations (you can name these later if you want)
  { name: "Pulse EDM", url: "http://pulseedm.cdnstream1.com:8124/1373_128" },
  { name: "Magic Streams", url: "http://cast.magicstreams.gr:9125/stream" },
 // { name: "UK Internet Radio", url: "http://uk5.internet-radio.com:8347/" },
  //{ name: "Gclef Radio", url: "http://brm.radio.gclef320kbps.com:10442" },
  { name: "Slow Radio", url: "http://stream1.slowradio.com" },
  { name: "181 FM", url: "http://listen.181fm.com:8070" },
  { name: "Hit 104", url: "http://tuner.hit104.com/" },
 // { name: "Chilltrax", url: "http://server1.chilltrax.com:9000" },
 // { name: "977 Hits", url: "http://7609.live.streamtheworld.com:80/977_HITS_SC" },
  { name: "Hot 108 Jamz", url: "http://hot108jamz.hot108.com:4010" },
  { name: "Space Unicorn", url: "http://spaceunicorn.radio:8000/stream" },
  { name: "Organica", url: "http://organica.melodic.one:8000/radio.mp3" }
];

//Player Variables
const audioPlayer = new Audio();
const playIcon = document.getElementById('play_pause');
const stationTitle = document.getElementById('station-title');


//Checking Browser for local Storage
function checkBrowser() {
  if (typeof (Storage) !== "undefined" && localStorage) {
    console.log("localStorage is fully supported!");
  } else {
    window.alert("Oops! Looks like your browser doesn't support localStorage. You might miss out on some cool features.");
  }
}

checkBrowser(); //function call

//Adding stations to local storage
localStorage.setItem("stations", JSON.stringify(stations));

//Play and Pause states
let isPlaying = false;

//event listeners
document.getElementById('play_pause').addEventListener('click', togglePlayPause);
document.getElementById('skip_next').addEventListener('click', nextStation);
document.getElementById('skip_previous').addEventListener('click', previousStation);



//icon handling

function togglePlayPause() {
  const playPauseButton = document.getElementById('play_pause');

  if (isPlaying) {
    // Pause audio
    audioPlayer.pause();





    // Update button icon to play
    playPauseButton.textContent = 'play_arrow'; // Update inner text
    playPauseButton.classList.remove('pause_circle_filled');
    playPauseButton.classList.add('play_arrow');

    console.log("Paused. Icon set to play_arrow.");
  } else {
    // Play audio
 audioPlayer.src = stations[currentStationIndex].url;
greeting.classList.add("hidden"); //hides the greeting when playing

    audioPlayer.play();
    updateStationTitle(); // Update station title

    // Update button icon to pause
    playPauseButton.textContent = 'pause_circle_filled'; // Update inner text
    playPauseButton.classList.remove('play_arrow');
    playPauseButton.classList.add('pause_circle_filled');

    console.log("Playing. Icon set to pause_circle_filled.");
  }
  isPlaying = !isPlaying; // Toggle play state
}


function nextStation() {
  currentStationIndex = (currentStationIndex + 1) % stations.length; // Increment the index. % (modulo) helps to loop back to the first station.
  // Code to load and play the new station
audioPlayer.src = stations[currentStationIndex].url;


  audioPlayer.play();
  isPlaying = true;

updateStationTitle(); // Update station title
}
function previousStation() {
  currentStationIndex = (currentStationIndex - 1) % stations.length; // Increment the index. % (modulo) helps to loop back to the first station.
  // Code to load and play the new station
audioPlayer.src = stations[currentStationIndex].url;


  audioPlayer.play();
  isPlaying = true;

  updateStationTitle(); // Update station title
}

// Update the station title

function updateStationTitle() {
const stationName = stations[currentStationIndex].name;
stationTitle.textContent = stationName;
console.log("Station title updated to: " + stationName);

}