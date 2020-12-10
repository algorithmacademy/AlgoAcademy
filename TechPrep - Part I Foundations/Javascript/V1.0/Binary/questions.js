


/*
  Binary means base 2.  We count by adding the power of each bit position together

  10011 =
  |||||
  ||||+--  1
  |||+---  2
  ||+----  4
  |+-----  8
  +------ 16



      0000  =   0   = 0x00
      0001  =   1   = 0x01
      0010  =   2   = 0x02
      0011  =   3   = 0x03
      0100  =   4   = 0x04
      0101  =   5   = 0x05
      0110  =   6   = 0x06
      0111  =   7   = 0x07
      1000  =   8   = 0x08
      1001  =   9   = 0x09
      1010  =  10   = 0x0A
      1011  =  11   = 0x0B
      1100  =  12   = 0x0C
      1101  =  13   = 0x0D
      1110  =  14   = 0x0E
      1111  =  15   = 0x0D
     10000  =  16   = 0x10
       .
    100000  =  32   = 0x20
       .
   1000000  =  64   = 0x40
       .
   1111111 = 127    = 0x7F
  10000000 = 128    = 0x80
       .
       .
  11111111 = 255    = 0xFF
       .
       .



 Truth Tables


   and    x & y
   or     x | y
   not    ~x
   xor    x ^ y


 1 AND 1   = 1
 0 AND 1   = 0
 1 AND 0   = 0
 0 AND 0   = 0

 1101 AND 1111 = 1101


 1 OR 1   = 1
 0 OR 1   = 1
 1 OR 0   = 1
 0 OR 0   = 0

 1010 OR 1100 = 1110


 1 XOR 1   = 0
 0 XOR 1   = 1
 1 XOR 0   = 1
 0 XOR 0   = 0


 1010 XOR 1100 = 0110

 NOT 1     = 0
 NOT 0     = 1
 NOT 1     = 0
 NOT 0     = 1

 NOT 0110 = 1001


 0 | 1    = bit
 1111     = nibble
 1..8     = byte
 1..16    = word (2 bytes)
 1..32    = double word (4 bytes)
 1..64    = quad word (8 bytes)



 Mask allows us to find manipulate specific bits in certain ways

  value     10110011 00001101
   mask     00001111 00000000
    op  AND
 result     00000011 00000000

 We can use AND to clear bits from a value.  Example:

 To clear the 5th bit:

  value     0001 1110
   mask     1110 1111

 result     0000 1110



  value     10110011 00001101
   mask     00001111 00000000
    op  OR
 result     10111011 00001101


 We can use OR to set bits from a value.

 To set the 5th bit:

  value     0000 1110
   mask     0001 0000

 result     0001 1110


 We can use NOT to invert bits:

 Example:

    NOT 0110 0101
 result 1001 1010


 XOR allows us to transform data in some way.  Example, we can say:

      x  1010 1100
    XOR
      y  1110 0111
 result  0101 1011

 In such a way we can swap two variables without using extra memory

 var a = 0110;
 var b = 0101;

 a = a ^ b;
     0110
     0101
    >0011

 b = a ^ b;
   a 0011
   b 0101
    >0110

 a = a ^ b
   a 0011
   b 0110
    >0101

   a 0101
   b 0110





  Shift Left 1

      0000 0011
      0000 0110

  Shift Left 4

      0000 0011
      0011 0000
        .. ..

  Shift Right 1

      0011 0000
      0001 1000


  Shift Right 4

      0011 0000
      0000 0110
        .. ..


  Multiply by 2

        0001   = 1
   << 1 0010   = 2
   << 1 0100   = 4
   << 1 1000   = 8

        0110   = 6
   << 1 1100   = 12

  Divide by 2

        1000   = 8
   >> 1 0100   = 4
   >> 1 0010   = 2
   >> 1 0001   = 1

        1110   = 14
   >> 1 0111   = 7



 Bits

     MSB                             LSB  Big Endian
     LSB                             MSB  Little Endian
                                          Bit of byte are in same order, byte address counts up or down

     32 ..    24 ..    16..     8 ..
     00000000 00000000 00000000 00000000
     |      | |      | |      | |      |
     32    24 23    16 15     8 7      0


 Endian

     0x12345678   Memory Address
              |
              +-> M + 0 : 78
              ... M + 1 : 56
              ... M + 2 : 34
              ... M + 3 : 12

              = Little Endian

     0x12345678
              |
              +-> M + 0 : 12
              ... M + 1 : 34
              ... M + 2 : 56
              ... M + 3 : 78

              = Big Endian

*/








// (0) Write a function to test with the the 0th bit is set
//
function is0thSet(value) {
  return (value & 0b01);
}

console.log(!!is0thSet(1));
console.log(!!is0thSet(2));


