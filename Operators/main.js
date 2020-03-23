let numVal1 = 2;
let numVal2 = 3;
let strVal3 = '10';

let result = numVal1 + strVal3 + numVal2;
console.log(result);        //101020

result = numVal1 + numVal2 + strVal3;
console.log(result);       //3010  

result = strVal3 + (numVal1 + numVal2);
console.log(result);      //1030

let numVal3 = 5;
result = numVal1 * numVal2 + numVal3;
console.log(result); // 11

result = numVal1 + numVal2 * numVal3;
console.log(result); // 17

result = (numVal1 + numVal2) * numVal3;
console.log(result); // 25

// Reminder Modular Operator
let numVal4 = 10;
result = numVal4 % 2;
console.log(result);

let intString = numVal4.toString();         // "10",    toString() another method to convert any Number, Boolean, null to String...
console.log(intString);


let numVal5 = 2;
result = Math.pow(numVal5, 2);
console.log(result);

result = numVal5 ** 3;  // Exponentiation
console.log(result);

let firstName = 'Durgesh';
let lastName = 'Singh';

result = firstName + " " + lastName;
console.log(result);

// String Interpolation
result = `${firstName} ${lastName}`;    // Immutable String
console.log(result);

var string = "string";
var number = 32;
var boolean = true;
console.log(string.concat(number, boolean));

/* var a = String.raw`a\\b`;      // a\\b, you can use String.raw to get backslashes to be in the string without modification.
console.log(a); */

function reverseString(str){
    return str.split('').reverse().join('');
    //console.log("function is working.");
}
console.log(reverseString('string'));

