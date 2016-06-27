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


var operatorBtn = document.querySelector('#plusMinusBtn');
plusMinusBtn.addEventListener('click', function() {

    if (breakPnt === undefined) {
        output.value = output.value * -1;
    }
    else if (breakPnt !== undefined){
        negativePnt = eqnString.substring((breakPnt + 1), eqnString.length);
        input2 = negativePnt * -1;
        console.log(input2 + " input2");
    }
});

var eqnString = output.value;
var input1 = [];
var input2 = [];
var breakPnt;
var breakOpr;
var stringNumBr;
var negativePnt;

//get the equals button to initiate math process
var equalsBtn = document.querySelector('#equalsBtn');
equalsBtn.addEventListener('click', function(evt) {

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
    } else if (eqnString.includes('-')) {
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
    } else if (eqnString.includes('*')) {
        breakPnt = eqnString.indexOf('*');
        breakOpr = '*';
        input1 = eqnString.substring(0, breakPnt);
        input2 = eqnString.substring((breakPnt + 1), eqnString.length);

        var product = Number(input1) * Number(input2);
        console.log(product);
        output.innerText = product;
    } else if (eqnString.includes('/')) {
        breakPnt = eqnString.indexOf('/');
        breakOpr = '/';
        input1 = eqnString.substring(0, breakPnt);
        input2 = eqnString.substring((breakPnt + 1), eqnString.length);

        var quotient = Number(input1) / Number(input2);
        console.log(quotient);
        output.innerText = quotient;
    }

});
