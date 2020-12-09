
describe("Binary - Part I", () => {
  let src;


  before(() => {
    src = new L1();
  });


  describe("1. Write a function to test whether the 0th bit is set.", () => {
    it("Return true or false, whether the bit is set or not.", () => {
      expect(src.is0thBitSet(0b101)).to.equal(true);
      expect(src.is0thBitSet(0b100)).to.equal(false);
    });
  });


  describe("2. Write a function to test whether the 7th bit is set.", () => {
    it("Return true or false whether the bit is set or not.", () => {
      expect(src.is7thBitSet(0b10000000)).to.equal(true);
      expect(src.is7thBitSet(0b01000000)).to.equal(false);
    })
  });


  describe("3. Write a function to test whether the 3rd and 4th bits are set.", () => {
    it("Return true or false whether both bits are set or not.", () => {
      expect(src.are3rdAnd4thBitsSet(0b11000)).to.equal(true);
      expect(src.are3rdAnd4thBitsSet(0b10101)).to.equal(false);
    });
  });


  describe("4. Write a function to left-shift n number of times.", () => {
    it("Return the shifted value.", () => {
      expect(src.leftShift(0b0001, 1)).to.equal(0b0010);
      expect(src.leftShift(0b1011, 3)).to.equal(0b1011000);
    })
  });


  describe("5. Write a function to right-shift n number of times.", () => {
    it("Return the shifted value.", () => {
      expect(src.rightShift(0b0010, 1)).to.equal(0b0001);
      expect(src.rightShift(0b1011000, 3)).to.equal(0b1011);
    });
  });


  describe("6. Write a function that sets the 0th bit in a value.", () => {
    it("Return the new value.", () => {
      expect(src.set0thBit(0b1110)).to.equal(0b1111);
    });
  });


  describe("7. Write a function that sets the 7th bit in a value.", () => {
    it("Return the new value.", () => {
      expect(src.set7thBit(0b00110011)).to.equal(0b10110011);
    });
  });


  describe("8. Write a function that sets both the 3rd and 4th bits in a value.", () => {
    it("Return the new value.", () => {
      expect(src.set3rdAnd4thBits(0b10100101)).to.equal(0b10111101);
    });
  });


  describe("9. Write a function that logical-ors two values together.", () => {
    it("Return the new value.", () => {
      expect(src.logicalOr(0b01011010, 0b10100101)).to.equal(0b11111111);
    });
  });


  describe("10. Write a function that logical-ands two values together.", () => {
    it("Return the new value.", () => {
      expect(src.logicalAnd(0b01011010, 0b10100101)).to.equal(0);
      expect(src.logicalAnd(0b01101, 0b0100)).to.equal(0b0100);
    });
  });


  describe("11. Write a function that counts the number of positive bits that are set.", () => {
    it("Return the count.", () => {
      expect(src.howManyPositiveBitsSet(0b01011101)).to.equal(5);
      expect(src.howManyPositiveBitsSet(0b01001101100000111000010000011001)).to.equal(12);
    });
  });


  describe("12. Write a function that returns the byte in the n position of a value.", () => {
    it("Return the byte at given position.", () => {
      expect(src.getByteN(0b00000001001101010110000101110101, 0)).to.equal(0b01110101);
      expect(src.getByteN(0b00000001001101010110000101110101, 1)).to.equal(0b01100001);
      expect(src.getByteN(0b00000001001101010110000101110101, 2)).to.equal(0b00110101);
      expect(src.getByteN(0b00000001001101010110000101110101, 3)).to.equal(0b00000001);
    });
  });


  describe("13. Write a function to rotate a value left n-number of times.", () => {
    it("Return the rotated value.", () => {
      expect(src.leftRotate8Bits(0b01101111, 1)).to.equal(0b11011110);
      expect(src.leftRotate8Bits(0b01101111, 3)).to.equal(0b01111011);
    });
  });


  describe("14. Write a function to rotate a value right n-number of times.", () => {
    it("Return the rotated value.", () => {
      expect(src.rightRotate8Bits(0b01101111, 1)).to.equal(0b10110111);
      expect(src.rightRotate8Bits(0b01101111, 3)).to.equal(0b11101101);
    });
  });


  describe("15. Write a function that returns the parity of a value.", () => {
    it("Return the parity result.", () => {
      expect(src.whichParity(0b1011)).to.equal(1);
      expect(src.whichParity(0b0110)).to.equal(0);
    });
  });


  describe("16. Write a function to convert an integer into a binary string.", () => {
    it("Return the strong of 1's and 0's.", () => {
      expect(src.intToBinary(7)).to.equal("111");
      expect(src.intToBinary(174)).to.equal("10101110");
      expect(src.intToBinary(255)).to.equal("11111111");
    });
  });


  describe("17. Write a function that multiples a number by 2 using only binary operations.", () => {
    it("Return the new value.", () => {
      expect(src.multBy2(7)).to.equal(14);
      expect(src.multBy2(16)).to.equal(32);
    });
  });


  describe("18.  Write a function that divides a number by 2 using only binary operations.", () => {
    it("Return the new value.", () => {
      expect(src.divBy2(14)).to.equal(7);
      expect(src.divBy2(16)).to.equal(8);
    });
  });
});