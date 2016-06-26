var output = document.querySelector('#output');

var numBtn = document.querySelector('#oneBtn');
oneBtn.addEventListener('click', function() {
    // var numOutput = output;
    output.value += 1;
    // console.log(output.value, typeof(output.value));
});
var numBtn = document.querySelector('#twoBtn');
twoBtn.addEventListener('click', function() {
    // var numOutput = document.querySelector('#output');
    output.value += 2;
});
var numBtn = document.querySelector('#threeBtn');
threeBtn.addEventListener('click', function() {
    // var numOutput = document.querySelector('#output');
    output.value += 3;
});
var numBtn = document.querySelector('#fourBtn');
fourBtn.addEventListener('click', function() {
    // var numOutput = document.querySelector('#output');
    output.value += 4;
});
var numBtn = document.querySelector('#fiveBtn');
fiveBtn.addEventListener('click', function() {
    // var numOutput = document.querySelector('#output');
    output.value += 5;
});
var numBtn = document.querySelector('#sixBtn');
sixBtn.addEventListener('click', function() {
    var numOutput = document.querySelector('#output');
    // output.value = numOutput;
    output.value += 6;
});
var numBtn = document.querySelector('#sevenBtn');
sevenBtn.addEventListener('click', function() {
    // var numOutput = document.querySelector('#output');
    output.value += 7;
});
var numBtn = document.querySelector('#eightBtn');
eightBtn.addEventListener('click', function() {
    // var numOutput = document.querySelector('#output');
    output.value += 8;
});
var numBtn = document.querySelector('#nineBtn');
nineBtn.addEventListener('click', function() {
    // var numOutput = document.querySelector('#output');
    output.value += 9;
});
var numBtn = document.querySelector('#zeroBtn');
zeroBtn.addEventListener('click', function() {
    // var numOutput = document.querySelector('#output');
    output.value += 0;
});

/*operator buttons - - - - - - - - - - */
var operatorBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function() {
    var operatorOutput = document.querySelector('#output');
    output.value += '+';
});
var operatorBtn = document.querySelector('#subtractBtn');
subtractBtn.addEventListener('click', function() {
    var operatorOutput = document.querySelector('#output');
    output.value += '-';
});
var operatorBtn = document.querySelector('#multiplyBtn');
multiplyBtn.addEventListener('click', function() {
    var operatorOutput = document.querySelector('#output');
    output.value += '*';
});
var operatorBtn = document.querySelector('#divideBtn');
divideBtn.addEventListener('click', function() {
    var operatorOutput = document.querySelector('#output');
    output.value += '/';
});
var operatorBtn = document.querySelector('#decimalBtn');
decimalBtn.addEventListener('click', function() {
    var operatorOutput = document.querySelector('#output');
    output.value += '.';
});
var operatorBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', function() {
    var operatorOutput = document.querySelector('#output');
    output.value = '';
});

//get the equals button to initiate math process
var equalsBtn = document.querySelector('#equalsBtn');
equalsBtn.addEventListener('click', function(evt) {


    var eqnString = output.value;
    // console.log(eqnString);
    var input1 = [];
    var input2 = [];
    var breakPnt;
    var breakOpr;
    var stringNumBr;

    if (eqnString.includes('+')) {
      breakPnt = eqnString.indexOf('+');
      breakOpr = '+';
      stringNumBr = breakPnt;
      input1 = eqnString.substring(0, breakPnt);
      input2 = eqnString.substring((breakPnt + 1), eqnString.length);

      //add the two numbers together
      var sum = Number(input1) + Number(input2);
      console.log(sum);
      output.innerText = sum;
    }

    else if (eqnString.includes('-')) {
      breakPnt = eqnString.indexOf('-');
      breakOpr = '-';
      stringNumBr = breakPnt;
        //since breakPnt is indexed, no need to subtract 1 from it...
      input1 = eqnString.substring(0, breakPnt);
          //need to add 1 to breakPnt so as not to grab operator in input2
      input2 = eqnString.substring((breakPnt + 1), eqnString.length);

      var subtract = Number(input1) - Number(input2);
      console.log(subtract);
      output.innerText = subtract;
    }

    else if (eqnString.includes('*')) {
      breakPnt = eqnString.indexOf('*');
      breakOpr = '*';
      input1 = eqnString.substring(0, breakPnt);
      input2 = eqnString.substring((breakPnt + 1), eqnString.length);

      var product = Number(input1) * Number(input2);
      console.log(product);
      output.innerText = product;
    }

    else if (eqnString.includes('/')) {
      breakPnt = eqnString.indexOf('/');
      breakOpr = '/';
      input1 = eqnString.substring(0, breakPnt);
      input2 = eqnString.substring((breakPnt + 1), eqnString.length);

      var quotient = Number(input1) / Number(input2);
      console.log(quotient);
      output.innerText = quotient;
    }


//     eqnValue.forEach(function (input1, breakOpr, input2) {
//       console.log(input1, breakOpr, input2);
// });






    // for (i = 0; i < eqnArray.length; i++) {
    //     // - find when i = operator (store in var)
    //     if (i = ('+' || '-' || '*' || '/')){
    //         console.log(breakPnt.defaultValue + " : breakPnt");
    //     }
    //     else {
    //         var msgError = "Error!";
    //         output.innerText = msgError;
        // }
        //     - log length of string before operator
        //     -log length of string after operator
        //     - take both strings and operate with operator's value

        // var outputArray = output.value;
        // var userOperator = outputArray[1];
        // var input1 = outputArray[0];
        // var input2 = outputArray[2];
        //
        // if (outputArray[1] === '+') {
        //     var sum = Number(input1) + Number(input2);
        //     output.innerText = sum;
        // } else if (outputArray[1] === '-') {
        //     var difference = Number(input1) - Number(input2);
        //     output.innerText = difference;
        // } else if (outputArray[1] === '*') {
        //     var product = Number(input1) * Number(input2);
        //     output.innerText = product;
        // } else if (outputArray[1] === '/') {
        //     var quotient = Number(input1) / Number(input2);
        //     output.innerText = quotient;
        // }

});
