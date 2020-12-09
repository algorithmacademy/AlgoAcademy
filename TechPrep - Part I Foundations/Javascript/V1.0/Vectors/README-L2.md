# Dynamic Arrays and Vectors &mdash; Part II

###### Introduction
Previously, in L1 you enhanced a partially written vector to resize and maintain an accurate length.
 You may have noticed that the .add(), .insert(), and .remove() functions used built-in functions
 to add and remove data to the storage array, even though you were asked not to use any built-in
 functions yourself.  That is okay, it was done that way to help you focus only on the critical
 details necessary to learn the self-adjusting array concept.

Your new objective is to re-implement the .add(), .insert(), and .remove() functions from scratch,
 without using any build-in functions.  You can use your previous implementation as reference.
 We've partially implemented a .resize() function.  You'll also change it to either increase the
 storage capacity, or decrease it depending on the operation.

### This Exercise

Open [vectors-L2.js](ES6/src/vectors-L2.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner2.html](ES6/testRunner2.html) file to run the tests and view your progress.

###### NOTES

 * Try to re-use functions when possible, don't repeat yourself (DRY)
 * Don't worry about edge-cases, error checking, or bounds checking
 * There shouldn't be any built-in array functions used when completed
 * Satisfy all the tests.  Do not modify or comment of them out
   
   
###### Objectives

 1. .add() re-implement with no built-in function calls.  Resize if necessary.
 2. .insert() re-implement with no built-in function calls.  Resize if necessary.
 3. .remove() re-implement with no built-in function calls.  Resize if necessary.
 4. .resize() must double or half the storage as-needed.  When halving, you can use the formula
     (floor(maxCapacity / 2).  IDEA: It might be better to supply an argument that indicates
     the desired storage size, and whether its an add() or remove() operation requesting it.
     Or not.  It's up to you.
 5. Don't expand beyond maxCapacity or below minCapacity.
 

###### BONUS: Only complete this after the others.

 1. After adding (capacity - 1) items, log the v.storage array.  Also the v.toArray().  Observe
     the differences.
 2. Add a couple more items, and log them again and observe.
 3. Remove a few until (capacity - 3).  Log them again and observe.
 4. Be able to explain why they do not match.
 5. Be able to explain why that is okay.

