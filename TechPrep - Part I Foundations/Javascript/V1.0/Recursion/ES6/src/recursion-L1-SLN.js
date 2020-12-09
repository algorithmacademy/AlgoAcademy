
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
  // What is the Time Complexity of your solution?  : O(d) or O(lg n)
  // What is the Space Complexity of your solution? : O(d) or O(lg n)
  //
  reverseInt(number) {
    // Your code here

    let result = "";

    function recurse(number) {
      number = ~~number;

      result += number % 10;
      if (number <= 9) {
        return number;
      }
      else {
        recurse(number / 10);
      }
    }

    recurse(number);
    return parseInt(result);
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
  // What is the Time Complexity of your solution?  : O(bd) or O(lg n)
  // What is the Space Complexity of your solution? : O(bd) or O(lg n)
  //
  intToBinary(number) {
    // Your code here

    let result = "";

    function recurse(number) {
      number = ~~number;

      if (!number) {
        return "0";
      }

      result = ((number & 0x01) ? "1" : "0") + result;
      recurse(number >> 1);
    }

    recurse(number);
    return result;
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
  // What is the Time Complexity of your solution?  : O(d) or O(lg n)
  // What is the Space Complexity of your solution? : O(d) or O(lg n)
  //
  intWithCommas(number, result = "") {
    // Your code here

    if (number < 1000) {
      return "" + number;
    } else {
      result = ~~(number % 1000);
      return this.intWithCommas(~~(number / 1000), result) + "," + result;
    }
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  logLineWithNXs(n) {
    // Your code here

    if (n === 1) {
      return "X";
    }

    return "X" + this.logLineWithNXs(n-1);
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
  // What is the Time Complexity of your solution?  : O(n^2)
  // What is the Space Complexity of your solution? : O(n^2)
  //
  logTriangle(n) {
    // Your code here

    if (n === 1) {
      console.log("X");
    }

    else {
      this.logTriangle(n-1);
      console.log(this.logLineWithNXs(n));
    }
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
  // What is the Time Complexity of your solution?  : O(n^2)
  // What is the Space Complexity of your solution? : O(n^2)
  //
  logTriangleUpsideDown(n) {
    // Your code here

    if (n === 1) {
      console.log("X");
    }
    else {
      console.log(this.logLineWithNXs(n));
      this.logTriangleUpsideDown(n-1);
    }
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  reverseArray(input, start=0) {
    // Your code here

    if (start >= ~~(input.length /2)) {
      return input;
    }

    let stop = input.length - start - 1;

    [input[start], input[stop]] = [input[stop], input[start]];

    return this.reverseArray(input, start+1, stop-1);
  }


  //  8. Write a recursive function to determine if two arrays are equal
  //
  // Input : Two arrays, and the length of each
  // Output: true/false
  // Constraints: Use only simple values like numbers, strings, bools
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  areArraysEqual(input1, input2, l1, l2) {
    // Your code here

    if (l1 !== l2) {
      return false;
    }
    else if (l1 === 0) {
      return true;
    }
    else if (input1[l1-1] !== input2[l2-1]) {
      return false;
    }
    else {
      return this.areArraysEqual(input1, input2, l1-1, l2-1);
    }
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  maxValueInArray(input, index) {
    // Your code here

    if (index === 1) {
      return 0;
    }
    else {
      let max = this.maxValueInArray(input, index-1);
      if (input[max] > input[index-1]) {
        return max;
      }
      else {
        return index-1;
      }
    }
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  isArraySorted(input, index) {
    // Your code here

    if (index <= 1) {
      return true;
    }
    else if (input[index-1] >= input[index-2]) {
      return this.isArraySorted(input, index-1);
    }
    else {
      return false;
    }
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  fillArrayIncreasing(input, n) {
    // Your code here...

    if (n === 1) {
      input[0] = 1;
    }
    else {
      this.fillArrayIncreasing(input, n-1);
      input[n-1] = n;

      return input;
    }
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  isPalindrome(input) {
    // Your code here...

    let first = 0;
    let last = input.length-1;

    function recurse(input, first, last) {
      if (first >= last) {
        return true;
      }
      else if (input[first] !== input[last]) {
        return false;
      }
      else {
        return recurse(input, first + 1, last - 1);
      }
    }

    return recurse(input, first, last);
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
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  flattenArray(input) {
    // Your code here...

    if (typeof input === "number") {
      return [input];
    }
    else if (!input.length) {
      return [];
    }
    else {
      return this.flattenArray(input[0]).concat(this.flattenArray(input.slice(1)));
    }
  }
};
