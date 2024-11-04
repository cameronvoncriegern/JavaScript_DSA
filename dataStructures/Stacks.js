/*
------------------------------------------------------------------------------
-------------     Data Structures & Algorithms in JavaScript      ------------
-------------                       Stacks                        ------------
 -----------------------------------------------------------------------------


-----------------------------------------------------------------------------
                                                                              
    please refer to  test/stacks.js file for testing of this data structure   
                                                                              
-----------------------------------------------------------------------------
              
More information on Stacks can be found here:

-  https://www.w3schools.com/dsa/dsa_data_stacks.php
-  https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

-----------------------------------------------------------------------------

** To accomplish this data structure with built-in objects, you can use the Array object, which has the following functions:

pop() - Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
push() - Appends new elements to the end of an array, and returns the new length of the array.

-----------------------------------------------------------------------------*/




/**
 * Creates an empty, fixed size stack
 * functions will include pop, push, peek, isEmpty(bool), isFull(with limited size arrays)
 * @param {number} size desired max-size of the stack
 */
export class myStack {
  constructor(size) {
    this.collection = new Array(size);
    this.count = 0;
    this.maxSize = size;
  }

  /**
   * Adds an item to the back of the stack
   * @param {*} value Item to be added to the stack
   * @returns {boolean} True if item was added, False otherwise.
   */
  Push(value) {
    // exceed size restriction
    if (this.count >= this.maxSize) {
      console.log(
        `stack overflow! can not add more than ${this.maxSize} items!`
      );
      return false;
    } else {
      //add element to the back of the stack
      this.collection[this.count] = value;
      this.count++;
      console.log(`item "${value}" added`);

      return true;
    }
  }

  /**
   * Removes and returns the top item from the stack.
   * If the stack is empty, it returns undefined.
   *
   * @returns {*} The item that was removed from the stack or undefined if the stack was empty.
   */
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

  /**
   * Access the last item on the stack, without removing it.
   *
   * @returns {*} The last item on the stack
   */
  Peek() {
    if (this.IsEmpty()) {
      console.log("can not peek into empty stack!");
      return undefined;
    }
    //return the back-most element of the stack
    return this.collection[this.count - 1];
  }
  /**
   * Checks to see if the stack is currently empty.
   *
   * @returns {boolean} True if the stack is empty, False if there are items in it.
   */
  IsEmpty() {
    // check if count > 0
    if (this.count > 0) {
      return false;
    }
    return true;
  }
}
