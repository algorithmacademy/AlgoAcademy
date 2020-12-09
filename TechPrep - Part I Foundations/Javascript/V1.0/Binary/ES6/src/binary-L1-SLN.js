
let L1 = function() {

  //  1. Write a function to test whether the 0th bit is set.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.is0thBitSet = (value) => {
    return !!(value & 0b01);
  };


  //  2. Write a function to test whether then 7th bit is set.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.is7thBitSet = (value) => {
    return !!(value & 0b10000000);
  };


  //  3. Write a function to test whether the 3rd and 4th bits are set.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.are3rdAnd4thBitsSet = (value) => {
    return (value & 0b11000) === 0b11000;
  };


  //  4. Write a function to left-shift n number of times.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.leftShift = (value, n) => {
    return value << n;
  };


  //  5. Write a function to right-shift n number of times.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.rightShift = (value, n) => {
    return value >> n;
  };


  //  6. Write a function that sets the 0th bit in a value.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.set0thBit = (value) => {
    return value | 0b01;
  };


  //  7. Write a function that sets the 7th bit in a value.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.set7thBit = (value) => {
    return value | 0b10000000;
  };


  //  8. Write a function that sets the 3rd and 4th bits in a value.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.set3rdAnd4thBits = (value) => {
    return value | 0b11000;
  };


  //  9. Write a function that logical-or's two values together.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.logicalOr = (x, y) => {
    return x | y;
  };


  // 10. Write a function that logical-and's two values together.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.logicalAnd = (x, y) => {
    return x & y;
  };


  // 11. Write a function that counts the number of positive bits are set.
  //
  //
  // What is the Time Complexity of your solution?  : O(lg n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.howManyPositiveBitsSet = (value) => {
    let t = Math.abs(value);
    let c = 0;

    while (t > 0) {
      c += (t & 0b01);
      t >>= 1;
    }

    return c;
  };


  // 12. Write a function that returns the byte in the n position of the value.
  //
  // Input :     0b00000101 11101011 10100101 11110001      n=2
  // Output:                11101011
  //   Byte Position      3        2        1        0
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.getByteN = (value, n) => {
    return ((value >> (8 * n)) & 0b11111111);
  };


  // 13. Write a function to rotate a value left n-number of times.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.leftRotate8Bits = (value, n) => {
    return (value << n) | (n >> (8 - n));
  };


  // 14. Write a function to rotate a value left n-number of times.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.rightRotate8Bits = (value, n) => {
    return (value >> n) | (n << (8 - n));
  };


  // 15. Write a function to return the parity of a value.
  //
  // Parity is when even when there's and even number of 1-bits and odd when an odd number of
  //  1-bits set.  Return 0 for even, 1 for odd.
  //
  // What is the Time Complexity of your solution?  : O(lg n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.whichParity = (value) => {
    let t = Math.abs(value);
    let c = 0;

    while (t > 0) {
      c += (t & 0b01);
      t >>= 1;
    }

    return (c % 2 === 0) ? 0 : 1;
  };


  // 16. Write a function to convert an integer into binary.
  //
  // Input : Any positive integer
  // Output: A string of 1's and 0's representing the binary form of the number.
  //
  // Example:
  //
  //   Input : 7
  //   Output: "1110"
  //
  //
  // What is the Time Complexity of your solution?  : O(lg n)
  // What is the Space Complexity of your solution? : O(len(lg2 n))
  //
  this.intToBinary = (value) => {
    let n = Math.abs(value);
    let result = "";

    while (n > 0) {
      result = (n & 0b01) + result;
      n >>= 1;
    }

    return result;
  };


  // 17. Write a function that multiplies a number by 2 using only binary operations.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.multBy2 = (value) => {
    return value << 1;
  };


  // 18. Write a function that divides a number by 2 using only binary operations.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.divBy2 = (value) => {
    return value >> 1;
  };
};
