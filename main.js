// grab the button once pushed
var equals = document.querySelector('#equals');
equals.addEventListener('click', function(evt) {
  console.log(evt);
});

var addBtn = document.querySelector('#subtract');
var subtract = document.querySelector('#subtract');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');

var twoBtn = document.querySelector('#twoBtn');
var threeBtn = document.querySelector('#threeBtn');
var fourBtn = document.querySelector('#fourBtn');
var fiveBtn = document.querySelector('#fiveBtn');
var sixBtn = document.querySelector('#sixBtn');
var sevenBtn = document.querySelector('#sevenBtn');
var eightBtn = document.querySelector('#eightBtn');
var nineBtn = document.querySelector('#nineBtn');
var zeroBtn = document.querySelector('#zeroBtn');


var oneBtn = document.querySelector('#oneBtn');
oneBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 1;
});
var twoBtn = document.querySelector('#twoBtn');
twoBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 2;
});
var threeBtn = document.querySelector('#threeBtn');
threeBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 3;
});
var fourBtn = document.querySelector('#fourBtn');
fourBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 4;
});
var fiveBtn = document.querySelector('#fiveBtn');
fiveBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 5;
});
var sixBtn = document.querySelector('#sixBtn');
sixBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 6;
});
var sevenBtn = document.querySelector('#sevenBtn');
sevenBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 7;
});
var eightBtn = document.querySelector('#eightBtn');
eightBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 8;
});
var nineBtn = document.querySelector('#nineBtn');
nineBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 9;
});
var zeroBtn = document.querySelector('#zeroBtn');
zeroBtn.addEventListener('click', function() {
  var numOutput = document.querySelector('#output');
  numOutput.value += 0;
});


var addBtn= document.querySelector('#add');
var subtractBtn = document.querySelector('#subtract');
var multiplyBtn = document.querySelector('#multiply');
var divideBtn = document.querySelector('#divide');

var addBtn = document.querySelector('#addBtn');
  addBtn.addEventListener('click', function (){
  var addOutput = document.querySelector('#output');
  addOutput.value += '+';
});
var subtractBtn = document.querySelector('#subtractBtn');
  subtractBtn.addEventListener('click', function (){
  var subtractOutput = document.querySelector('#output');
  subtractOutput.value += '-';
});
var multiplyBtn = document.querySelector('#multiplyBtn');
  multiplyBtn.addEventListener('click', function (){
  var multiplyOutput = document.querySelector('#output');
  multiplyOutput.value += '*';
});
var divideBtn = document.querySelector('#divideBtn');
  divideBtn.addEventListener('click', function (){
  var divideOutput = document.querySelector('#output');
  divideOutput.value += '/';
});


// Trying to loop the array for the numbers and their onclicks...

// var secondValue = document.getElementsByClassName('numBtn');
// secondValue.addEventListener('click', function(evt) {
//     for (i= 0; i<9; i++) {
//       console.log(evt);
//       console.log(secondValue[i].value);
//     }
// });


// zeroBtn.onclick = function(e) {
//   var secondValue = document.querySelector('#zeroBtn').value;
//   document.querySelector('#output2').innerText = secondValue;
//   console.log(e);
// };

// addBtn.onclick = function(e) {
//   var operatorValue = document.querySelector('#add').defaultValue;
//   document.querySelector('#oputOperator').innerText = operatorValue;
//   console.log(e);
// };
