
/* --------------------------------------------------------------------------------- */
/*                                  PRIORITY QUEUES                                  */
/*-----------------------------------------------------------------------------------*/
                                                                              
/*    please refer to  test/priorityQueueTest.js file for testing of this data structure   
                                                                              
---------------------------------------------------------------------------------------

 More information on Queues can be found here:
   https://www.w3schools.com/dsa/dsa_data_queues.php
   https://en.wikipedia.org/wiki/Queue_(abstract_data_type)

---------------------------------------------------------------------------------------
 
** To accomplish this data structure with built-in objects,
you can use the Array object, which has the following functions:

push() - Appends new elements to the end of an array, and returns the new length of the array.
shift() - Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.


---------------------------------------------------------------------------------------*/

/**
 * Creates an item with both a value and a priority
 * @param {*} value The item to be stored in the queue
 * @param {number} priority
 **/

export class Qelement {
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
export class myPriorityQueue {
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
