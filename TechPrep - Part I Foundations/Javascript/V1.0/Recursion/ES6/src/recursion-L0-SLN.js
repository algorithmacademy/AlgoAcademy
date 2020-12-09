
let L0 = class {

  //  1. Write a recursive function to count and log 1 to N.
  //
  // Input : Positive Integer
  // Output: console.log() of all values from 1 to N
  //
  // Example:
  //
  // Input : 3
  // Output:
  //
  //  1
  //  2
  //  3
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  from1ToN(n) {
    // Your code here...

    if (!n) {
      return 0;
    }

    this.from1ToN(n - 1);
    console.log(n);
  };


  //  2. Write a recursive function to count and log N to 1.
  //
  // Input : Positive Integer
  // Output: console.log() of all values from N to 1
  //
  // Example:
  //
  // Input : 3
  // Output:
  //
  //  3
  //  2
  //  1
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  fromNTo1(n) {
    // Your code here...

    if (!n) {
      return 0;
    }

    console.log(n);
    this.fromNTo1(n - 1);
  }


  //  3. Write a recursive function to count and log X to Y inclusive.  Assume X is always less than Y.
  //
  // Input : Positive Integer
  // Output: console.log() of all values from X to Y
  //
  // Example:
  //
  // Input : 3, 5
  // Output:
  //
  //  3
  //  4
  //  5
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  fromXtoY(x, y) {
    // Your code here...

    if (x > y) {
      return 0;
    }

    console.log(x);
    this.fromXtoY(x + 1, y);
  }


  //  4. Write a recursive function to calculate the length of an array.  Return the value.
  //
  // Input : Array of numbers
  // Output: Length of array
  // Constraints: Must recursively compute the length, cannot use array.length
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  getLengthOfArray(input) {
    // Your code here...

    let length = 0;

    function recurse(input) {
      if (!input || !input.length) {
        return 0;
      }

      recurse(input.slice(1));
      length += 1;
    }

    recurse(input);
    return length;
  }


  //  5. Write a recursive function to calculate the sum of an array
  //
  // Input : Array of numbers
  // Output: Sum of all numbers in array
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  sumOfArray(input) {
    // Your code here...

    let sum = 0;

    function recurse(input) {
      if (!input || !input.length) {
        return 0;
      }

      sum += input[0];
      recurse(input.slice(1));
    }

    recurse(input);
    return sum;
  }


  //  6. Write a recursive function to calculate the average of the values in an array
  //
  // Input : Array of numbers
  // Output: Sum of all numbers in array
  //
  // Example:
  //
  // Input : [23, 17, 23, 42, 8, 2, 73, 101, 83, 92]
  // Output: 46.4
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  averageOfArray(input) {
    // Your code here...

    let length = 0;
    let sum = 0;

    function recurse(input) {
      if (!input || !input.length) {
        return 0;
      }

      length += 1;
      sum += input[0];
      recurse(input.slice(1));
    }

    recurse(input);
    return sum / length;
  }


  //  7. Write a recursive function to return the sum of all evens in an array
  //
  // Input : Array of numbers
  // Output: Sum of all numbers in array
  //
  // Example:
  //
  // Input : [1, 2, 3, 4, 5, 6, 7, 8]
  // Output: 20
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  sumOfEvens(input) {
    // Your code here...

    let sum = 0;

    function recurse(input) {
      if (!input || !input.length) {
        return 0;
      }

      if (input[0] % 2 === 0) {
        sum += input[0];
      }

      recurse(input.slice(1));
    }

    recurse(input);
    return sum;
  }


/*
  sumOfEvens(input, n) {
    if (!n) {
      return 0;
    }
    return input[n] % 2 === 0 ? input[n] + sumOfEvens(input, n - 1) : 0 + sumOfEvens(input, n - 1);
  }
*/

  //  8. Write a recursive function to compute the number of digits in an integer
  //
  // Input : Any positive integer between 1 and 2,147,483,647
  // Output: The number of digits in the number
  //
  //
  // What is the Time Complexity of your solution?  : O(d) or O(lg n)
  // What is the Space Complexity of your solution? : O(n)
  //
  numberOfDigits(n) {
    // Your code here...

    if (n < 10) {
      return 1;
    }
    else {
      return 1 + this.numberOfDigits(n / 10);
    }
  }


  //  9. Write a recursive function to return whether the integer contains the number K
  //
  // Input : (Any positive integer between 1 and 2,147,483,647 , number to check for)
  // Output: True or false
  //
  // Example:
  //
  // Input : (13250, 5)
  // Output: true
  //
  //
  // What is the Time Complexity of your solution?  : O(n) or O(lg n)
  // What is the Space Complexity of your solution? : O(n)
  //
  nContainsK(n, k) {
    n = ~~n; // Convert floats to whole numbers
    k = ~~k; // Convert floats to whole numbers

    // Your code here...

    if (n <= 9) {
      return n === k;
    }
    else if (n % 10 === k) {
      return true;
    }
    else {
      return this.nContainsK(n / 10, k);
    }
  }


  // 10. Write a recursive function to calculate the power of a number (exponent, number)
  //
  // Input : (any positive integer, a number to raise the power by)
  // Output: The power of x, y
  //
  // Example:
  //
  // Input : (2, 4)
  // Output: 16
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  power(x, y) {
    // Your code here...

    if (y === 0) {
      return 1.0;
    }
    else {
      if (y > 0) {
        return x * this.power(x, y - 1);
      }
    }
  }
};