/**

* Calculates the final payable price after applying
* role-based discounts, purchase-tier discounts,
* membership benefits, and minimum price protection.
*
* @param {number} price - Original product price
* @param {string} userType - Customer role ('admin', 'user', etc.)
* @param {boolean} isMember - Loyalty membership status
* @returns {string} Final price rounded to 2 decimal places
  */
  function calculateDiscount(price, userType, isMember) {

  // ==================== INPUT VALIDATION ====================

  // Price must be a valid positive number
  if (typeof price !== 'number' || isNaN(price) || price <= 0) {
  return 'Invalid price';
  }

  let discountRate = 0;

  // ==================== PRIMARY DISCOUNT RULES ====================

  // Admin users receive a flat 50% discount
  if (userType === 'admin') {
  discountRate = 0.50;
  }

  // Premium Purchase Tier (> 1000)
  else if (price > 1000) {
  discountRate = 0.20;
  }

  // Standard Purchase Tier (> 500)
  else if (price > 500) {
  discountRate = 0.10;
  }

  // Apply primary discount
  let finalPrice = price * (1 - discountRate);

  // ==================== MEMBERSHIP DISCOUNT ====================

  // Additional 5% discount applied after primary discount
  if (isMember === true) {
  finalPrice = finalPrice * 0.95;
  }

  // ==================== MINIMUM PRICE PROTECTION ====================

  // Final price should never drop below 1
  if (finalPrice < 1) {
  finalPrice = 1;
  }

  // Return final price rounded to 2 decimal places
  return finalPrice.toFixed(2);
  }

// ==================== MANDATED TEST CASES ====================

console.log("Test Case 1 (1200, 'user', false) -> Expected: 960.00");
console.log("Result:", calculateDiscount(1200, 'user', false));

console.log("\nTest Case 2 (1200, 'user', true) -> Expected: 912.00");
console.log("Result:", calculateDiscount(1200, 'user', true));

console.log("\nTest Case 3 (600, 'admin', true) -> Expected: 285.00");
console.log("Result:", calculateDiscount(600, 'admin', true));

console.log("\nTest Case 4 (-50, 'user', false) -> Expected: Invalid price");
console.log("Result:", calculateDiscount(-50, 'user', false));

console.log("\nTest Case 5 ('abc', 'user', false) -> Expected: Invalid price");
console.log("Result:", calculateDiscount('abc', 'user', false));
