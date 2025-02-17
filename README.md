# Type Coercion Bug in JavaScript

This repository demonstrates a common type coercion issue in JavaScript.  The `foo` function attempts to add a number and a string, leading to unexpected string concatenation instead of numerical addition.

## Bug Description

JavaScript's loose typing can lead to unexpected behavior when performing operations on variables of different types. In this example, the number `1` is implicitly coerced to a string before concatenation with the string `'1'`, resulting in the output `'11'` instead of the expected numerical sum `2`.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript interpreter (e.g., Node.js).
4. Observe the unexpected output.