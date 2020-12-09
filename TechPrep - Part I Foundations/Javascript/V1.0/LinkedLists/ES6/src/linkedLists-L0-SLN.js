
// Use the following pre-defined Linked List node object.
//
class LinkedListNode {
  constructor(data, next) {
    this.data = data || null;
    this.next = next || null;
  }
}

// Use the following variables to act as references to the head and tail nodes when
//  when necessary.
//
let head = null;
let tail = null;


//
// EASY    :  Questions 1 - 8
// MEDIUM  :  Questions 9 - 11
// HARD    :  Questions 12 - 14
//


let L0_P1 = function() {

  //  1. Write a function that creates and returns a new node.
  //
  //
  // Input : (data)
  // Output: The new node
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createNewNode = (data) => {
    // Your code here...

    return new LinkedListNode(data);
  };


  //  2. Write a function that creates and returns a new node and assigns it to head.
  //
  //
  // Input : (data)
  // Output: The new node
  //         Assigned it to head
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createFirstNode = (data) => {
    // Your code here...

    let node = new LinkedListNode(data);

    if (!head) {
      head = node;
    }

    return node;
  };


  //  3. Write a function that creates a new node always at the head position.
  //
  //
  // Input : (data)
  // Output: The new node
  //         At head position
  //         Old list referenced by next
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createAndInsertFirst = (data) => {
    // Your code here...

    let node = new LinkedListNode(data);

    if (head) {
      node.next = head;
    }

    head = node;
    return node;
  };


  //  4. Write a function that creates a new node and always makes it the 2nd node in the
  //      list.
  //
  //
  // Input : (data)
  // Output: The new node
  //         At 2nd position in the list or first if there weren't any existing nodes already
  //         Maintain the head variable as-needed.
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createAndInsertSecond = (data) => {
    // Your code here...

    let node = new LinkedListNode(data);

    if (head) {
      node.next = head.next;
      head.next = node;
    }
    else {
      head = node;
    }

    return node;
  }
};


