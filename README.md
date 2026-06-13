# JavaScript Fundamentals Assignment

## A1: What is the difference between var, let, and const in JavaScript?

### Scope

* `var` is function-scoped. If declared outside a function, it becomes globally accessible and ignores block scopes like `if` and `for`.
* `let` and `const` are block-scoped, meaning they only exist inside the block `{}` where they are declared.

### Hoisting

All three variables are hoisted.

```javascript
console.log(a); // undefined
var a = 10;
```

`var` is hoisted and initialized with `undefined`.

```javascript
console.log(b); // ReferenceError
let b = 20;
```

`let` and `const` are hoisted but not initialized.

### Temporal Dead Zone (TDZ)

The TDZ is the period between entering a scope and the variable declaration line.

```javascript
console.log(name); // ReferenceError
let name = "Ali";
```

Both `let` and `const` have a TDZ.

### Re-declaration and Re-assignment

| Variable | Re-declare | Re-assign |
| -------- | ---------- | --------- |
| var      | Yes        | Yes       |
| let      | No         | Yes       |
| const    | No         | No        |

### Which should be used in modern JavaScript?

Use `const` by default because it prevents accidental reassignment. Use `let` only when a value must change. Avoid `var` because of its confusing scope behavior.

---

## A2: What is the V8 Engine? What does it mean that JavaScript is single-threaded?

### What is V8?

V8 is Google's JavaScript engine written in C++. It executes JavaScript code in:

* Google Chrome
* Node.js

### What is JIT Compilation?

JIT (Just-In-Time) compilation converts JavaScript into machine code while the program is running. This makes execution faster than pure interpretation.

### What does single-threaded mean?

JavaScript has one Call Stack and executes one task at a time.

### How does JavaScript handle asynchronous tasks?

Operations such as `setTimeout()`, `fetch()`, and API calls are sent to the environment (Web APIs in browsers or libuv in Node.js).

When completed:

1. Callback enters the Callback Queue.
2. Event Loop checks the Call Stack.
3. If the stack is empty, the callback is pushed to the stack and executed.

### Important Components

* Call Stack
* Web APIs
* Callback Queue
* Event Loop

### Is Node.js single-threaded?

JavaScript execution in Node.js is single-threaded, but Node uses the multi-threaded libuv library for I/O operations.

---

## A3: Explain the 8 JavaScript Data Types. What is type coercion?

### JavaScript Data Types

#### Primitive Types

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

#### Non-Primitive Type

8. Object

Arrays and functions are special types of objects.

### The typeof null Bug

```javascript
typeof null; // "object"
```

This is a historical bug from JavaScript's first version in 1995 and remains for backward compatibility.

### Implicit Coercion

JavaScript automatically converts types.

```javascript
"10" + 5; // "105"
```

```javascript
"10" - 5; // 5
```

### Explicit Coercion

```javascript
Number("42"); // 42
```

```javascript
String(true); // "true"
```

```javascript
Boolean(0); // false
```

### Why == is dangerous

```javascript
5 == "5"; // true
```

`==` performs type conversion before comparison.

### Why === is safer

```javascript
5 === "5"; // false
```

`===` compares both value and type.

---

## A4: Difference between Primitive and Non-Primitive Data Types

### Primitive Types

* Number
* String
* Boolean
* Undefined
* Null
* Symbol
* BigInt

Primitives are stored by value.

### Non-Primitive Types

* Objects
* Arrays
* Functions

These are stored by reference.

### Memory Storage

* Primitive values are stored on the Stack.
* Reference values are stored in the Heap.
* Variables store references (addresses) to Heap objects.

### Copying a Primitive

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

A copy of the value is created.

### Copying a Reference Type

```javascript
const obj1 = { name: "Ali" };
const obj2 = obj1;

obj2.name = "Sara";

console.log(obj1.name);
```

Output:

```javascript
Sara
```

Both variables reference the same object.

### Mutation Example

```javascript
const original = {
  name: "Ali"
};

const copy = original;

copy.name = "Sara";

console.log(original.name);
```

Output:

```javascript
Sara
```

The original object changes because both variables point to the same memory location.

---

## A5: What is pass by value vs pass by reference? Is JavaScript truly pass by reference?

### Pass by Value

When a primitive value is passed to a function, JavaScript copies the value.

```javascript
function update(num) {
  num = 100;
}

let value = 50;

update(value);

console.log(value);
```

Output:

```javascript
50
```

The original value remains unchanged.

### Objects in Functions

```javascript
function changeUser(user) {
  user.name = "Sara";
}

const user = {
  name: "Ali"
};

changeUser(user);

console.log(user.name);
```

Output:

```javascript
Sara
```

The object changes because both references point to the same object.

### The Important Interview Answer

JavaScript is NOT truly pass-by-reference.

JavaScript passes the reference itself by value.

This is called **Pass-by-Value of the Reference**.

### Proof 1: Reassigning Does Not Affect Original

```javascript
function replace(obj) {
  obj = {
    name: "New User"
  };
}

const person = {
  name: "Ali"
};

replace(person);

console.log(person.name);
```

Output:

```javascript
Ali
```

The original object is unchanged.

### Proof 2: Mutating Properties Does Affect Original

```javascript
function update(obj) {
  obj.name = "Sara";
}

const person = {
  name: "Ali"
};

update(person);

console.log(person.name);
```

Output:

```javascript
Sara
```

Property mutation affects the original object.

---

## A6: What is a function in JavaScript?

### Definition

A function is a reusable block of code designed to perform a specific task. Functions help reduce repetition and make code easier to maintain.

