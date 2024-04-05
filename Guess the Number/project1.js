let ran = Math.floor(Math.random() * 100)
var output = document.getElementById('output');
var score = document.getElementById('score');

var cnt = 0;
var button = document.getElementById('ch');
var countDisplay = document.getElementById('cnt');
button.addEventListener("click", function () {
  cnt = cnt + 1;
})


function check() {
  var num = document.getElementById('num').value;
  if (ran < num) {
    output.innerHTML = "You guessed too high";
  }
  else if (ran > num) {
    output.innerHTML = "You guessed too low";
  }
  else if (ran < 0) {
    output.innerHTML = "Number should be positive";
  }
  else if (isNaN(ran)) {
    output.innerHTML = "Please Enter a Number";
  }
  else if (ran == num) {

    output.innerHTML = "You Guessed Right! It was " + ran;
    document.getElementById('output').style.color = "green";
    countDisplay.innerHTML = "The score is " + [100 - (cnt * 2)] + " out of 100";
  }
  else {
    output.innerHTML = "Please Enter a Number";
  }
}

function load() {
  location.reload();
}

