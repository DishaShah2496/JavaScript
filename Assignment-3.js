var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function checkPasswordMatch() {
    var password = $("#psw").val();
    var confirmPassword = $("#cpsw").val();

    if (password != confirmPassword)
        $("#divCheckPasswordMatch").html("No Match!");
    else
        $("#divCheckPasswordMatch").html("Match.");
      }

$(document).ready(function () {
   $("#psw, #cpsw").keyup(checkPasswordMatch);
});

var fname = document.getElementById('fname');
var psw = document.getElementById('psw');

function store() {
  localStorage.setItem('fname', fname.value);
  localStorage.setItem('psw', psw.value);
}

function check() {

  // stored data from the register-form
  var storedName = localStorage.getItem('fname');
  var storedPw = localStorage.getItem('psw');

  // entered data from the login-form
  var userName = document.getElementById('ufname');
  var userPw = document.getElementById('upsw');

if(userName.value == storedName && userPw.value == storedPw) {
    alert('You are loged in.');
    var userid = document.getElementById("ufname").value;
    document.write("Welcome " + userid);
}else {
    alert('ERROR.');
}
}






// var modal = document.getElementById('id01');
// var modal = document.getElementById('id02');


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     console.log(event.target.id);
//     if (event.target.id === 'id01' || event.target.id === 'id02') {
//         modal.style.display = "none";
//     }
// }

// var modal1 = document.getElementById('id02');
// // var modal = document.getElementById('id02');


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     console.log(event.target.id);
//     if (event.target.id === 'id01' || event.target.id === 'id02') {
//         modal1.style.display = "none";
//     }
