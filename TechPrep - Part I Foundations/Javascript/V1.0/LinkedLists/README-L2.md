# Linked Lists &mdash; Part II


###### Overview

Doubly Linked Lists are similar to Singly Linked Lists but with one super important
 enhancement: the addition of a `previous` pointer that allows direct access to the
 node before it.



###### Edge Cases

Doubly Linked Lists will have similar edge cases as other sequential structures, namely:

 * What to do with an empty list
 * What to do when adding or working with the first node
 * What to do when adding or working with the last node
 * What to do when adding or working with any middle node
 
A visual view of a Doubly Linked List below:

##### Example 1
```
         Head     | Middle  ...           ...  |    Tail
         [ h ] -> [ m1 ] -> [ m2 ] -> ... [ mn ] -> [ t ] -> null
 null <- [   ] <- [    ] <- [    ] <- ... [    ] <- [   ]
Pos:       0        1         2             n-2      n-1
```

##### Example 2

```
         Head/Tail
         [ Node ] -> null
 null <- [      ]
Pos:        0
```

##### Example 3

```
    Head/Tail
      null

Pos:  none
```


###### This Exercise

Open [linkedLists-L2.js](ES6/src/linkedLists-L2.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner2.html](ES6/testRunner2.html) file to run the tests and view your progress.


###### NOTES

 * A Head refers to the first node, and a Tail refers to the last node.
 * error conditions


###### Objective

 Your objective is to implement a Doubly Linked List by completing the following:
 
  1. Implement Node class
  2. Implement DoublyLinkedList class
  3. Declare head and tail variables
  4. .add() function to add a new node at the end
  5. .insertAfter() function to insert data after a node (0/null for tail position)
  6. .insertBefore() function to insert data before a node (0/null for head position)
  7. .remove() function to remove data at position (0/null for head)
  8. .get() function to return data at position indicated
  9. .set() function to change existing data at position indicated
  10. .find() function to find and return the following structure { position, node }
  11. .contains() function to return the number of occurrences of a value in the list, 0 for none.


###### Critical Whiteboard Skills

Some of the most important muscle-memory skills to have on a whiteboard when working with
 Linked Lists are:
 
 * Iterating through the list looking for a value
 * Iterating through a list to find the node at some position
 * Finding the previous node
 * Knowing which operations are O(1) and which aren't and implementing accordingly
 
 