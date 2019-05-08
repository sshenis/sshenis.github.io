  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-wnkreC68OxNzk-VMmm76OMH8MkKBfdI",
    authDomain: "final-project-web-dev-2.firebaseapp.com",
    databaseURL: "https://final-project-web-dev-2.firebaseio.com",
    projectId: "final-project-web-dev-2",
    storageBucket: "final-project-web-dev-2.appspot.com",
    messagingSenderId: "870498955076"
  };


  firebase.initializeApp(config);

  var db = firebase.firestore();

  function addData() {
    var cname = document.querySelector('#contact-name').value;
    var cemail = document.querySelector('#contact-email').value;
    var cmessage = document.querySelector('#contact-text').value;
    var cage = document.querySelector('#contact-age').value;
    var cnumber = document.querySelector('#contact-phone').value;


    db.collection("contact").add({
        Name: cname,
        Email: cemail,
        Age: cage,
        Number: cnumber,
        Message: cmessage
      })

      .then(function (docRef) { //success response
        //alert("info added");
        console.log("Document written with ID: ", docRef.id);
        //update the products view
        getMessage();
      })

      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  function clearMessage() {
    firebase.database().ref("contact").remove();
  }

  function getMessage() {

    var clear = document.querySelector('#contact-clear-but');

    clear.style.opacity = 0;


    var reveal = document.querySelector('#contact-reveal');

    db.collection("contact").get().then((querySnapshot) => {

      reveal.innerHTML = "";
      //for each = loop. For each documentwe will repeat this process
      // += means to keep whats there and add extra content onto it. Concat is adding the + to add more onto the string

      querySnapshot.forEach((doc) => {

        reveal.innerHTML += ("Name: " + doc.data().Name + "<br>" +
          "Email: " + doc.data().Email + "<br>" + "Age: " + doc.data().Age + "<br>" +
          "Number: " + doc.data().Number + "<br>" + "Message: " + doc.data().Message + "<br><br><br>");
      });
    });
  }

  // getMessage();

  function lastMessage() {

    var reveal = document.querySelector('#contact-reveal');
    var cname = document.querySelector('#contact-name').value;
    var cemail = document.querySelector('#contact-email').value;
    var cmessage = document.querySelector('#contact-text').value;
    var cage = document.querySelector('#contact-age').value;
    var cnumber = document.querySelector('#phone').value;

    if (cname == "") {
      reveal.innerHTML = "Please enter a name.";
    } else if (cemail == "") {
      reveal.innerHTML = "Please enter an email.";
    } else if (cmessage == "") {
      reveal.innerHTML = "Please enter a message.";
    } else if (cage == "") {
      reveal.innerHTML = "Please enter a number.";
    } else if (cnumber == "") {
      reveal.innerHTML = "Please enter a phone number.";
    } else {
    reveal.innerHTML = "Name: " + cname + 
    "<br>" + "Email: " + cemail + 
    "<br>" + "Age: " + cage +
    "<br>" + "Number: " + cnumber +
    "<br>" + "Message: " + cmessage + 
    "<br><br>";
    }

  }