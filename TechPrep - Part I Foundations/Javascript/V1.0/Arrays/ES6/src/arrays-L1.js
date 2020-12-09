"use strict";


let L1 = function() {

  //  1. Fill all array elements with value, or zero if none provided.  Return original array
  //
  //
  //  Sometimes you might want to initialize an array with default values or reset it
  //   to a default state.  Most, if not all, modern compilers will automatically
  //   initialize an array to a default of all zero values, called "zeroing" an
  //   array.
  //
  //  Below, we get to do this ourselves.  Fill each element of the array with the
  //   value provided by `value` or zero if not provided.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.fillArray = (input, value) => {
    value = value || 0;

    // fill it
  };



  //  2. Return the sum of all values in an an array of numbers
  //
  //
  //  A sum is simply the result of all values of an array
  //   added together.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.sum = (input) => {
    // Return sum
  };



  //  3. Return the average value of an array of numbers
  //
  //
  //  The average is the sum of all values in the array, divided by the number
  //   of elements in the array.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.average = (input) => {
    // return average
  };



  //  4. Return the median of an array that even and odd number of elements
  //
  //
  //   The median is the middle value of a sorted array.  When even number of values, its the
  //    average of the two middle values.  For more information on the median formula, you
  //    may consult Wikipedia.
  //
  //   https://en.wikipedia.org/wiki/Median
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.median = (input) => {
    // return median
  };



  //  5. Return the index of the value specified, or null if not found
  //
  //
  //  In this case, we are looking for the index of the value being searched.
  //   So input[0] = "zero".  Thus, "zero" has the index of 0.  Return the index
  //   of the value if its found and null if it is not.
  //
  //  Test Input 1  : ["zero", "one", "two", "three", "four", "five"], "zero"
  //  Test Output 1 : 0
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.findIndex = (input, value) => {
    // return index or null
  };



  //  6. Return index of the nth last odd in the array, null if no odd numbers
  //
  //
  //  This one is a little trickier than the others.  In this case, we'll be looking for the index
  //   position of the nth last odd in the list.  So, findNthLastOdd(1) should return 11.  This
  //   is because `5` is the 1st odd from the end, and it is at the 11th index position in the
  //   array.
  //
  // Test Input 1  : [4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2], 1
  // Test Output 1 : 11
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.findNthLastOdd = (input, nth) => {
    // Return the nth last odd number
  };



  //  7. Return new array with range starting at index `start` and ending with index
  //     `end`, inclusive.  Return null if input is empty or `start` is out of bounds.
  //     You  might need to re-arrange `start` and `end` so `start` is lower than `end`.
  //
  //
  //  Test Input  1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4
  //  Test Output 1: [3,4,5]
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.getRangeInclusive = (input, start, end) => {
    // Return new range according to above criteria
  };



  //  8. Select a range of values in any array then return the average of those values
  //
  //
  //  Given a start index and end index indicating a sub-range within the array, return the
  //   average value of that sub-range.
  //
  //   HINT: See if you can reuse any functions you completed earlier in this file
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.getAverageOfRange = (input, start, end) => {
    // Return average of values selected from sub array
  };


  //  9. Make a copy of an array
  //
  //  HINT: This of this as: Make a copy.
  //
  //
  //  Test Input 1 : [0, 10, 20, 30, 35, 55, 75, 100]
  //  Test Output 1: [0, 10, 20, 30, 35, 55, 75, 100]
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.copyArray = (input) => {
    // Copy it
  };



  // 10.  Swap two elements in an array.  Return original array
  //
  //
  //  An interviewers favorite.  Swap two elements within an array.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.swapWithinArray = (input, sourceIndex, targetIndex) => {
    // Swap it
  };



  // 11. Copy smaller array into larger array.  First initialize the target array with zeroes.  `to`
  //      must be pre-initialized to a fixed size and zeroed.
  //
  // HINT: Think of this as: Copy A into B (from into to).
  //
  //
  // Test Input 1 : [1,2,3,4,5,6], [_, _, _, _, _, _, _, _, _, _, _, _]
  // Test Output 1: [1,2,3,4,5,6,_,_,_,_,_,_];
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.expandArray = (from, to) => {
    // Expand array
  };
};

