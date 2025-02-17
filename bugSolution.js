function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    return 'Invalid input types'; //Handle errors
  }
}

console.log(foo(1, 1)); // Output: 2
console.log(foo(1, '1')); // Output: Invalid input types