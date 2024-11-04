/* --------------------------------------------------------------------------------- */
/*                              PRIORITY QUEUE TESTING                               */
/* --------------------------------------------------------------------------------- */

/*         !!  Press *RUN* to test or type node tests/priorityQueueTest.js !!        */

/* --------------------------------------------------------------------------------- */

import { myPriorityQueue } from "../dataStructures/PriorityQueues.js";
import { Qelement } from "../dataStructures/PriorityQueues.js";

function testMyPriorityQueue() {
    // Create a new priority queue with a maximum size of 5
    const queue = new myPriorityQueue(5);
    console.log("==============================\n");
    console.log("=== Testing Priority Queue ===\n");
    console.log("==============================\n");
    
    // Test if the queue is empty
    console.log("🔍 Is the queue empty? (Expected: true):", queue.isEmpty()); // Expected: true
    console.log("-----------------------------------------------------");
  
    // Enqueue items with different priorities
    console.log("🔼 Enqueue items:");
    console.log("   Enqueue item 1 with priority 2 (Expected: true):", queue.enqueue("Item 1", 2));
    console.log("   Enqueue item 2 with priority 1 (Expected: true):", queue.enqueue("Item 2", 1));
    console.log("   Enqueue item 3 with priority 3 (Expected: true):", queue.enqueue("Item 3", 3));
    console.log("-----------------------------------------------------");
  
    // Peek at the front item
    console.log("👀 Peek at the front item (Expected: Qelement { value: 'Item 2', priority: 1 }):", queue.peek());
    console.log("-----------------------------------------------------");
  
    // Check if the queue is empty now
    console.log("🔍 Is the queue empty now? (Expected: false):", queue.isEmpty()); // Expected: false
    console.log("   Queue size (Expected: 3):", queue.count); // Expected: 3
    console.log("-----------------------------------------------------");
  
    // Dequeue items and check the output
    console.log("🔽 Dequeue items:");
    console.log("   Dequeue (Expected: Qelement { value: 'Item 2', priority: 1 }):", queue.dequeue());
    console.log("   Dequeue (Expected: Qelement { value: 'Item 1', priority: 2 }):", queue.dequeue());
    console.log("-----------------------------------------------------");
  
    // Peek after some dequeues
    console.log("👀 Peek after dequeues (Expected: Qelement { value: 'Item 3', priority: 3 }):", queue.peek());
    console.log("-----------------------------------------------------");
  
    // Attempt to dequeue until queue is empty
    console.log("🔽 Dequeue (Expected: Qelement { value: 'Item 3', priority: 3 }):", queue.dequeue());
    console.log("   Dequeue on empty queue (Expected: false, 'cannot dequeue from empty queue'): ", queue.dequeue());
    console.log("-----------------------------------------------------");
  
    // Attempt to peek on an empty queue
    console.log("👀 Peek on empty queue (Expected: undefined, 'cannot peek into an empty queue'): ", queue.peek());
    console.log("-----------------------------------------------------");
  
    // Attempt to enqueue more than the max size
    console.log("🔼 Attempting to enqueue more items:");
    console.log("   Enqueue item 4 with priority 1 (Expected: true):", queue.enqueue("Item 4", 1));
    console.log("   Enqueue item 5 with priority 4 (Expected: true):", queue.enqueue("Item 5", 4));
    console.log("   Enqueue item 6 with priority 2 (Expected: true):", queue.enqueue("Item 6", 2));
    console.log("   Enqueue item 7 with priority 5 (Expected: true):", queue.enqueue("Item 7", 5));
    console.log("   Enqueue item 8 with priority 6 (Expected: exceeded queue maxsize, cannot add item):", queue.enqueue("Item 8", 6));
    console.log("-----------------------------------------------------");
  
    // Final check on queue size after all operations
    console.log("✅ Final queue size (Expected: 5):", queue.count); // Expected: 5
}

// Run the test function for the priority queue
testMyPriorityQueue();
