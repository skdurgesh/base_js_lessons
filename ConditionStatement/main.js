let numVal1 = 10;
let numVal2 = "10";
let message;

if (numVal1 === numVal2) {       // using == woundn't check for type..
    // true Body
    message = "Both the value are the same.";
}
else{
    // false Body
    message = "Both the value are not same.";
}
console.log(message);

// "Ternary Operator" 
// When to use: If you have single line statement then use ternary operator otherwise if and else statement condition statement.
message = 
    (numVal1 === numVal2)
        ? "Both the value are the same." 
        : "Both the value are not same."; 
console.log(message);

