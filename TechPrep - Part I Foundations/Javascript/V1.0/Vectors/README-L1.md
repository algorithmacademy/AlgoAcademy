# Dynamic Arrays and Vectors &mdash; Part I

###### Introduction

A vector is a dynamic array that adjusts size when a certain threshold is met when adding or removing 
 items.  It is essentially a _collection_ that behaves somewhat like an array.  There are some
 some differences.  Arrays always allocate enough memory to hold enough elements to fill the full
 capacity.  Then allow random access anywhere within that range at any time.

Collections are different.  They are not technically an array though they may or may not use one as a
 storage mechanism behind the scenes.  They allow you to append new items to the end, insert new items
 anywhere near items that have already been inserted, and allow random access anywhere within that
 range.

 Collections are dynamic arrays and go by different names and may have slightly different nuanced
  behaviors between them but they are essentially the same idea.

```
  Dynamic Array     // A self-adjusting array
  Vector            // Not to be confused with a 2D/3D graphics vector
  List              // Not to be confused with a LinkedList
  Set
  Multiset
  Collection
  ArrayList
```

#### This Exercise

Open [vectors-L1.js](ES6/src/vectors-L1.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner1.html](ES6/testRunner1.html) file to run the tests and view your progress.

###### NOTES

 * **Don't** worry about edge-cases, error checking, or bounds checking
 * **Implement** all the functionality using loops and arrays, avoid built-in array methods like
    array.copy, array.splice, array.slice, etc.
 * Some built-in functions are already used.  Don't change them
 * Satisfy all the tests.  Do not modify or comment of them out

###### Obectives

John Doe left the company and you inherited his incomplete Vector class.  _Your objective is to implement the resize_
 functionality.  When the vector length has reached capacity, it must double in size.  Complete the
 following tasks:

 1. .add() should maintain the .length field correctly
 2. .insert() should maintain the .length field correctly
 3. .remove() should maintain the length field correctly
 4. .resize() function that expands the storage space
 5. .add() function to resize when needed.
 6. .insert() function to resize when needed.


###### FYI 

 1. `Vector.set(index, value);` is the same as `Array[index] = value;`
 2. `x = Vector.get(index);` is the same as `x = Array[index];`
 
 These are here to help simulate the perspective of an abstraction.
 

###### Critical Whiteboard Skills

The most critical skills to learn here, because it might come up in a
 class of problems, are:
 
 * Comfort resizing an array
 * Comfort abstracting an array and giving it alternate behaviors (which
    leads eventually to comfort abstracting other data structures with new
    ones)