### Function Declaration Syntax

```javascript
function greet(name) {
  return "Hello " + name;
}
```

### Parameters and Arguments

Parameter:

```javascript
function greet(name)
```

`name` is the parameter.

Argument:

```javascript
greet("Ali");
```

`"Ali"` is the argument.

### Hoisting

Function declarations are fully hoisted.

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

This works successfully.

### Return Values

```javascript
function add(a, b) {
  return a + b;
}
```

The function returns the result.

If no return statement is written:

```javascript
function test() {
}
```

Output:

```javascript
undefined
```

### Real-World Example: Age Validation

```javascript
function validateAge(age) {
  if (age >= 18) {
    return "Eligible";
  }

  return "Not Eligible";
}

console.log(validateAge(20));
console.log(validateAge(15));
```

Output:

```javascript
Eligible
Not Eligible
```

### Extra Interview Fact

Functions are objects in JavaScript.

```javascript
typeof function() {};
```

Output:

```javascript
"function"
```

Functions can also have properties such as:

* `.name`
* `.length`

They are special objects that can be executed.

# Explanation of approach  written (SECTION C)


# Comprehensive State Mutability & Data Validation System

A robust JavaScript system demonstrating advanced functional programming concepts, immutable state management, defensive data validation, and non-destructive array transformations.

---

## 🚀 Architectural Core Philosophy

The fundamental design pillar of this codebase is **predictability and safety**. In JavaScript, primitive types are passed by value, whereas objects and arrays are passed by reference. Without careful handling, mutating object references creates unexpected side-effects across an application. 

This repository implements defensive programming to ensure:
1. **Immutability:** Original data structures are never altered in place.
2. **Pure Functions:** Functions yield deterministic outputs based strictly on inputs without generating side-effects.
3. **Fail-Safe Processing:** Inputs are sanitized, coerced safely, and protected by guard clauses before execution.

---

## 🛠️ Module Breakdown & Explanations

### 1. Multi-Tab Isolation & Cart Management (`c1.js`)

This file addresses data leakage across isolated states (e.g., simulating multiple browser tabs accessing the same shopping cart) and highlights the pitfalls of shared memory references.

#### The Problem
Using shallow assignments like `var cartB = cartA;` only replicates the stack pointer reference. Both variables point to the exact same heap memory allocation, causing mutations in "Tab 2" to bleed instantly into "Tab 1". Furthermore, standard in-place modifications (`cart.total = ...`) ruin structural immutability.

#### The Solutions
* **Deep Cloning via `structuredClone()`:** To completely decouple the data structures, `structuredClone(cartA)` is used to spawn a brand new, nested clone detached entirely from the source reference.
* **Pure Mapping Spread Operators (`...`):** Functions like `applyPromo` and `addItem` return brand new object shells. Instead of calling mutating array prototypes like `.push()`, array spreading (`[...cart.items, item]`) is utilized to safely project state forward.

---

### 2. Form Input Guard Clause Validation (`c2.js`)

This module demonstrates a defensive approach to handling messy user registration payloads before they touch database persistence layers.

#### Key Patterns Implemented:
* **Fallback Structural Guard:** Instantly checks if data is present and structured as an object (`!data || typeof data !== 'object'`) to eliminate runtime crashes like `Cannot read property of undefined`.
* **Dynamic Type Coercion:** Explicitly forces string numbers (e.g., `'25'`) into true numeric data types via `Number(data.age)`, validating the results against `isNaN()` blocks to catch un-coercible junk strings like `'17abc'`.
* **Nullish Coalescing (`??`):** Avoids traditional OR (`||`) type-coercion pitfalls by defaulting empty roles cleanly to `'user'` only if the property is explicitly `null` or `undefined`.
* **Reference Decoupling:** Returns a brand new, sanitized object mappings structure featuring string mutations like `.trim()` rather than mutating the parameter object.

---

### 3. Functional Student Grade Transformer (`c3.js`)

This file contains an analytic reporting workflow that ingests student rosters, normalizes score variations, assigns grades, and aggregates global class metrics.

#### Processing Workflow:
1. **`getAverage()`**: A resilient numeric processing engine. It bypasses `null` data fields entirely, coerces valid string numbers, and cleanly bypasses division-by-zero bounds (returning `0` if a student has no recorded scores). A deterministic decimal string is enforced via `.toFixed(1)` and converted back into a `Number`.
2. **`generateReport()`**: Utilizes the immutable `.map()` array prototype method. Map automatically provisions a brand new array allocation containing structural student snapshots, calculating passing criteria strictly based on both a numeric score threshold and a boolean attendance flag.
3. **`getSummary()`**: Parses processed records in a single performance loop (`.forEach()`) to simultaneously identify the top-performing scholar and aggregate cumulative averages securely.

---

## 📋 Technical Verification Summary

The scripts run automated assertions in their global scope environments to verify that incoming core collections remain structurally untouched.

### Test Matrix Outputs

#### Module 1: Cart Isolation Check
* **Tab 1 Item Count Protection:** Stays isolated at `1`
* **Tab 2 Isolated Item Count:** Increments correctly to `2`
* **Original Cart Modification Guard:** Preserves base object properties explicitly

#### Module 2: Validation Sandbox
* **Valid Profiles:** Return structured validation objects (`{ valid: true, user: {...} }`).
* **Multi-Failure Configurations:** Collect errors into readable array lists without crashing the execution loop.

#### Module 3: Analytical Grade Matrix
* Handles strings, empty sets, and null values smoothly.
* Confirms with an absolute equality verification statement that the baseline source array remains 100% structurally intact.