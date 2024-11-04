/*
------------------------------------------------------------------------------
-------------     Data Structures & Algorithms in JavaScript      ------------
-------------                  Priority Queues                    ------------
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


/* -------------------------------------------- */
/* ------    PRIORITY QUEUE DATA STRUCTURE ---- */
/* -------------------------------------------- */

/**
 * Creates an item with both a value and a priority
 * @param {*} value The item to be stored in the queue
 * @param {number} priority
 */

class Qelement {
    constructor(value,priority) {
        this.value = value;
        this.priority = priority;
    }
}

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
     * @param {*} item to be added
     * @param {number} priority
     * @returns {boolean} whether added or not
     */
    enqueue(item,priority) {
      if (this.count >= this.maxSize) {
        console.log("exceeded queue maxsize, can not add item");
        return false;
      } else {
        let element = new Qelement(item,priority);
        this.collection[this.count] = element;
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
/* -- PRIORITY QUEUE DATA STRUCTURE TESTING -- */
/* ---------------------------------- */
function testMyPriorityQueue() {
  // Create a new priority queue with a maximum size of 5
  const queue = new myPriorityQueue(5);
  console.log("=== Testing Priority Queue ===");
  console.log("Is the queue empty? (Expected: true):", queue.isEmpty()); // Expected: true

  // Enqueue items with different priorities
  console.log("Enqueue item 1 with priority 2 (Expected: true):", queue.enqueue("Item 1", 2));
  console.log("Enqueue item 2 with priority 1 (Expected: true):", queue.enqueue("Item 2", 1));
  console.log("Enqueue item 3 with priority 3 (Expected: true):", queue.enqueue("Item 3", 3));

  // Peek at the front item
  console.log("Peek at the front item (Expected: Qelement { value: 'Item 2', priority: 1 }):", queue.peek());

  // Check if the queue is empty
  console.log("Is the queue empty now? (Expected: false):", queue.isEmpty()); // Expected: false

  // Check the queue size
  console.log("Queue size (Expected: 3):", queue.count); // Expected: 3

  // Dequeue items and check the output
  console.log("Dequeue (Expected: Qelement { value: 'Item 2', priority: 1 }):", queue.dequeue());
  console.log("Dequeue (Expected: Qelement { value: 'Item 1', priority: 2 }):", queue.dequeue());

  // Peek after some dequeues
  console.log("Peek after dequeues (Expected: Qelement { value: 'Item 3', priority: 3 }):", queue.peek());

  // Attempt to dequeue until queue is empty
  console.log("Dequeue (Expected: Qelement { value: 'Item 3', priority: 3 }):", queue.dequeue());
  console.log("Dequeue on empty queue (Expected: false, 'cannot dequeue from empty queue'): ", queue.dequeue());

  // Attempt to peek on an empty queue
  console.log("Peek on empty queue (Expected: undefined, 'cannot peek into an empty queue'): ", queue.peek());

  // Attempt to enqueue more than the max size
  console.log("Enqueue item 4 with priority 1 (Expected: true):", queue.enqueue("Item 4", 1));
  console.log("Enqueue item 5 with priority 4 (Expected: true):", queue.enqueue("Item 5", 4));
  console.log("Enqueue item 6 with priority 2 (Expected: true):", queue.enqueue("Item 6", 2));
  console.log("Enqueue item 7 with priority 5 (Expected: true):", queue.enqueue("Item 7", 5));
  console.log("Enqueue item 8 with priority 6 (Expected: exceeded queue maxsize, cannot add item):", queue.enqueue("Item 8", 6));

  // Final check on queue size after all operations
  console.log("Final queue size (Expected: 5):", queue.count); // Expected: 5
}

// Run the test function for the priority queue
testMyPriorityQueue();
