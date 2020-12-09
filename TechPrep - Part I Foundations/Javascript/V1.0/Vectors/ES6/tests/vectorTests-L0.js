
describe("Dynamic Arrays & Vectors - Level 0 | Introduction & Warmups", () => {
  let src;

  before(() => {
    src = new L0();
  });


  describe(" 1. Reverse Array In-Place!", () => {
    let input1;
    let input2;


    before(() => {
      input1 = [1,2,3,4,5,6,7,8,9,10];
      input2 = [1,2,3,4,5,6,7,8,9];
    });


    it("test array `input1` should default to [1,2,3,4,5,6,7,8,9,10]", () => {
      expect(input1).to.eql([1,2,3,4,5,6,7,8,9,10]);
    });

    it("test array `input2` should default to [1,2,3,4,5,6,7,8,9]", () => {
      expect(input2).to.eql([1,2,3,4,5,6,7,8,9]);
    });

    it("reverseArray(input1) should return: [10,9,8,7,6,5,4,3,2,1]", () => {
      expect(src.reverseArray(input1)).to.eql([10,9,8,7,6,5,4,3,2,1]);
    });

    it("reverseArray(input2) should return: [9,8,7,6,5,4,3,2,1]", () => {
      expect(src.reverseArray(input2)).to.eql([9,8,7,6,5,4,3,2,1]);
    });
  });


  describe(" 2. Shift Array Elements Right!", () => {
    let input1;
    let input2;


    before(() => {
      input1 = [1,2,3,4,5,6,7,8,9,10];
      input2 = [1,2,3,4,5,6,7,8,9];
    });


    it("test array `input1` should default to [1,2,3,4,5,6,7,8,9,10]", () => {
      expect(input1).to.eql([1,2,3,4,5,6,7,8,9,10]);
    });

    it("test array `input2` should default to [1,2,3,4,5,6,7,8,9]", () => {
      expect(input2).to.eql([1,2,3,4,5,6,7,8,9]);
    });

    it("shiftRight(input1, 7) should return: [1,2,3,4,5,6,7,null,8,9,10]", () => {
      expect(src.shiftRight(input1, 7)).to.eql([1,2,3,4,5,6,7,null,8,9,10]);
    });

    it("shiftRight(input2, 2) should return: [1,2,null,3,4,5,6,7,8,9]", () => {
      expect(src.shiftRight(input2, 2)).to.eql([1,2,null,3,4,5,6,7,8,9]);
    });
  });



  describe(" 3. Shift Array Elements Left!", () => {
    let input1;
    let input2;


    before(() => {
      input1 = [1,2,3,4,5,6,7,8,9,10];
      input2 = [1,2,3,4,5,6,7,8,9];
    });


    it("test array `input1` should default to [1,2,3,4,5,6,7,8,9,10]", () => {
      expect(input1).to.eql([1,2,3,4,5,6,7,8,9,10]);
    });

    it("test array `input2` should default to [1,2,3,4,5,6,7,8,9]", () => {
      expect(input2).to.eql([1,2,3,4,5,6,7,8,9]);
    });

    it("shiftLeft(input1, 7) should return: [1,2,3,4,5,6,7,9,10,_]", () => {
      expect(src.shiftLeft(input1, 7)).to.eql([1,2,3,4,5,6,7,9,10,undefined]);
    });

    it("shiftLeft(input2, 2) should return: [1,2,4,5,6,7,8,9,_]", () => {
      expect(src.shiftLeft(input2, 2)).to.eql([1,2,4,5,6,7,8,9,undefined]);
    });
  });


  describe(" 4. Shift Array Elements Right and Resize!", () => {
    let input1;
    let input2;


    before(() => {
      input1 = [1,2,3,4];
      input2 = [1,2,3,4,5,6,7,8];
    });


    it("test array `input1` should default to [1,2,3,4]", () => {
      expect(input1).to.eql([1,2,3,4]);
    });

    it("test array `input2` should default to [1,2,3,4,5,6,7,8]", () => {
      expect(input2).to.eql([1,2,3,4,5,6,7,8]);
    });

    it("shiftRightAndResize(input1, 2) should return: [1,2,null,3,4,_,_,_]", () => {
      expect(src.shiftRightAndResize(input1, 2)).to.eql([1,2,null,3,4,undefined,undefined,undefined]);
    });

    it("shiftRightAndResize(input2, 7) should return: [1,2,3,4,5,6,7,null,8, _, _, _, _, _, _, _]", () => {
      expect(src.shiftRightAndResize(input2, 7)).to.eql([1,2,3,4,5,6,7,null,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined]);
    });
  });



  describe(" 5. Shift Array Elements Left and Resize!", () => {
    let input1;
    let input2;


    before(() => {
      input1 = [1,2,3,4,5,undefined,undefined,undefined];
      input2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    });


    it("test array `input1` should default to [1,2,3,4,5,_,_,_]", () => {
      expect(input1).to.eql([1,2,3,4,5,undefined,undefined,undefined]);
    });

    it("test array `input2` should default to [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]", () => {
      expect(input2).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
    });

    it("shiftLeftAndResize(input1, 2) should return: [1,2,3,_]", () => {
      let result;
      let count = 8;

      for (let i=0; i<4; i++) {
        result = src.shiftLeftAndResize(input1, --count, 2);
      }

      expect(result).to.eql([1,2,3,undefined]);
    });

    it("shiftLeftAndResize(input2, 9) should return: [1,2,3,4,5,6,7,8]", () => {
      let result;
      let count = 16;

      for (let i=0; i<8; i++) {
        result = src.shiftLeftAndResize(input2, --count, 9);
      }

      expect(result).to.eql([1,2,3,4,5,6,7,8]);
    });
  });
});