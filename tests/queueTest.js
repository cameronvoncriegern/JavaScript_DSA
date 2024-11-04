/* --------------------------------------------------------------------------------- */
/*                                   QUEUE TESTING                                  */
/* --------------------------------------------------------------------------------- */

/*                 !!  Press *RUN* to test or type node tests/queueTest.js !!        */

/* --------------------------------------------------------------------------------- */

import { myQueue } from "../dataStructures/Queues.js";

function testMyQueue() {
    // Create a queue with a maximum size of 3
    const queue = new myQueue(3);
  
    console.log("=== 🚀 Testing Enqueue ===");
    console.log("Attempting to add 1 to the queue (expect success):", queue.enqueue(1)); // Should return true
    console.log("Attempting to add 2 to the queue (expect success):", queue.enqueue(2)); // Should return true
    console.log("Attempting to add 3 to the queue (expect success):", queue.enqueue(3)); // Should return true
    console.log("Attempting to add 4 to a full queue (expect failure):", queue.enqueue(4)); // Should return false
  
    console.log("\n=== 📦 Current State of Queue ===");
    console.log("Queue Contents:", queue.collection); // Expected output: [1, 2, 3]
    console.log("Current Count:", queue.count); // Expected output: 3
  
    console.log("\n=== 🔄 Testing Dequeue ===");
    console.log("Removing first item (expect 1):", queue.dequeue()); // Should return 1
    console.log("Removing next item (expect 2):", queue.dequeue()); // Should return 2
    console.log("Removing next item (expect 3):", queue.dequeue()); // Should return 3
    console.log("Attempting to remove from empty queue (expect failure):", queue.dequeue()); // Should return false
  
    console.log("\n=== 👀 Testing Peek ===");
    console.log("Peeking into empty queue (expect undefined):", queue.peek()); // Should return undefined
    queue.enqueue(5);
    console.log("Peeking into queue with item 5 (expect 5):", queue.peek()); // Should return 5
  
    console.log("\n=== 🏷️ Testing isEmpty ===");
    console.log("Checking if queue is empty (expect false):", queue.isEmpty()); // Should return false
    queue.dequeue(); // Remove the item
    console.log("Checking if queue is empty after removing all items (expect true):", queue.isEmpty()); // Should return true
  
    console.log("\n=== ✅ All Tests Completed ===");
}
  
// Run the tests
testMyQueue();
