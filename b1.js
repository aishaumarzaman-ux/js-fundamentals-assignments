// ==================== PART 1: PREDICTIONS & EXPLANATIONS ====================

/*
console.log(a);
// Output: undefined
// Reason: 'var' declarations are hoisted and automatically initialized
// with undefined before code execution begins.

console.log(b);
// Output: ReferenceError
// Reason: 'let' is hoisted but remains inside the Temporal Dead Zone (TDZ)
// until the declaration line is reached.

console.log(c);
// Output: ReferenceError
// Reason: 'const' behaves similarly to 'let' regarding hoisting and
// remains inaccessible inside the TDZ.

var a = 10;
let b = 20;
const c = 30;
*/

// ==================== PART 2: RE-DECLARATION PREDICTIONS ====================

/*
var a = 99;
// Allowed because 'var' supports re-declaration within the same scope.

let b = 88;
// SyntaxError: 'let' cannot be re-declared in the same scope.

const c = 77;
// SyntaxError: 'const' cannot be re-declared in the same scope.
*/

// ==================== PART 3: CONST OBJECT MUTATION ====================

/*
const user = { name: 'Asad' };

user.name = 'Ali';
// Allowed because only the object property is changing.
// The variable reference itself remains unchanged.

user = {};
// TypeError: Assignment to constant variable.
// A const variable cannot be assigned a new reference.
*/

// ==================== CORRECTED & WORKING VERSION ====================

// Step 1: Declare variables before accessing them
var a = 10;
let b = 20;
const c = 30;

console.log("Verified Values:", a, b, c);

// Step 2: Re-assign values instead of re-declaring variables
a = 99;
b = 88;

console.log("Updated Values:", a, b, c);

// Step 3: Demonstrate valid mutation of a const object
const user = {
name: "Asad"
};

user.name = "Ali";

console.log("Updated User Object:", user);

