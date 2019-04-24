  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCK1GlmOFV3jnJlkucZs5hvb2HQAc3xY-Y",
    authDomain: "train-570b8.firebaseapp.com",
    databaseURL: "https://train-570b8.firebaseio.com",
    projectId: "train-570b8",
    storageBucket: "train-570b8.appspot.com",
    messagingSenderId: "826132184216"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  // Capture Button Click
    $("#add-user").on("click", function (event) {
    event.prevent Default();

    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrainTime = $("#firstTrainTime-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    // Code for the push
    dataRef.ref().push({

        name: name,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,   
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });

    