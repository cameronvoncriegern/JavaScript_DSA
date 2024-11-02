/*
------------------------------------------------------------------------------
-------------     Data Structures & Algorithms in JavaScript      ------------
-------------                Stacks and Queues                    ------------
 -----------------------------------------------------------------------------

More information on the strucutres can be found here:
Stack Data Structure:
  https://www.w3schools.com/dsa/dsa_data_stacks.php
  https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

Queue Data Strucutre:
  https://www.w3schools.com/dsa/dsa_data_queues.php
  https://en.wikipedia.org/wiki/Queue_(abstract_data_type)

---------------------------------------------------------------------------------
Uncomment testing function for the data structure you would like to test below  */
/*------------------------------------------------------------------------------*/

//testMyQueue();
//StackTesting();

/*------------------------------------------------------------------------------*/

/* ----------------------------------- */
/* ---------    Stacks  ------------ */
/* ----------------------------------- */

class myStack {
  /*
  to create a fixed size array, use new Array(size).. however, you can still push to the end.
  would need to have a restriction to not exceed var size.
*/

  //functions will include pop, push, peek, isEmpty(bool), isFull(with limited size arrays)

  constructor(size) {
    this.collection = new Array(size);
    this.count = 0;
    this.maxSize = size;
  }

  Push(value) {
    //return true if added, false if not.
    // exceed size restriction
    if (this.count >= this.maxSize) {
      console.log(
        `stack overflow! can not add more than ${this.maxSize} items!`
      );
      return false;
    } else {
      //add element to the BACK of the stack
      this.collection[this.count] = value;
      this.count++;
      console.log(`item "${value}" added`);

      return true;
    }
  }

  Pop() {
    //ensure list is not empty, then delete
    if (this.IsEmpty()) {
      console.log("Stack is empty, can not remove!");
      return undefined;
    }
    // delete the last element of the list and return its value
    let returnValue = this.collection[this.count - 1];
    delete this.collection[this.count];
    this.count--;
    return returnValue;
  }

  Peek() {
    if (this.IsEmpty()) {
      console.log("can not peek into empty stack!");
      return undefined;
    }
    //return the back-most element of the stack
    return this.collection[this.count - 1];
  }

  IsEmpty() {
    // check if count > 0
    if (this.count > 0) {
      return false;
    }
    return true;
  }
}

/* ----------------------------------- */
/*           TESTING STACK              */
/* ----------------------------------- */
function StackTesting() {
  let testStack = new myStack(3);

  console.log("=== Testing Push ===");
  console.assert(
    testStack.Push(1) === true,
    "Test Case 1 Failed: Should be able to push 1"
  );
  console.assert(
    testStack.Push(2) === true,
    "Test Case 2 Failed: Should be able to push 2"
  );
  console.assert(
    testStack.Push(3) === true,
    "Test Case 3 Failed: Should be able to push 3"
  );
  console.assert(
    testStack.Push(4) === false,
    "Test Case 4 Failed: Should not be able to push when full"
  );

  console.log("=== Current State of Stack ===");
  console.log(testStack);

  console.log("=== Testing Peek ===");
  console.assert(
    testStack.Peek() === 3,
    "Test Case 5 Failed: Peek should return 3"
  );

  console.log("=== Testing Is Empty ===");
  console.assert(
    testStack.IsEmpty() === false,
    "Test Case 6 Failed: Stack should not be empty"
  );

  console.log("=== Testing Pop ===");
  console.assert(
    testStack.Pop() === 3,
    "Test Case 7 Failed: Pop should return 3"
  );
  console.assert(
    testStack.Pop() === 2,
    "Test Case 8 Failed: Pop should return 2"
  );
  console.assert(
    testStack.Pop() === 1,
    "Test Case 9 Failed: Pop should return 1"
  );
  console.assert(
    testStack.Pop() === undefined,
    "Test Case 10 Failed: Pop from empty stack should return undefined"
  );

  console.log("=== Testing Is Empty (after popping all items) ===");
  console.assert(
    testStack.IsEmpty() === true,
    "Test Case 11 Failed: Stack should be empty after popping all items"
  );

  console.log("=== All Tests Completed ===");
}

