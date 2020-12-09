"use strict";


describe("Arrays & Loops - Level 1", function() {
  let src;

  before(function() {
    src = new L1();
  });

  describe(" 1. fillArray", () => {
    let input;

    beforeEach(() => {
      input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    });

    it("test array `input` should default to [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
      expect(input).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("fillArray(input, 0) should return: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]", () => {
      expect(src.fillArray(input, 0)).to.eql([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it("fillArray(input, 5) should return: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]", () => {
      expect(src.fillArray(input, 5)).to.eql([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
    });
  });



  describe(" 2. sum", () => {
    let input;

    beforeEach(() => {
      input = [1, 2, 3, 4, 5, 6, 7, 8];
    });

    it("test array `input` should default to: [1, 2, 3, 4, 5, 6, 7, 8]", () => {
      expect(input).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it("sum(input) should return: 36", () => {
      expect(src.sum(input)).to.equal(36);
    });
  });



  describe(" 3. average", () => {
    let input;

    beforeEach(() => {
      input = [23, 17, 23, 42, 8, 2, 73, 101, 83, 92];
    });

    it("test array `input` should default to: [23, 17, 23, 42, 8, 2, 73, 101, 83, 92]", () => {
      expect(input).to.eql([23, 17, 23, 42, 8, 2, 73, 101, 83, 92]);
    });

    it("average(input) should return: 46.4", () => {
      expect(src.average(input)).to.equal(46.4);
    });
  });



  describe(" 4. median", () => {
    let input1;
    let input2;
    let input3;

    beforeEach(() => {
      input1 = [1,2,4,4,6,7,8,9,12];
      input2 = [4,5,9,10,11,15,22,20,21,21];
      input3 = [10.1, 9.99, 12.32, 17.86, 9.1, 0];
    });

    it("test array `input1` should default to: [1,2,4,4,6,7,8,9,12]", () => {
      expect(input1).to.eql([1,2,4,4,6,7,8,9,12]);
    });

    it("test array `input2` should default to: [4,5,9,10,11,15,22,20,21,21]", () => {
      expect(input2).to.eql([4,5,9,10,11,15,22,20,21,21]);
    });

    it("test array `input3` should default to: [10.1, 9.99, 12.32, 17.86, 9.1, 0]", () => {
      expect(input3).to.eql([10.1, 9.99, 12.32, 17.86, 9.1, 0]);
    });

    it("median(input1) should return: 6", () => {
      expect(src.median(input1)).to.equal(6);
    });

    it("median(input2) should return: 13", () => {
      expect(src.median(input2)).to.equal(13);
    });

    it("median(input3) should return: 10.045", () => {
      expect(src.median(input3.sort(numberSort))).to.equal(10.045);

      function numberSort(a, b) {
        return a - b;
      }
    });
  });



  describe(" 5. findIndex", () => {
    let input;

    beforeEach(() => {
      input = ["zero", "one", "two", "three", "four", "five"];
    });

    it("test array `input` should default to: [\"zero\", \"one\", \"two\", \"three\", \"four\", \"five\"]", () => {
      expect(input).to.eql(["zero", "one", "two", "three", "four", "five"]);
    });

    it("findIndex(input, \"three\") should return: 3", () => {
      expect(src.findIndex(input, "three")).to.equal(3);
    });
  });



  describe(" 6. findNthLastOdd", () => {
    let input;

    beforeEach(() => {
      input = [4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2];
    });

    it("test array `input` should default to: [4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2]", () => {
      expect(input).to.eql([4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2]);
    });

    it("findNthLastOdd(input, 1) should return: 11", () => {
      expect(src.findNthLastOdd(input, 1)).to.equal(11);
    });

    it("findNthLastOdd(input, 2) should return: 9", () => {
      expect(src.findNthLastOdd(input, 2)).to.equal(9);
    });

    it("findNthLastOdd(input, 4) should return: 1", () => {
      expect(src.findNthLastOdd(input, 4)).to.equal(1);
    });

    it("findNthLastOdd(input, 18) should return: null", () => {
      expect(src.findNthLastOdd(input, 18)).to.equal(null);
    });
  });



  describe(" 7. getRangeInclusive", () => {
    let input;

    beforeEach(() => {
      input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });

    it("test array `input` should default to: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
      expect(input).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("getRangeInclusive(input, 1, 5) should return: [2, 3, 4, 5, 6]", () => {
      expect(src.getRangeInclusive(input, 1, 5)).to.eql([2, 3, 4, 5, 6]);
    });

    it("getRangeInclusive(input, 5, 1) should return: [2, 3, 4, 5, 6]", () => {
      expect(src.getRangeInclusive(input, 5, 1)).to.eql([2, 3, 4, 5, 6]);
    });

    it("getRangeInclusive(null, 0, 2) should return: null", () => {
      expect(src.getRangeInclusive(null, 0, 2)).to.equal(null);
    });

    it("getRangeInclusive(input, -2, 3) should return: null", () => {
      expect(src.getRangeInclusive(input, -2, 3)).to.equal(null);
    });

    it("getRangeInclusive(input, 3, -2) should return: null", () => {
      expect(src.getRangeInclusive(input, 3, -2)).to.equal(null);
    });

    it("getRangeInclusive(input, 9, 14) should return: [10]", () => {
      expect(src.getRangeInclusive(input, 9, 14)).to.eql([10]);
    });
  });



  describe(" 8. getAverageOfRange", () => {
    let input;

    beforeEach(() => {
      input = [0, 1, 2, 3, 4, 5, 10, 15, 23, 54, 22, 1, 8, 4, 2, 2, 2, 0, 1];
    });

    it("test array `input` should default to: [0, 1, 2, 3, 4, 5, 10, 15, 23, 54, 22, 1, 8, 4, 2, 2, 2, 0, 1]", () => {
      expect(input).to.eql([0, 1, 2, 3, 4, 5, 10, 15, 23, 54, 22, 1, 8, 4, 2, 2, 2, 0, 1]);
    });

    it("getAverageOfRange(input, 5, 9) should return: 21.4", () => {
      expect(src.getAverageOfRange(input, 5, 9)).to.equal(21.4);
    });
  });



  describe(" 9. copyArray", () => {
    let input;

    beforeEach(() => {
      input = [0, 10, 20, 30, 35, 55, 75, 100];
    });

    it("test array `input` should default to: [0, 10, 20, 30, 35, 55, 75, 100]", () => {
      expect(input).to.eql([0, 10, 20, 30, 35, 55, 75, 100]);
    });

    it("copyArray(input) should return: [0, 10, 20, 30, 35, 55, 75, 100]", () => {
      expect(src.copyArray(input)).to.eql([0, 10, 20, 30, 35, 55, 75, 100]);
    });
  });



  describe("10. swapWithinArray", () => {
    let input;

    beforeEach(() => {
      input = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
    });

    it("test array `input` should default to: [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]", () => {
      expect(input).to.eql([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
    });

    it("swap(input, 1, 11) should have swapped and returned: [1, 31, 3, 5, 7, 11, 13, 17, 19, 23, 29, 2, 37]", () => {
      expect(src.swapWithinArray(input, 1, 11)).to.eql([1, 31, 3, 5, 7, 11, 13, 17, 19, 23, 29, 2, 37]);
    });
  });



  describe("11. expandArray", () => {
    let input1;
    let input2;
    let u;


    beforeEach(() => {
      input1 = [1, 2, 3, 4, 5, 6];
      input2 = new Array(12);
      u = undefined;
    });


    it("test array `input1` should default to: [1, 2, 3, 4, 5, 6]", () => {
      expect(input1).to.eql([1, 2, 3, 4, 5, 6]);
    });

    it("test array `input2` should default to: [undefined, x12]", () => {
      expect(input2).to.eql([u, u, u, u, u, u, u, u, u, u, u, u]);
    });

    it("expandArray(input1, input2) should return: [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0]", () => {
      expect(src.expandArray(input1, input2)).to.eql([1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0]);
    });
  });

});