// ==================== FUNCTION DEFINITION ====================

/**

* Analyzes any JavaScript value and returns
* detailed information about its type and
* common JavaScript type conversions.
*
* @param {*} value - Any JavaScript value
* @returns {Object} Analysis result object
  */
  function typeAnalyser(value) {
  return {
  input: value,
  typeofResult: typeof value,
  isArray: Array.isArray(value),
  isNull: value === null,
  toNumber: Number(value),
  toBoolean: Boolean(value),
  toString: String(value)
  };
  }

// ==================== MANDATED TEST CASES ====================

console.log("--- Test 1: Number ---");
console.log(typeAnalyser(42));

console.log("\n--- Test 2: String ---");
console.log(typeAnalyser("hello"));

console.log("\n--- Test 3: Null ---");
console.log(typeAnalyser(null));

console.log("\n--- Test 4: Array ---");
console.log(typeAnalyser([]));

console.log("\n--- Test 5: Undefined ---");
console.log(typeAnalyser(undefined));

console.log("\n--- Test 6: Boolean ---");
console.log(typeAnalyser(true));

console.log("\n--- Test 7: Falsy Zero ---");
console.log(typeAnalyser(0));

console.log("\n--- Test 8: Empty String ---");
console.log(typeAnalyser(""));
