# Dynamic Arrays and Vectors &mdash; Part III

###### Introduction

Previously in L2, you re-implemented the vector not using any built-in functions, and if you did
 the bonus, got a good sense of how the internal memory representation may not always reflect the
 same view that client using it has.  It's one challenge to understand and write the algorithm
 itself, but we value correctness and consistency as much as we do performance.  If any code attempts
 to access an array index larger than the length an error condition happens.  Most languages will
 return an error of some kind indicating such.  Javascript will just return 'undefined'.  Using
 Javascript, we must check that index is within bounds but other languages will do that for you
 and raise an error if not.  AS AN ASIDE: the C/C++ language don't do range checking for you
 either.  Serious security problems happen that way (Google: buffer overflow exploits) but Javascript
 won't expose any security issues over it like some other languages do.

One advantage of creating an abstraction over an array isn't just simulating a dynamically resizing
 array, but also we can add safety to an unsafe idea.  It's natural to account for the conditions
 that happen around the first item and ones after.  When thinking about corner cases and edge cases
 we might usually consider the conditions around the first item, last item, and anything between.
 To have any real confidence, we need to go beyond that and check for the cases when the structure
 is empty, or what happens if we attempt to access anything before the first valid position or after
 the last valid position.

###### Edge Cases

Let us examine the things to consider when working with sequential data structures, such as Arrays 
 and LinkedLists.

```
  Before Valid Range --> [ First, Middle,    Last ] --> After Valid Range
  Index    -1..-infinity,  0    , 1..(n-2),  n-1,   n..infinity
```

A good Dynamic Array/Vector will abstract the following range characteristics:

```
                                        +-- Length = 6
                                        |
    storage:           [ 1, 2, 3, 4, 5, 6, _, _ ]
                       |                |     |
                       |                |     +-- Capacity = 8
                       |                |
   \__ Out of Range __/\_ Valid Range __/\__ Out of Range __/
```

I good abstraction will alert the calling code when an invalid operation is
 requested.  Thus, only indexes between 0 and (n-1) are allowed.  Other edge
 cases include:
 
 * What to do with an empty collection
 * What to do when there is only 1 element in a set
 * What to do with the last item in the set
 * What to do with a middle item in a set


### This Exercise

Open [vectors-L3.js](ES6/src/vectors-L3.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner3.html](ES6/testRunner3.html) file to run the tests and view your progress.
 
Your objective is to add bounds checking to the various vector operations.  At no point should an
 out of bounds index operation succeed, nor should the vector resize beyond the max value.

###### NOTES

 * Start with the code you wrote for vector-L2
 * Don't use any built-in array functions in your own code
 * Satisfy all the tests.  Do not modify or comment of them out


###### Warm-Up

 1. Understand why storage and .toArray() might show different views of the array (see L2 bonus)
 2. Declare a javascript array.  Log an index that is less than zero, or more than length.  What
     happens?  Why?

###### Objectives

 1. Throw an exception when attempting to use a index that is out of any valid range
 2. Throw an exception when a resize would result in capacity that exceeds max.  HINT: Be familiar
     with Javascript try...catch...finally /  throw usage

###### Bonus

 1. .find() function to return the index (or null) of the value provided
 2. .contains() function to return true/false whether the item exists.  HINT:  See if you can find
     a clever way to re-use existing functions here.
     