/* ----------------------------------- */
/* ------    QUEUE DATA STRUCTURE ---- */
/* ----------------------------------- */

/**
 * Represents a simple queue data structure.
 * This queue follows the FIFO (First In, First Out) principle,
 * where elements are added to the back and removed from the front.
 *
 * functions:
 * enqueue, dequeue, peek, isEmpty, size
 *
 * @class
 * @example
 * const queue = new myQueue();
 * queue.enqueue(1);
 * const item = queue.dequeue(); // Removes and returns the first item
 */
class myQueue {
  constructor(size) {
    this.collection = new Array(size);
    this.maxSize = size;
    this.count = 0;
  }

  /**
   * adds item to the front of the queue.
   * If there is no space in the queue, it will return false.
   * @param item to be added
   * @returns {boolean} whether added or not
   */
  enqueue(item) {
    if (this.count >= this.maxSize) {
      console.log("exceeded queue maxsize, can not add item");
      return false;
    } else {
      this.collection[this.count] = item;
      this.count++;
      return true;
    }
  }

  /**
   * Removes items from the front of the queue
   * Accomplishes this by shifting all elements 1 to the left (to the front) of the array, effectively removing the first one.
   *
   * @returns {boolean}  whether added or not
   */
  dequeue() {
    if (this.count == 0) {
      console.log("can not dequeue from empty queue");
      return false;
    } else {
      let deletedItem = this.collection[0];
      console.log(`item ${this.collection[0]} removed`);
      this.shift();
      return deletedItem;
    }
  }

  /**
 * Shifts all elements in an array left by 1.
    @returns {*} the first item of the array
*/
  shift() {
    for (let i = 0; i < this.count; i++) {
      this.collection[i] = this.collection[i + 1];
    }
    this.collection[this.count - 1] = undefined;
    this.count--;
  }

  /**
   * returns the first item in the queue, without removing it
   * @returns {*} The item at the front of the queue or undefined if the queue is empty.
   */
  peek() {
    if (this.count == 0) {
      console.log("can not peek into an empty queue");
      return undefined;
    }
    // preference to put else statement here for quick understanding of the code in future
    else {
      return this.collection[0];
    }
  }

  /**
   *  Checks to see if the queue has any items in it, or if it is empty.
   * @returns boolean value whether there are items in the queue or not
   */
  isEmpty() {
    if (this.count > 0) {
      return false;
    }
    return true;
  }
}

/* ---------------------------------- */
/* -- QUEUE DATA STRUCTURE TESTING -- */
/* ---------------------------------- */

function testMyQueue() {
  // Create a queue with a maximum size of 3
  const queue = new myQueue(3);

  console.log("=== Testing Enqueue ===");
  console.assert(queue.enqueue(1) === true, "Test Case 1 Failed");
  console.assert(queue.enqueue(2) === true, "Test Case 2 Failed");
  console.assert(queue.enqueue(3) === true, "Test Case 3 Failed");
  console.assert(queue.enqueue(4) === false, "Test Case 4 Failed"); // Should fail (overflow)

  console.log("=== Current State of Queue ===");
  console.log(queue.collection); // Expect: [1, 2, 3]
  console.log("Count:", queue.count); // Expect: 3

  console.log("=== Testing Dequeue ===");
  console.assert(queue.dequeue() === 1, "Test Case 5 Failed"); // Should return 1
  console.assert(queue.dequeue() === 2, "Test Case 6 Failed"); // Should return 2
  console.assert(queue.dequeue() === 3, "Test Case 7 Failed"); // Should return 3
  console.assert(queue.dequeue() === false, "Test Case 8 Failed"); // Should fail (empty queue)

  console.log("=== Testing Peek ===");
  queue.enqueue(5);
  console.assert(queue.peek() === 5, "Test Case 9 Failed"); // Should return 5

  console.log("=== Testing isEmpty ===");
  console.assert(queue.isEmpty() === false, "Test Case 10 Failed"); // Should return false
  queue.dequeue(); // Remove item
  console.assert(queue.isEmpty() === true, "Test Case 11 Failed"); // Should return true

  console.log("=== All Tests Passed ===");
}
