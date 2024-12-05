# Unhelpful TypeScript Error with Array/String Type Mismatch

This example demonstrates a common TypeScript error scenario where the compiler's error message isn't as clear as it could be for beginners.

A function expects a string argument, but an array is passed instead. The error message could be improved to more explicitly indicate the type mismatch.

## Bug

The `bug.ts` file contains a simple function and a call that results in a TypeScript error.

## Solution

The `bugSolution.ts` file shows how to fix the issue by either ensuring a string is passed or changing the function signature to accept an array.