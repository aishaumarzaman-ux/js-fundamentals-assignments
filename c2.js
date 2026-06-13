/**

* Validates user registration data using guard clauses,
* type checking, sanitization, and business rules.
*
* @param {Object} data - User registration input
* @returns {Object} Validation result object
  */
  function validateUser(data) {

  const errors = [];

  // ==================== INPUT GUARD ====================

  if (!data || typeof data !== 'object') {
  return {
  valid: false,
  errors: ['Invalid input payload structure']
  };
  }

  // ==================== NAME VALIDATION ====================

  if (
  typeof data.name !== 'string' ||
  data.name.trim() === ''
  ) {
  errors.push('Name cannot be empty');
  }

  // ==================== EMAIL VALIDATION ====================

  const cleanedEmail =
  typeof data.email === 'string'
  ? data.email.trim()
  : '';

  if (
  !cleanedEmail.includes('@') ||
  !cleanedEmail.includes('.')
  ) {
  errors.push('Invalid email format');
  }

  // ==================== AGE VALIDATION ====================

  const parsedAge = Number(data.age);

  if (
  typeof data.age === 'undefined' ||
  Number.isNaN(parsedAge) ||
  parsedAge < 13 ||
  parsedAge > 120
  ) {
  errors.push('Age must be a valid number between 13 and 120');
  }

  // ==================== PASSWORD VALIDATION ====================

  if (
  typeof data.password !== 'string' ||
  data.password.length < 8
  ) {
  errors.push(
  'Password must be a string containing a minimum of 8 characters'
  );
  }

  // ==================== ROLE VALIDATION ====================

  const allowedRoles = ['admin', 'editor', 'user'];

  const assignedRole =
  (data.role ?? 'user').toLowerCase();

  if (!allowedRoles.includes(assignedRole)) {
  errors.push(
  "Role must be either 'admin', 'editor', or 'user'"
  );
  }

  // ==================== RETURN ERRORS ====================

  if (errors.length > 0) {
  return {
  valid: false,
  errors
  };
  }

  // ==================== SUCCESS RESPONSE ====================

  return {
  valid: true,
  user: {
  name: data.name.trim(),
  email: cleanedEmail,
  age: parsedAge,
  password: data.password,
  role: assignedRole
  }
  };
  }

// ==================== MANDATED TEST CASES ====================

console.log("--- Test Case 1: Valid Profile Submission ---");

console.log(
validateUser({
name: 'Ali',
email: '[ali@test.com](mailto:ali@test.com)',
age: '25',
password: 'pass1234'
})
);

console.log("\n--- Test Case 2: Multi-Failure Invalid Form ---");

console.log(
validateUser({
name: '',
email: 'notanemail',
age: 10,
password: 'abc'
})
);

console.log("\n--- Test Case 3: Role Validation Check ---");

console.log(
validateUser({
name: 'Sara',
email: '[sara@x.io](mailto:sara@x.io)',
age: 30,
password: 'secure99abc',
role: 'admin'
})
);

console.log("\n--- Test Case 4: Non-Coercible Age String Crash Check ---");

console.log(
validateUser({
name: 'X',
email: '[x@x.com](mailto:x@x.com)',
age: '17abc',
password: 'hello1234'
})
);
