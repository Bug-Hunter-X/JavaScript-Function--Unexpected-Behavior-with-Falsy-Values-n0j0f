function foo(a, b) {
  if (a == null || b == null || a === 0 || b === 0 || a === false || b === false || a === "" || b === "") {
    return 0; // Handle null and other falsy values
  }
  return a + b; // Standard addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(10, 20));  // Output: 30
console.log(foo(0, 5));    // Output: 0
console.log(foo(10, false)); // Output: 0
console.log(foo(10, ""));  // Output: 0