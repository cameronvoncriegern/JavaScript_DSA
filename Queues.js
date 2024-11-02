/*
------------------------------------------------------------------------------
-------------     Data Structures & Algorithms in JavaScript      ------------
-------------                Stacks and Queues                    ------------
 -----------------------------------------------------------------------------

More information on Queues can be found here:
  https://www.w3schools.com/dsa/dsa_data_queues.php
  https://en.wikipedia.org/wiki/Queue_(abstract_data_type)

---------------------------------------------------------------------------------
Uncomment testing function for the data structure you would like to test below  */
/*------------------------------------------------------------------------------*/

//testMyQueue();

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
