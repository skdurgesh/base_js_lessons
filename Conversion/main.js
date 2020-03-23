//"use strict";
// Conversion
// Number


let numVal = -1;
console.log(numVal);

// Number to String
let strValue = String(numVal);
console.log(typeof(strValue));
console.log(strValue);

// Number to Boolean
let boolVal = Boolean(numVal);
console.log(boolVal);
//console.log(typeof(boolVal));

// Boolean
let boolVal2 = true; //

// Boolean to Number
let numVal2 = Number(boolVal2);
console.log(numVal2);

// Boolean to String
let strValue2 = String(boolVal2);
console.log(strValue2);

// String
let strValue3 = 'true';    // '11', "Durgesh Singh"

// String to Number
let numVal3 = Number(Boolean(strValue3));
console.log(numVal3);   // NaN when variable value is String character

// String to Boolean
let boolVal3 = Boolean(strValue3);
console.log(boolVal3);

// undefined to String and Number
let numVal4 = undefined;
let strValue4 = Number(numVal4); // NaN
let strValue5 = String(numVal4); // undefined
console.log(strValue4);
console.log(strValue5);

let numVal5 = null;
let strValue6 = String(numVal5);
console.log(strValue6);     // Null

let numVal6 = Number(numVal5);  
console.log(numVal6);       // 0

let boolVal6 = Boolean(numVal5);
console.log(boolVal6);      // False

