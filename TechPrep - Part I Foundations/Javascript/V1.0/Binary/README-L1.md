# Binary &mdash; Part I


###### Overview

Binary means base 2.  We count by adding the power of each bit position together

```text
  0 11110011 =
  | ||||||||
  | |||||||+--   1
  | ||||||+---   2
  | |||||+----   4
  | ||||+-----   8
  | |||+------  16
  | ||+-------  32
  | |+--------  64
  | +--------- 128
  +----------- 256
  .        ... etc.
```

In computer, we often represent numbers in different base systems.  Below, we can see the base2
 (binary), base10 (decimal), and base16 (hexadecimal) equivelents of some numbers.
 
```text

      Bin      Dec    Hex
      ----     ---    ----
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
      1111  =  15   = 0x0F
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
```

When we compute numbers using arithmetic we use special operators like +, -, /, and *.  When
 we manipulate binary values we use a special set of operators called: logcal-and, logical-or,
 logical-not, and exclusive-or.

How these operators behave is defined by a _truth table_.  Below are the truth tables for
 these operators:
 
```text

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

```

Sometimes we want to do operations with different bit strings.  It is helpful to use someting
 called a bitmask.  A bitmask is just a bit string with 1's and 0's in specific positions
 that we can later use to isolate and manipulate those specific bits.


Mask allows us to find manipulate specific bits in certain ways

```text
  value     10110011 00001101
   mask     00001111 00000000
     op AND
 result     00000011 00000000
```

We can use AND to clear bits from a value.  Example:

```text
 To clear the 5th bit:

  value     0001 1110
   mask     1110 1111
     op AND
 result     0000 1110
```

We can use OR to set bits in a value.  Example:

```text
  value     10110011 00001101
   mask     00001111 00000000
     op OR
 result     10111111 00001101
```

To set the 5th bit:

```text
  value     0000 1110
   mask     0001 0000
     op OR
 result     0001 1110
```

We can use NOT to invert bits:

 Example:

```text
    NOT 0110 0101
 result 1001 1010
```

XOR allows us to transform data in some way.  Example, we can say:

```text
      x  1010 1100
    XOR
      y  1110 0111
 result  0100 1011
```

In such a way we can swap two variables without using extra memory

```text
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
```


Sometimes we might want to shift the bits to the left or right.


  Shift Left 1
```text
   x = x << 1;
   x <<= 1;
   
      0000 0011
      0000 0110
```

  Shift Left 4
```text
   x = x << 4;
   x <<= 4;
   
      0000 0011
      0011 0000
        .. ..
```

  Shift Right 1
```text
   x = x >> 1;
   x >>= 1;
   
      0011 0000
      0001 1000
```

  Shift Right 4
```text
   x = x >> 4;
   x >>= 4;
   
      0011 0000
      0000 0110
        .. ..
```

Multiplication operations are very costly to the CPU.  Sometimes we can gain drastic performance
 improvements by using the shift operators.

```text 
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
```

###### This Exercise

Open [binary-L1.js](ES6/src/binary-L1.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner1.html](ES6/testRunner1.html) file to run the tests and view your progress.


###### Objective

Complete the following exercises:

 0. Write a function to test whether the 0th bit is set.
 2. Write a function to test whether then 7th bit is set.
 3. Write a function to test whether the 3rd and 4th bits are set.
 4. Write a function to left-shift n number of times.
 5. Write a function to right-shift n number of times.
 6. Write a function that sets the 0th bit in a value.
 7. Write a function that sets the 7th bit in a value.
 8. Write a function that sets the 3rd and 4th bits in a value.
 9. Write a function that logical-or's two values together.
 10. Write a function that logical-and's two values together.
 11. Write a function that counts the number of positive bits are set.
 12. Write a function that returns the byte in the n position of the value.
 13. Write a function to rotate a value left n-number of times.
 14. Write a function to rotate a value left n-number of times.
 15. Write a function to return the parity of a value.
 16. Write a function to convert an integer into binary.
 17. Write a function that multiplies a number by 2 using only binary operations.
 18. Write a function that divides a number by 2 using only binary operations.
 

###### Critical Whiteboard Skills

 * Know your logical-OR, -AND, -XOR, and -NOT operations comfortably
 * Be familiar with the powers of 2: 1,2,4,8,16,32,64,128,etc.
 * Know how to create bitmasks programatically on the fly and use them to solve problems
 
 