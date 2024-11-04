/* --------------------------------------------------------------------------------- */
/*                                   STACK TESTING                                  */
/* --------------------------------------------------------------------------------- */

/*                 !!  Press *RUN* to test or type node tests/stackTest.js !!        */

/* --------------------------------------------------------------------------------- */

import { myStack } from "../dataStructures/Stacks";

function StackTesting() {
    let testStack = new myStack(3);
  
    console.log("=== Testing Push ===");
    console.assert(
      testStack.Push(1) === true,
      "❌ Test Case 1 Failed: Should be able to push 1"
    );
    console.assert(
      testStack.Push(2) === true,
      "❌ Test Case 2 Failed: Should be able to push 2"
    );
    console.assert(
      testStack.Push(3) === true,
      "❌ Test Case 3 Failed: Should be able to push 3"
    );
    console.assert(
      testStack.Push(4) === false,
      "❌ Test Case 4 Failed: Should not be able to push when full"
    );

    console.log("\n=== Current State of Stack ===");
    console.log(testStack);
  
    console.log("\n=== Testing Peek ===");
    console.assert(
      testStack.Peek() === 3,
      "❌ Test Case 5 Failed: Peek should return 3"
    );
  
    console.log("\n=== Testing Is Empty ===");
    console.assert(
      testStack.IsEmpty() === false,
      "❌ Test Case 6 Failed: Stack should not be empty"
    );
  
    console.log("\n=== Testing Pop ===");
    console.assert(
      testStack.Pop() === 3,
      "❌ Test Case 7 Failed: Pop should return 3"
    );
    console.assert(
      testStack.Pop() === 2,
      "❌ Test Case 8 Failed: Pop should return 2"
    );
    console.assert(
      testStack.Pop() === 1,
      "❌ Test Case 9 Failed: Pop should return 1"
    );
    console.assert(
      testStack.Pop() === undefined,
      "❌ Test Case 10 Failed: Pop from empty stack should return undefined"
    );
  
    console.log("\n=== Testing Is Empty (after popping all items) ===");
    console.assert(
      testStack.IsEmpty() === true,
      "❌ Test Case 11 Failed: Stack should be empty after popping all items"
    );
  
    console.log("\n=== All Tests Completed ===");
}
  
StackTesting();
