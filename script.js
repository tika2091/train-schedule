



// INITIALIZING FIREBASE
var config = {
    apiKey: "AIzaSyDANdrY-kC7PHfwilDIaAXspJ_JctznR8M",
    authDomain: "train-schedule-b624c.firebaseapp.com",
    databaseURL: "https://train-schedule-b624c.firebaseio.com",
    projectId: "train-schedule-b624c",
    storageBucket: "train-schedule-b624c.appspot.com",
    messagingSenderId: "456879468977"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// submit button 
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  // GRAB THE USERTEXT INPUT
  var trainName= $("#train").val().trim();
  var destination = $("#destination").val().trim();
  var startTime = moment($("#start").val().trim(,"HH:mm").subtract(10, "years").format("X");
  var frequency = $("frequency").val().trim();

  //create variable to hold data locally
  var nextTrain = {
    name: trainName,
    dest: destination,
    time: startTime,
    frequency: frequency
  };

  // upload it to firebase database
  database.ref().push(nextTrain);

  // show it in console//
  console.log(nextTrain.name);
  console.log(nextTrain.dest);
  console.log(nextTrain.time);
  console.log(nextTrain.frequency);

  // ALERT
  alert("Train added");

  
  $("#train").val("");
  $("#destination").val("");
  $("#start").val("");
  $("#frequency").val("");


  retun false;

});

// 3. create event to pull data from firebse to html
database.ref().on("child_added", function(Snapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // STORE VALUES INTO VARIABLES
  var newTrain = childSnapshot.val().name;
  var newDestination = childSnapshot.val().dest;
  var newTime = childSnapshot.val().time;
  var newFrequency = childSnapshot.val().frequency;


  var timeDifference= moment().diff (moment.unix(newTime), "minutes");
   var timeRemainder= moment().diff (moment.unix(newTime), "minutes");%frequency;
   var timeMinutes= timeFrequency-timeRemainder;

   // calculate the arrival time to current
   var timeArrival = moment(.add(timeMinutes,) "m").format("hh:mm A");




  // TRAIN INFO CONSOLE LOG
  console.log(timeMinutes);
  console.log(timeArrival);
  console.log(moment().format ("hh:mm A"));
  console.log(timeArrival);
  console.log(moment().format("X"));


  // add train data to table

  $("#table > tbody").append("<tr><td>" + newName + "</td></td>" + newDestination + "</td></td>" + newFrequency + "timeArrival"</td></td>" + "timeMinutes + "</tr></td" );
});

