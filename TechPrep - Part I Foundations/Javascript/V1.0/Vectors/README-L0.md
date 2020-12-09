# Dynamic Arrays and Vectors &mdash; Part 0

###### Introduction

Data Structures can be static or dynamic.  Static data structures cannot add or remove items after they've
 been created.  The data they hold can change, though.  Arrays by their very nature are static in most
 programming languages.  This  means if we need to space then we have to create a new array with extra
 space and copy the old array into the new one.

Inserting or removing elements into the middle of an array forces us to have to shift all the remaining
 elements up or down one position.  Sometimes doing so will require us to resize the storage array.  That
 can become tedious.  Imagine having to do that everywhere you encounter the need to add or remove elements
 from an array.

A Vector is an abstraction around a dynamically changing data set, such as an array.  Before we begin
 to implement one we shall practice the mechanics of inserting or removing elements from an array.  Each
 of those operations causes the remaining elements to shift right or left.  We will practice doing this
 in the following warmups.
 

#### This Exercise

Open [vectors-L0.js](ES6/src/vectors-L0.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner0.html](ES6/testRunner0.html) file to run the tests and view your progress.


###### NOTES

 * **Don't** worry about edge-cases, error checking, or bounds checking
 * **Implement** all the functionality using loops and arrays, avoid built-in array methods like
    array.copy, array.splice, array.slice, etc.


###### Obectives

These are warmups to help you learn the mechanics of shifting elements and resizing arrays.  This is
 the foundational skill for understanding how dynamic arrays works.  Complete the following:
 
 1. Reverse Elements in an Array without Copying the Array or Making a New One
 2. Shift Elements Right by 1 Position
 3. Shift Elements Left by 1 Position
 4. Shift Elements Right by 1 Position and Resize
 5. Shift Elements Left by 1 Position and Resize
 

###### Primary Learning Goals

 * Understand How to Shift Elements Left or Right (Removing or Inserting)
 * Understand Array Resizing