//  5. Extend all previous functions to make the very first node added to both
//      the `head` and `tail` -- keeping in mind that only the tail node in the
//      list should ever be the `tail` (even if there's only 1 node).
//
let L0_P2 = function() {

  //  5.1. Write a function that creates and returns a new node and maybe assigns it to head and tail.
  //
  //
  // Input : (data)
  // Output: The new node
  //         Assigned it to head if there wasn't already one
  //         Assigned it to tail if there wasn't already one
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createFirstNode = (data) => {
    // Your code here...

    let node = new LinkedListNode(data);

    if (!head) {
      head = node;
      tail = node;
    }

    return node;
  };


  //  5.2. Write a function that creates a new node always at the head position and maybe sets tail.
  //
  //
  // Input : (data)
  // Output: The new node
  //         At head position always
  //         Assigned to tail if there wasn't already one
  //         Old list referenced by next
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createAndInsertFirst = (data) => {
    // Your code here...

    let node = new LinkedListNode(data);

    if (head) {
      node.next = head;
    }
    else {
      tail = node;
    }

    head = node;
    return node;
  };


  //  5.3. Write a function that creates a new node and always makes it the 2nd node in the
  //        list.  Maybe set the head or tail references, if needed.
  //
  //
  // Input : (data)
  // Output: The new node
  //         At the head position if there weren't any existing nodes already
  //         Otherwise, always at 2nd position in the list
  //         Maintain the head or tail variable as-needed.
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.createAndInsertSecond = (data) => {
    // Your code here...

    let node = new LinkedListNode(data);

    if (!head) {
      head = node;
      tail = node;
    }
    else if (!head.next) {
      head.next = node;
      tail = node;
    }
    else {
      node.next = head.next;
      head.next = node;
    }

    return node;
  };


  //  6. Write a function that always adds a new node to the end of the list.
  //
  //
  // Input : (data)
  // Output: The new node
  //         Assigned to head if there wasn't already an existing one
  //         Assigned to tail
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.addNewNode = (data) => {
    // Your code here...

    let node = new LinkedListNode(data);

    if (!head) {
      head = node;
      tail = node;
    }
    else {
      tail.next = node;
      tail = node;
    }

    return node;
  };


  //  7. Write a function that always removes the first node in the list.
  //
  //
  // Input : none
  // Output: The first node (if any)
  //         The first node removed if it exists
  //         Head and Tail properly assigned
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.removeFirstNode = () => {
    // Your code here...

    let node = head;

    if (head) {
      head = head.next;

      if (!head) {
        tail = null;
      }
    }

    return node;
  };


  //  8. Write a function that always removes the second node in the list.
  //
  //
  // Input : none
  // Output: The 2nd node in the list, if any
  //         The 2nd node removed from the list
  //         Head and tail properly assigned
  //
  //
  // What is the Time Complexity of your implementation  : O(1)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.removeSecondNode = () => {
    // Your code here...

    let node;

    if (head) {
      node = head.next;
      head.next = node.next;

      if (!head.next) {
        tail = head;
      }
    }

    return node;
  };


  //  9. Write a function that can return any node in the list.
  //
  //
  // Input : (staring node, index),
  // Output: The node at index position
  //         Null if out of bounds
  //
  //
  // More Info:
  //
  //  * Index = 0 refers to the head
  //  * Index = 1 refers to the 2nd node
  //  * Index > 1 Etc.
  //
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.getNodeAtIndex = (start, index) => {
    // Your code here...

    let node = start;
    let count = 0;

    while (count++ < index && node != null) {
      node = node.next;
    }

    return node;
  };


  // 10. Write a function that finds and returns the node previous to the one passed in.
  //
  //
  // Input : (starting node, the node we want to find previous to)
  // Output: The previous node (if any)
  //         null if there isn't one
  //
  //
  // Constraints:
  //
  //  * Assume there are no duplicate data values
  //  * Assume start or node are not null
  //  * Assume node is a valid node in the list indicated by start
  //
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.getPreviousNode = (start, node) => {
    // Your code here...

    let current = start;

    if (current === null) {
      return null;
    }

    while (current.next) {
      if (current.next === node) {
        return current;
      }

      current = current.next;
    }

    return null;
  };


  // 11. Write a function that always removes the last node in the list.
  //
  //
  // Input : none
  // Output: The last node
  //         The previous node, if any, is now the tail
  //         Head and tail properly assigned
  //
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.removeLastNode = () => {
    // Your code here...

    let node = head;
    let last = tail;

    if (head === tail) {
      head = tail = null;
      return node;
    }

    while (node.next !== tail) {
      node = node.next;
    }

    node.next = null;
    tail = node;

    return last;
  };


  // 12. Write a function that can insert a node anywhere in the list.
  //
  //
  // Input : (index of node to insert at, data)
  // Output: The new node
  //         Null if index out of bounds
  //         Node inserted at proper location within the list
  //         Head and tail properly assigned
  //
  //
  // More Info:
  //
  //  * Index = 0 refers to the head
  //  * Index = 1 refers to the 2nd node
  //  * Index > 1 Etc.
  //
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.insertNodeAtIndex = (index, data) => {
    let node = new LinkedListNode(data);

    // Your code here...

    if (!index) {
      node.next = head;
      head = node;

      if (!head.next) {
        tail = node;
      }
    }
    else {
      let prev = get(index -1);

      if (!prev) {
        return null;
      }

      node.next = prev.next;
      prev.next = node;

      if (!node.next) {
        tail = node;
      }
    }

    return node;



    function get(index) {
      // Your code here...

      let temp = head;

      if (index) {
        let pos = 0;
        while (pos++ < index && temp) {
          temp = temp.next;
        }
      }

      return temp;
    }
  };


  // 13. Write a function that can remove any node in the list.
  //
  //
  // Input : (starting node, index of node to remove)
  // Output: The node at index position
  //         Null if out of bounds
  //         The node removed from the list
  //         Head and tail properly assigned
  //
  //
  // More Info:
  //
  //  * Index = 0 refers to the head
  //  * Index = 1 refers to the 2nd node
  //  * Index > 1 Etc.
  //
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(1)
  //
  this.removeNodeAtIndex = (start, index) => {
    // Your code here...

    let prev = get(index-1);
    let curr = (prev) ? prev.next : null;
    let next = (curr) ? curr.next : null;

    if (head === null || prev === null) {
      return null;
    }

    if (!index) {
      head = head.next;

      if (!head) {
        tail = null;
      }

      curr = start;
    }
    else {
      prev.next = next;
      if (curr === tail) {
        tail = prev;
      }
    }

    return curr;



    function get(index) {
      // Your code here...

      let temp = start;

      if (index) {
        let pos = 0;
        while (pos++ < index && temp) {
          temp = temp.next;
        }
      }

      return temp;
    }
  };


  // 14. Write a function that returns an array of all the values in a list.
  //
  //
  // Input : A linked list
  // Output: Array of all values in the list
  //
  // Example:
  //
  // Node = {
  //   data: 1, next: {
  //   data: 2, next: {
  //   data: 3, next: {
  //   data: 4, next: {
  //   data: 5, next: null
  // }}}}}
  //
  // Returns: [1,2,3,4,5]
  //
  // What is the Time Complexity of your implementation  : O(n)
  // What is the Space Complexity of your implementation : O(n)
  //
  this.toArray = (start) => {
    // Your code here...

    let result = [];

    while (start) {
      result.push(start.data);
      start = start.next;
    }

    return result;
  };
};
