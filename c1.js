// ==================== TASK 1 & 2: BUG ANALYSIS & PREDICTIONS ====================

/*
Junior Developer's Bug Analysis

1. var cartB = cartA;

   BUG:
   This does not create a new cart object.
   It only copies the reference stored in memory.

   Both cartA and cartB point to the exact same object,
   so changes made through one variable immediately
   appear in the other.

2. applyPromo(cart, discount);

   BUG:
   The statement:

   cart.total = cart.total - discount

   directly mutates the original cart object.

   This breaks immutability because the original
   data structure is modified instead of creating
   a new updated copy.

---

Predicted Outputs For Original Buggy Code

cartA.items.length  -> 2
Reason:
The item was pushed using cartB, but both variables
share the same object reference.

cartA.total -> 152500
Reason:
The total was updated through cartB and affected cartA.

originalCart.total -> 450
Reason:
applyPromo directly mutated the original object.
*/

// ==================== TASK 3: FIXED VERSION ====================

const cartA = {
owner: 'Asad',
items: [
{
name: 'Laptop',
price: 150000
}
],
total: 150000
};

// Create a completely independent deep clone
const cartB = structuredClone(cartA);

// Tab 2 safely updates its own copy
cartB.items.push({
name: 'Mouse',
price: 2500
});

cartB.total += 2500;

console.log("--- Task 3: Multi-Tab Isolation Fix ---");

console.log(
"Tab 1 cart items length (Should stay 1):",
cartA.items.length
);

console.log(
"Tab 1 total price value (Should stay 150000):",
cartA.total
);

console.log(
"Tab 2 cart items length (Should show 2):",
cartB.items.length
);

console.log(
"Tab 2 total price value (Should show 152500):",
cartB.total
);

// ==================== PURE FUNCTION FIX ====================

function applyPromo(cart, discount) {
return {
...cart,
total: cart.total - discount,
promoApplied: true
};
}

const originalCart = {
owner: 'Sara',
items: ['Book'],
total: 500
};

const discountedCart = applyPromo(originalCart, 50);

console.log("\n--- Task 3: Pure Promo Function Fix ---");

console.log(
"Original total check (Should remain 500):",
originalCart.total
);

console.log(
"Discounted total check (Should be 450):",
discountedCart.total
);

// ==================== TASK 4: IMMUTABLE addItem FUNCTION ====================

/**

* Returns a brand-new cart object with the item added.
* The original cart remains completely unchanged.
*
* @param {Object} cart
* @param {Object} item
* @returns {Object}
  */
  function addItem(cart, item) {
  return {
  ...cart,
  items: [...cart.items, item],
  total: cart.total + item.price
  };
  }

console.log("\n--- Task 4: Immutable addItem Verification ---");

const testItem = {
name: 'Headphones',
price: 5000
};

const freshCartState = addItem(cartA, testItem);

console.log(
"Original Cart Total (Should stay 150000):",
cartA.total
);

console.log(
"New Cart Total (Should show 155000):",
freshCartState.total
);

console.log(
"Original Cart Items Count Unchanged?:",
cartA.items.length === 1
);
