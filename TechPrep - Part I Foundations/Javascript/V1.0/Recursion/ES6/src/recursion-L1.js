
let L1 = class {

  //  1. Write a recursive function that prints the digits of an integer in reverse order.
  //
  // Input : an int
  // Output: the same int in reverse
  // Constraints: Do not convert to string to make it easier to reverse.  Do not convert to array.
  //
  // Example:
  //
  // Input : 2234295
  // Output: 5924322
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  reverseInt(number) {
    // Your code here
  };


  //  2. Write a recursive function to convert an integer to a binary string.
  //
  // Input : a positive integer
  // Output: a string of 1's and 0's representing the binary equivalent
  // Constraint: Don't use built in methods to convert it
  //
  // Example:
  //
  //   7 => "111"
  //  16 => "10000"
  //  10 => "1010"
  //  37 => "100101"
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  intToBinary(number) {
    // Your code here
  }


  //  3. Write a recursive function that formats any positive integer with commas
  //
  // Input : A positive number
  // Output: A string: the same number formatted with commas
  //
  // Example:
  //
  //     1940 => "1,940"
  //  2930194 => "2,930,194"
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  intWithCommas(number, result = "") {
    // Your code here
  }


  //  4. Write a recursive function to return a string with the number of "X"s indicated by n
  //
  // Input : A number indicating how many Xs
  // Output: A string with the number of Xs
  //
  // Example:
  //
  //  n=3 => "XXX"
  //  n=5 => "XXXXX"
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  logLineWithNXs(n) {
    // Your code here
  }


  //  5. Write a recursive function to print a left-aligned triangle with the number of lines indicated by n
  //
  // Input : Number of lines
  // Output: Number of Xs on each line, according to the line number
  //
  // Example:
  //
  //   1 =>    X
  //
  //   3 =>    X
  //           XX
  //           XXX
  //
  //   5 =>    X
  //           XX
  //           XXX
  //           XXXX
  //           XXXXX
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  logTriangle(n) {
    // Your code here
  }


  //  6. Write a recursive function to print a left-aligned triangle upside down with the number of
  //     lines indicated by n
  //
  // Input : Number of lines
  // Output: Number of Xs on each line, according to the line number in reverse order
  //
  // Example:
  //
  //   1 =>    X
  //
  //   3 =>    XXX
  //           XX
  //           X
  //
  //   5 =>    XXXXX
  //           XXXX
  //           XXX
  //           XX
  //           X
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  logTriangleUpsideDown(n) {
    // Your code here
  }


  //  7. Write a recursive function to reverse an array in-place
  //
  // Input : An array of anything
  // Output: The same array, reversed
  // Constraints: Do not make a copy or use pre-existing reversing functions
  //
  // Example:
  //
  //  [A, B, C, D] => [D, C, B, A]
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  reverseArray(input, start=0) {
    // Your code here
  }


  //  8. Write a recursive function to determine if two arrays are equal
  //
  // Input : Two arrays, and the length of each
  // Output: true/false
  // Constraints: Use only simple values like numbers, strings, bools
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  areArraysEqual(input1, input2, l1, l2) {
    // Your code here
  }


  //   9. Write a recursive function that will return the position of the largest element in an array
  //
  // Input : An array of numbers, the index to inspect next
  // Output: The index of the largest number
  // Constraints: Assume array has at least 1 element
  //
  // Example:
  //
  //  [1,2,3,4,5] => 4
  //  [1,9,4,6,2] => 1
  //  [4] => 0
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  maxValueInArray(input, index) {
    // Your code here
  }


  // 10. Write a recursive function to determine if array is sorted (in increasing order)
  //
  // Input : Array of numbers, next index to inspect
  // Output: True/False
  // Constraints: Assume array is non-empty
  //
  // Examples:
  //
  //  [1,2,3,4,5,6] => true
  //  [1,2,3,5,4,6] => false
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  isArraySorted(input, index) {
    // Your code here
  }


  // 11. Write a recursive function to fill a pre-allocated array with increasing numbers
  //       from 1 to n
  //
  // Input : Pre-allocated array with some length greater than zero
  // Output: Filled with numbers 1 .. n
  // Constraints: Assume array is non-empty
  //
  // Examples:
  //
  //  [ ..., ..., ..., ..., ..., ...] => [1,2,3,4,5,6]
  //  [ ..., ..., ...]                => [1,2,3]
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  fillArrayIncreasing(input, n) {
    // Your code here...
  }


  // 12. Write a recursive function to determine if an array is palindrome
  //
  // Input : Array of numbers
  // Output: True/False
  // Constraints: Assume array is non-empty
  //
  // Examples:
  //
  //  [1,2,3,3,2,1]   => true
  //  [1,2,3,4,3,2,1] => true
  //  [1,2,3,5,4,6]   => false
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  isPalindrome(input) {
    // Your code here...
  }


  // 13. Write a recursive function to flatten an array
  //
  // Input : Array of numbers or another array of numbers, etc.
  // Output: A flattened array of only numbers, no sub arrays
  // Constraints: Assume array is non-empty
  //
  // Examples:
  //
  //  [1,2,3,4,5,6]       => [1,2,3,4,5,6]
  //  [1,2,[3,4,[5,6,7]]] => [1,2,3,4,5,6,7]
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  flattenArray(input) {
    // Your code here...
  }
};