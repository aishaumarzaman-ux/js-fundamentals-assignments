/**

* ==================== 1. addToCart(cart, item) ====================
* Returns a NEW cart array with the item added.
* The original cart remains unchanged.
  */
  const addToCart = (cart, item) => {
  return [...cart, item];
  };

/**

* ==================== 2. updateUserAge(user, newAge) ====================
* Returns a NEW user object with an updated age.
* The original user object is never modified.
  */
  const updateUserAge = (user, newAge) => {
  return {
  ...user,
  age: Number(newAge)
  };
  };

/**

* ==================== 3. incrementScore(scores, playerName) ====================
* Returns a NEW scores object with the selected player's
* score increased by 1.
  */
  const incrementScore = (scores, playerName) => {
  return {
  ...scores,
  [playerName]: (scores[playerName] ?? 0) + 1
  };
  };

/**

* ==================== 4. reverseString(str) ====================
* Returns a reversed version of the string.
* Strings are immutable primitives in JavaScript.
  */
  const reverseString = (str) => {
  return str.split('').reverse().join('');
  };

/**

* ==================== 5. removeItem(arr, index) ====================
* Returns a NEW array with the specified item removed.
* The original array remains unchanged.
  */
  const removeItem = (arr, index) => {
  return arr.filter((_, idx) => idx !== index);
  };

// ==================== IMMUTABILITY PROOF TEST CASES ====================

console.log("--- Test 1: addToCart ---");

const initialCart = ['milk', 'eggs'];
const updatedCart = addToCart(initialCart, 'bread');

console.log("Returned New Array:", updatedCart);
console.log("Original Array Untouched?:", initialCart);

console.log("\n--- Test 2: updateUserAge ---");

const initialUser = {
name: 'Ali',
age: 25
};

const updatedUser = updateUserAge(initialUser, 26);

console.log("Returned New Object:", updatedUser);
console.log("Original Object Age Untouched?:", initialUser.age);

console.log("\n--- Test 3: incrementScore ---");

const initialScores = {
Ali: 5,
Sara: 3
};

const updatedScores = incrementScore(initialScores, 'Ali');

console.log("Returned New Scores:", updatedScores);
console.log("Original Score Untouched?:", initialScores.Ali);

console.log("\n--- Test 4: reverseString ---");

const initialStr = 'hello';
const reversedStr = reverseString(initialStr);

console.log("Returned Reversed String:", reversedStr);
console.log("Original String Untouched?:", initialStr);

console.log("\n--- Test 5: removeItem ---");

const initialArr = [1, 2, 3, 4];
const updatedArr = removeItem(initialArr, 1);

console.log("Returned New Array:", updatedArr);
console.log("Original Array Untouched?:", initialArr);
