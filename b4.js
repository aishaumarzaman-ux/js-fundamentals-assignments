// ==================== BUG 1: CART DUPLICATION BUG ====================

/*
1. What the bug is:
   The spread operator (...) creates only a shallow copy of an object.
   While primitive values are copied, nested arrays and objects remain
   shared through the same reference in memory. As a result, modifying
   cart2.items also modifies cart1.items.

2. Current wrong output:
   Both cart1.items and cart2.items become:
   ['JS Book', 'React Book', 'Node Book']
*/

// --- Fixed Code for Bug 1 ---
const cart1 = {
    items: ['JS Book', 'React Book'],
    total: 150
};

// Fix: Create a completely independent deep copy
const cart2 = structuredClone(cart1);

cart2.items.push('Node Book');

console.log("--- Bug 1 Fix: Cart Duplication ---");
console.log("Cart 1 Items (Should stay 2):", cart1.items);
console.log("Cart 2 Items (Should be 3):", cart2.items);


// ==================== BUG 2: FUNCTION MUTATING ORIGINAL ====================

/*
1. What the bug is:
   Objects are reference types. When an object is passed to a function,
   modifying its properties directly changes the original object because
   both references point to the same memory location.

2. Current wrong output:
   myOrder.total becomes 117 instead of remaining 100.
*/

// --- Fixed Code for Bug 2 ---
function applyTax(order) {

    // Return a new object instead of mutating the original
    return {
        ...order,
        total: order.total * 1.17
    };
}

const myOrder = {
    id: 1,
    total: 100
};

const taxedOrder = applyTax(myOrder);

console.log("\n--- Bug 2 Fix: Safe Function Computations ---");
console.log("Original Order Total (Should stay 100):", myOrder.total);
console.log("Taxed Order Total (Should show 117):", taxedOrder.total);


// ==================== BUG 3: CONFIG RESET FAILURE ====================

/*
1. What the bug is:
   Reassigning a function parameter only changes the local variable inside
   the function scope. It does not update the original object outside the
   function. Additionally, without deep cloning, nested objects may still
   share references and cause accidental mutations.

2. Current wrong output:
   appConfig.theme remains 'light' instead of resetting to 'dark'.
*/

// --- Fixed Code for Bug 3 ---
const defaultConfig = {
    theme: 'dark',
    lang: 'en',
    nested: {
        fontSize: 14
    }
};

function resetConfig(config) {

    // Return a fresh deep clone of the default configuration
    return structuredClone(defaultConfig);
}

let appConfig = {
    theme: 'light',
    lang: 'ur',
    nested: {
        fontSize: 20
    }
};

// Reassign using the returned reset configuration
appConfig = resetConfig(appConfig);

console.log("\n--- Bug 3 Fix: Config System Reset ---");
console.log("App Theme State (Should be 'dark'):", appConfig.theme);
console.log("App Font Size Configuration (Should be 14):", appConfig.nested.fontSize);