const date = "2023-11-06";
//const date = "2025-02-11";
let data;
let stations = [];
let trips = [];
let maxLat, minLat, maxLng, minLng;
let currentTime;
let maxTime;
let timeSlider;
let isPlaying = true;

function preload() {
  data = loadJSON("../data/" + date + ".json");
}

function setup() {
  colorMode(HSB, 360, 100, 100, 100);
  maxLat = Math.max(...data.stations.map( o => o.lat));
  minLat = Math.min(...data.stations.map( o => o.lat));
  maxLng = Math.max(...data.stations.map( o => o.lng));
  minLng = Math.min(...data.stations.map( o => o.lng));
  
  createCanvas(700, 700);
  
  data.stations.forEach(s => {
    const station = new Station(s);
    if (station.isValid) {
      stations.push(station);
    }
  });

  data.trips.forEach(t => {
    const trip = new Trip(t);
    if (trip.isValid) {
      trips.push(trip);
    }
  });

  currentTime = parseInt(trips[0].startedTime);
  maxTime = parseInt(trips[trips.length-1].endedTime);
  timeSlider = createSlider(currentTime, maxTime, currentTime);
  timeSlider.size(width - 100);
  createButton('Toggle Animation').mousePressed(() => {
    isPlaying = !isPlaying;
  });
}

function draw() {
  if (isPlaying) {
    updateTime();
  } else {
    currentTime = timeSlider.value();
  }
  update();
}

function updateTime() {
  if (currentTime < maxTime) {
    currentTime += 50000;
  }
}

function update() {
  background(0, 0, 95);
  stations.forEach(s => {
    s.display();
  });

  trips.forEach( t => {
    t.display(currentTime);
  });

  const time = new Date(currentTime);
  const timeStr = formatAMPM(time);
  fill(0);
  textSize(20);
  text (timeStr, 50, 50);
  timeSlider.value(currentTime);
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

