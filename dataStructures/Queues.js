/*
------------------------------------------------------------------------------
-------------     Data Structures & Algorithms in JavaScript      ------------
-------------                   Queues                            ------------
 -----------------------------------------------------------------------------

More information on Queues can be found here:
  https://www.w3schools.com/dsa/dsa_data_queues.php
  https://en.wikipedia.org/wiki/Queue_(abstract_data_type)


 ** To accomplish this data structure with built-in objects,
you can use the Array object, which has the following functions:

push() - Appends new elements to the end of an array, and returns the new length of the array.
shift() - Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

---------------------------------------------------------------------------------

------------------        !!  Press *RUN* to test  !!      ----------------------

/*------------------------------------------------------------------------------*/


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
  console.log("Attempting to add 1 to the queue (expect success):", queue.enqueue(1)); // Should return true
  console.log("Attempting to add 2 to the queue (expect success):", queue.enqueue(2)); // Should return true
  console.log("Attempting to add 3 to the queue (expect success):", queue.enqueue(3)); // Should return true
  console.log("Attempting to add 4 to a full queue (expect failure):", queue.enqueue(4)); // Should return false

  console.log("\n=== Current State of Queue ===");
  console.log("Queue Contents:", queue.collection); // Expected output: [1, 2, 3]
  console.log("Current Count:", queue.count); // Expected output: 3

  console.log("\n=== Testing Dequeue ===");
  console.log("Removing first item (expect 1):", queue.dequeue()); // Should return 1
  console.log("Removing next item (expect 2):", queue.dequeue()); // Should return 2
  console.log("Removing next item (expect 3):", queue.dequeue()); // Should return 3
  console.log("Attempting to remove from empty queue (expect failure):", queue.dequeue()); // Should return false

  console.log("\n=== Testing Peek ===");
  console.log("Peeking into empty queue (expect undefined):", queue.peek()); // Should return undefined
  queue.enqueue(5);
  console.log("Peeking into queue with item 5 (expect 5):", queue.peek()); // Should return 5

  console.log("\n=== Testing isEmpty ===");
  console.log("Checking if queue is empty (expect false):", queue.isEmpty()); // Should return false
  queue.dequeue(); // Remove the item
  console.log("Checking if queue is empty after removing all items (expect true):", queue.isEmpty()); // Should return true

  console.log("\n=== All Tests Completed ===");
}

// Run the tests
testMyQueue();



testMyQueue();