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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.fillArray = (input, value) => {
    value = value || 0;

    // fill it

    for (let i=0; i<input.length; i++) {
      input[i] = value || 0;
    }

    return input;
  };



  //  2. Return the sum of all values in an an array of numbers
  //
  //
  //  A sum is simply the result of all values of an array
  //   added together.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.sum = (input) => {
    // Return sum

    let result = 0;
    for (let i=0; i<input.length; i++) {
      result += input[i];
    }

    return result;
  };



  //  3. Return the average value of an array of numbers
  //
  //
  //  The average is the sum of all values in the array, divided by the number
  //   of elements in the array.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.average = (input) => {
    // return average

    let result = 0;
    for (let i=0; i<input.length; i++) {
      result += input[i];
    }

    return (result / input.length);
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.median = (input) => {
    // return median

    let midpoint = (input.length / 2);

    if (input.length % 2 !== 0) {
      return input[Math.floor(midpoint)];
    }

    return (input[midpoint - 1] + input[midpoint]) / 2
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.findIndex = (input, value) => {
    // return index or null

    for (let i=0; i<input.length; i++) {
      if (input[i] === value) {
        return i;
      }
    }

    return null;
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.findNthLastOdd = (input, nth) => {
    // Return the nth last odd number

    for (let i=input.length-1; i >= 0; i--) {
      if (input[i] % 2 !== 0) {
        nth -= 1;

        if (nth === 0) {
          return i;
        }
      }
    }

    return null;
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  this.getRangeInclusive = (input, start, end) => {
    // Return new range according to above criteria

    if (end < start) {
      [start, end] = [end, start];
    }

    if (input == null || input.length === 0 || start < 0 || start >= input.length) {
      return null;
    }

    if (end > input.length) {
      end = input.length - 1;
    }

    let result = [];

    for (let i=start; i<=end; i += 1) {
      result.push(input[i]);
    }

    return result;
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  this.getAverageOfRange = (input, start, end) => {
    // Return average of values selected from sub array

    let subarray = this.getRangeInclusive(input, start, end);
    return this.average(subarray);
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  this.copyArray = (input) => {
    // Copy it

    let result = new Array(input.length);

    for (let i=0; i<input.length; i++) {
      result[i] = input[i];
    }

    return result;
  };



  // 10.  Swap two elements in an array.  Return original array
  //
  //
  //  An interviewers favorite.  Swap two elements within an array.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.swapWithinArray = (input, sourceIndex, targetIndex) => {
    // Swap it

    let temp = input[targetIndex];
    input[targetIndex] = input[sourceIndex];
    input[sourceIndex] = temp;

    return input;
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.expandArray = (from, to) => {
    // Expand array

    to = this.fillArray(to, 0);

    for (let i=0; i<from.length; i++) {
      to[i] = from[i];
    }

    return to;
  };
};