// (1) Write a function to determine whether 3rd and 4th bits are set:
//
function are3rdAnd4thBitsSet(value) {
  return (value & 0b11000) === 0b11000;
}

console.log(are3rdAnd4thBitsSet(0b11000));
console.log(are3rdAnd4thBitsSet(0b10101));

// (1) Write a function to shift-left n number of times
//
function shiftLeft(value, n) {
  return value << n;
}

console.log(shiftLeft(1, 5) == 32);


// (2) Write a function to shift-right n number of times
//
function shiftRight(value, n) {
  return value >> n;
}

console.log(shiftRight(32, 5) == 1);


// (3) Given two binary numbers, 0b0010 and 0b0001, write a function to binary manipulate them to return 0b0011
//
function logicalOr(x, y) {
  return x | y;
}

console.log(logicalOr(0b0010, 0b0001) == 0b0011);


// (4) Given two binary numbers, 0b0101 and 0b1101, write a function to binary manipulate them to return a
//  value that has the same bit values in-common
//
function logicalAnd(x, y) {
  return x & y;
}

console.log(logicalAnd(0b0101, 0b1101) == 0b0101);


// (5) Write a function to count the number of positive bits that are set in a value
//
function howManyPostiveBitsSet(value) {
  let t = Math.abs(value);
  let c = 0;

  while (t > 0) {
    c += (t & 0b01);
    t >>= 1;
  }

  return c;
}

console.log(howManyPostiveBitsSet(0b01001101100000111000010000011001) == 12);


// (6) Given a 32-bit value, write a function to return the byte in the n position
//     0b00000101 11101011 10100101 11110001      n=2
//                11101011
//       3        2        1        0
function getByteN(value, n) {
  return ((value >> (8 * n)) & 0b11111111);
}

console.log(getByteN(0b00000001001101010110000101110101, 0) == 0b01110101);
console.log(getByteN(0b00000001001101010110000101110101, 1) == 0b01100001);
console.log(getByteN(0b00000001001101010110000101110101, 2) == 0b00110101);
console.log(getByteN(0b00000001001101010110000101110101, 3) == 0b00000001);


// (7) Write a function to binary rotate a value left n number of times,
//      assume 8-bits
//
function rotateLeft8Bit(value, n) {
  return ((value << n) | (value >> (8 - n))) & 0xFF;
}

console.log(rotateLeft8Bit(0b10011100,1) == 0b00111001);



// (8) Write a function to binary rotate right n number of times
//
function rotateRight8Bit(value, n) {
  return ((value >> n) | (value << (8 - n))) & 0xFF;
}

console.log(rotateRight8Bit(0b10011100,1) == 0b01001110);


// (9) Write a function to return the endian of the computer
//
function endian() {
  let isBigEndian = new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] == 0x12;
  return (isBigEndian) ? "Big Endian" : "Little Endian";
}

console.log(endian());




// (10) Write a function to return the parity of a value.  Parity is when even when there's
//  and even number of 1-bits and odd when an odd number of 1-bits set.  Return 0 for even,
//  1 for odd.
//
function whichParity(value) {
  let t = Math.abs(value);
  let c = 0;

  while (t > 0) {
    c += (t & 0b01);
    t >>= 1;
  }

  return (c % 2 == 0) ? 0 : 1;
}

console.log(whichParity(0b1011));



// (11) Write a function to convert an integer into binary.  Return a binary string.
//
function IntToBinary(value) {
  let n = Math.abs(value);
  let result = "";

  while (n > 0) {
    result = (n & 0b01) + result;
    n >>= 1;
  }

  return result;
}

console.log(IntToBinary(-2));


// (12) Write a function that multiples by 2 using binary manipulation only
//
function multBy2(value) {
  return value << 1;
}

console.log(multBy2(16) == 32);


// (13) Write a function that divides by 2 using binary manipulation only
//
function divBy2(value) {
  return value >> 1;
}

console.log(divBy2(32) == 16);


// (14) Set Security Bits.  Suppose you have a byte array of [ 0x00, 0x00, 0x00, 0x00 ] and the bits are laid out
//  in this order:
//
//  [ 00000000, 00000000, 00000000, 00000000 ]
//    |      |  |      |  |      |  |      |
//    0      7  8     15  16    23  24    31
//
// Write a function to set a bit at position N.
// Write another function to clear a bit at position in.
//
// Suppose we have the following permissions:
//
//   IsAdmin            = 0
//   IsActive           = 1
//   CanViewInventory   = 9
//   CanCancelShipment  = 11
//   IsCanPayNet30      = 29
//
// Test the function to set those permissions, then clear them.
//
//  All set
//  [ 11000000, 01010000, 00000000, 00000100 ]
//
//