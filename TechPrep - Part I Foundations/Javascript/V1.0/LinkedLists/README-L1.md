# Linked Lists &mdash; Part II


###### Overview

In this exercise, we are going to implement and operate on a Singly Linked List.  This will help
 to illuminate some of the workings of a Linked List and help set the foundation for the next 
 few challenges.  One of the trickiest parts of working with a Linked List isn't finding a node, 
 but having to manipulate the next pointers in the correct sequence and not having easy access 
 to the previous node.  The standard Linked List does not provide a way for a given node to 
 access any previous node.  Having access to the previous node (if any) is a critical part of 
 manipulating Linked Lists.


###### Edge Cases

Doubly Linked Lists will have similar edge cases as other sequential structures, namely:

 * What to do with an empty list
 * What to do when adding or working with the first node
 * What to do when adding or working with the last node
 * What to do when adding or working with any middle node
 
A visual view of Linked List below:

##### Example 1
```
    Head     | Middle  ...           ...  |    Tail
    [ h ] -> [ m1 ] -> [ m2 ] -> ... [ mn ] -> [ t ] -> null

Pos:  0        1         2             n-2      n-1
```

##### Example 2

```
    Head/Tail
    [ Node ] -> null

Pos:  0
```

##### Example 3

```
    Head/Tail
      null

Pos:  none
```


###### NOTES

 * A Head refers to the first node, and a Tail refers to the last node.
 * error conditions


###### This Exercise

Open [linkedLists-L1.js](ES6/src/linkedLists-L1.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner1.html](ES6/testRunner1.html) file to run the tests and view your progress.


###### Objective

 Your objective is to implement a Singly Linked List by completing the following:
  
 1. Declare head and tail variables
 2. .add() function to add a node at the given position and return the new node
 3. .get() function to find a node at the given position
 4. .find() function to find and return the following structure { position, node }
 5. .remove() function to remove the node at the given position and return it
 6. .toArray() function to return an array of all linked lists value in the same sequence
      as they appear in the linked list


###### Critical Whiteboard Skills

Some of the most important muscle-memory skills to have on a whiteboard when working with
 Linked Lists are:
 
 * Iterating through the list looking for a value
 * Iterating through a list to find the node at some position
 * Finding the previous node
 * Knowing which operations are O(1) and which aren't and implementing accordingly
 
 