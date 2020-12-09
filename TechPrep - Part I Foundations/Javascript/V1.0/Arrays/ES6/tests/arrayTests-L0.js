"use strict";


describe("Arrays & Loops - Warmups", function() {
  let src;

  before(function() {
    src = new L0();
  });



  describe(" 1. Generate a Range I", () => {
    let result;

    before(() => {
      result = src.generateRange1();
    });

    it("generateRange1() should return: a non-empty array", () => {
      expect(result).to.not.equal(null);
    });

    it("generateRange1() should return: array of length 173", () => {
      expect(result.length).to.equal(173);
    });

    it("generateRange1() should return an array with: first and last element = -100, 72", () => {
      expect(result[0] === -100 && result[172] === 72).to.equal(true);
    });
  });



  describe(" 2. Generate a Range II", () => {
    let result;

    before(() => {
      result = src.generateRange2();
    });

    it("generateRange2 should return: a non-empty array", () => {
      expect(result).to.not.equal(null);
    });

    it("generateRange2() should return: array of length 143", () => {
      expect(result.length).to.equal(143);
    });

    it("generateRange2() should return an array with: first and last element = -24, 118", () => {
      expect(result[0] === -24 && result[142] === 118).to.equal(true);
    });
  });



  describe(" 3. Generate a Range III", () => {
    let result;

    before(() => {
      result = src.generateRange3();
    });

    it("generateRange3 should return: a non-empty array", () => {
      expect(result).to.not.equal(null);
    });

    it("generateRange3() should return: array of length 176", () => {
      expect(result.length).to.equal(176);
    });

    it("generateRange3() should return an array with: first and last element = 108, -67", () => {
      expect(result[0] === 108 && result[175] === -67).to.equal(true);
    });
  });



  describe(" 4. Generate a Range IV", () => {
    let result;

    before(() => {
      result = src.generateRange4();
    });

    it("generateRange4 should return: a non-empty array", () => {
      expect(result).to.not.equal(null);
    });

    it("generateRange4() should return: array of length 76", () => {
      expect(result.length).to.equal(76);
    });

    it("generateRange4() should return an array with: first and last element = -8, 67", () => {
      expect(result[0] === 67 && result[75] === -8).to.equal(true);
    });
  });



  describe(" 5. Generate Multiples of 5", () => {
    let result;

    before(() => {
      result = src.generateMultiplesOf5();
    });

    it("generateMultiplesOf5() should return: a non-empty array", () => {
      expect(result).to.not.equal(null);
    });

    it("generateMultiplesOf5() should return: array of length 31", () => {
      expect(result.length).to.equal(31);
    });

    it("generateMultiplesOf5() should return an array with: first and last element = -35, 115", () => {
      expect(result[0] === -35 && result[30] === 115).to.equal(true);
    });
  });



  describe(" 6. Generate Multiples of 3", () => {
    let result;

    before(() => {
      result = src.generateMultiplesOf3();
    });

    it("generateMultiplesOf3() should return: 33", () => {
      expect(result).to.equal(33);
    });
  });



  describe(" 7. Generate Multiples of 3 Without Using an Array", () => {
    let result;

    before(() => {
      result = src.generateMultiplesOf3NoArray();
    });

    it("generateMultiplesOf3NoArray() should return: 33", () => {
      expect(result).to.equal(33);
    });
  });



  describe(" 8. Generate Multiples of 3 Using No Array and Fewest Iterations Possible", () => {
    let result;

    before(() => {
      result = src.generateMultiplesOf3FewestPossible();
    });

    it("generateMultiplesOf3FewestPossible() should return: 33", () => {
      expect(result).to.equal(33);
    });
  });



  describe(" 9. Generate Multiples of 3 or 5", () => {
    let result;

    before(() => {
      result = src.generateMultiplesOf3Or5();
    });

    it("generateMultiplesOf3Or5() should return: 33", () => {
      expect(result).to.not.equal(null);
    });
  });



  describe("10. Surprise Me!", () => {
    let result;

    before(() => {
      result = src.surpriseMe(7);
    });

    it("surpriseMe(7) should return: a non-empty array", () => {
      expect(result).to.not.equal(null);
    });

    it("surpriseMe(7) should return: array of length 29", () => {
      expect(result.length).to.equal(29);
    });

    it("surpriseMe(7) should return an array with: first and last element = 196, 0", () => {
      expect(result[0] === 196 && result[28] === 0).to.equal(true);
    });
  });



  describe("11. Combine 2 Arrays!", () => {
    let result;
    let input1;
    let input2;

    before(() => {
      input1 = [4, 6, 2, 1, 9, 3, 10];
      input2 = [1, 3, 7, 8];

      result = src.combineArrays(input1, input2);
    });

    it("test array `input1` should default to [4, 6, 2, 1, 9, 3, 10]", () => {
      expect(input1).to.eql([4, 6, 2, 1, 9, 3, 10]);
    });

    it("test array `input2` should default to [1, 3, 7, 8]", () => {
      expect(input2).to.eql([1, 3, 7, 8]);
    });

    it("combineArrays(input1) should return: a non-empty array", () => {
      expect(result).to.not.equal(null);
    });

    it("combineArrays(input1) should return: [4, 6, 2, 1, 9, 3, 10, 1, 3, 7, 8]", () => {
      expect(result).to.eql([4, 6, 2, 1, 9, 3, 10, 1, 3, 7, 8]);
    });
  });



  describe("12. Array Contains Value!", () => {
    let input1;
    let input2;

    before(() => {
      input1 = [0, 2, 8, 9, 11, 21, 50];
      input2 = [1, 8, 5, 4, 2, 16, 91];
    });

    it("test array `input1` should default to [0, 2, 8, 9, 11, 21, 50]", () => {
      expect(input1).to.eql([0, 2, 8, 9, 11, 21, 50]);
    });

    it("test array `input2` should default to [1, 8, 5, 4, 2, 16, 91]", () => {
      expect(input2).to.eql([1, 8, 5, 4, 2, 16, 91]);
    });

    it("contains(input1, 11 should return: true", () => {
      expect(src.contains(input1, 11)).to.equal(true);
    });

    it("contains(input2, 44) should return: false", () => {
      expect(src.contains(input1, 44)).to.equal(false);
    });
  });



  describe("13. Temperature I", () => {
    it("celsiusToFahrenheit(-1.11) should return: 30", () => {
      expect(~~src.celsiusToFahrenheit(-1.11)).to.equal(30); // <== ~~ strips the decimal
    });

    it("fahrenheitToCelsius(50) should return: 10", () => {
      expect(src.fahrenheitToCelsius(50)).to.equal(10);
    });
  });



  describe("14. Temperature II", () => {
    it("temperatureMatcher() should return: -40", () => {
      expect(src.temperatureMatcher()).to.equal(-40);
    });
  });



  describe("15. At Odds!", () => {
    let input1;
    let input2;

    before(() => {
      input1 = [1, 2, 4, 6, 7, 8, 9, 18, 23, 55, 68, 70, 88, 89, 91, 98, 99, 100];
      input2 = [4, 6, 2, 1, 9, 3, 10];
    });

    it("test array `input1` should default to [1, 2, 4, 6, 7, 8, 9, 18, 23, 55, 68, 70, 88, 89, 91, 98, 99, 100]", () => {
      expect(input1).to.eql([1, 2, 4, 6, 7, 8, 9, 18, 23, 55, 68, 70, 88, 89, 91, 98, 99, 100]);
    });

    it("test array `input2` should default to [4, 6, 2, 1, 9, 3, 10]", () => {
      expect(input2).to.eql([4, 6, 2, 1, 9, 3, 10]);
    });

    it("extractAllOdds(input1) should return: [99,91,89,55,23,9,7,1]", () => {
      expect(src.extractAllOdds(input1)).to.eql([99,91,89,55,23,9,7,1]);
    });

    it("extractAllOdds(input2) should return: [3,9,1]", () => {
      expect(src.extractAllOdds(input2)).to.eql([3,9,1]);
    });
  });


  describe("BONUS #1: Multiples of 3 And 5", () => {
    it("bonusMultiplesOf3And5(22, 79) should return: [30, 45, 60, 75]", () => {
      expect(src.bonusMultiplesOf3And5(22, 79)).to.eql([30, 45, 60, 75]);
    });

    it("bonusMultiplesOf3And5(79, 22) should return: [30, 45, 60, 75]", () => {
      expect(src.bonusMultiplesOf3And5(79, 22)).to.eql([30, 45, 60, 75]);
    });
  });


  describe("BONUS #2: Multiples of Range Using Fewest Possible Iterations", () => {
    it("bonusMultiplesOfRangeUsingFewest(13, 79, 5) should return: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]", () => {
      expect(src.bonusMultiplesOfRangeUsingFewest(13,79,5)).to.eql([15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]);
    });

    it("bonusMultiplesOfRangeUsingFewest(79, 13, 5) should return: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]", () => {
      expect(src.bonusMultiplesOfRangeUsingFewest(79,13,5)).to.eql([15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]);
    });
  });


  describe("BONUS #3: Multiples of Range Using Fewest Possible Iterations, Backwards", () => {
    it("bonusMultiplesOfRangeUsingFewestBackwards(29,17,3) should return: [27,24,21,18]", () => {
      expect(src.bonusMultiplesOfRangeUsingFewestBackwards(29,17,3)).to.eql([27,24,21,18]);
    });

    it("bonusMultiplesOfRangeUsingFewestBackwards(17,29,3) should return: [27,24,21,18]", () => {
      expect(src.bonusMultiplesOfRangeUsingFewestBackwards(17,29,3)).to.eql([27,24,21,18]);
    });
  });


  describe("BONUS #4: Multiples of Range Using Computation", () => {
    it("bonusMultiplesOfRangeComputation(29,17,3) should return: 4", () => {
      expect(src.bonusMultiplesOfRangeComputation(29,17,3)).to.equal(4);
    });

    it("bonusMultiplesOfRangeComputation(17,29,3) should return: 4", () => {
      expect(src.bonusMultiplesOfRangeComputation(17,29,3)).to.equal(4);
    });

    it("bonusMultiplesOfRangeComputation(13,79,5) should return: 13", () => {
      expect(src.bonusMultiplesOfRangeComputation(13,79,5)).to.equal(13);
    });

    it("bonusMultiplesOfRangeComputation(79,13,5) should return: 13", () => {
      expect(src.bonusMultiplesOfRangeComputation(79,13,5)).to.equal(13);
    });

    it("bonusMultiplesOfRangeComputation(-1,13,3) should return: null", () => {
      expect(src.bonusMultiplesOfRangeComputation(-1,13,3)).to.equal(null);
    });
  });


  describe("BONUS #5: Combine Arrays, Interleaved I", () => {
    let input1;
    let input2;

    before(() => {
      input1 = [4, 6, 2, 1, 9, 3, 10];
      input2 = [1, 3, 7, 8];
    });

    it("test array `input1` should default to [4, 6, 2, 1, 9, 3, 10]", () => {
      expect(input1).to.eql([4, 6, 2, 1, 9, 3, 10]);
    });

    it("test array `input2` should default to [1, 3, 7, 8]", () => {
      expect(input2).to.eql([1, 3, 7, 8]);
    });

    it("bonusCombineArraysInterleaved(input1, input2) should return: [4, 1, 6, 3, 2, 7, 1, 8, 9, 3, 10]", () => {
      expect(src.bonusCombineArraysInterleaved(input1, input2)).to.eql([4, 1, 6, 3, 2, 7, 1, 8, 9, 3, 10]);
    });

    it("bonusCombineArraysInterleaved(input2, input1) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved(input2, input1)).to.equal(null);
    });

    it("bonusCombineArraysInterleaved(null, input2) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved(null, input2)).to.equal(null);
    });

    it("bonusCombineArraysInterleaved(input1, null) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved(input1, null)).to.equal(null);
    });

    it("bonusCombineArraysInterleaved([], input2) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved([], input2)).to.equal(null);
    });

    it("bonusCombineArraysInterleaved(input1, []) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved(input1, [])).to.equal(null);
    });
  });


  describe("BONUS #6: Combine Arrays, Interleaved II", () => {
    let input1;
    let input2;
    let input3;
    let input4;

    before(() => {
      input1 = [4, 6, 2, 1, 9, 3, 10];
      input2 = [1, 3, 7, 8];
      input3 = [1, 9, 8, 4, 5, 5];
      input4 = [7, 8, 2, 0, 11, 6, 12, 34];
    });

    it("test array `input1` should default to [4, 6, 2, 1, 9, 3, 10]", () => {
      expect(input1).to.eql([4, 6, 2, 1, 9, 3, 10]);
    });

    it("test array `input2` should default to [1, 3, 7, 8]", () => {
      expect(input2).to.eql([1, 3, 7, 8]);
    });

    it("test array `input3` should default to [1, 9, 8, 4, 5, 5]", () => {
      expect(input3).to.eql([1, 9, 8, 4, 5, 5]);
    });

    it("test array `input4` should default to [7, 8, 2, 0, 11, 6, 12, 34]", () => {
      expect(input4).to.eql([7, 8, 2, 0, 11, 6, 12, 34]);
    });

    it("bonusCombineArraysInterleaved2(input1, input2) should return: [4, 1, 6, 3, 2, 7, 1, 8, 9, 3, 10]", () => {
      expect(src.bonusCombineArraysInterleaved2(input1, input2)).to.eql([4, 1, 6, 3, 2, 7, 1, 8, 9, 3, 10]);
    });

    it("bonusCombineArraysInterleaved2(input3, input4) should return: [1, 7, 9, 8, 8, 2, 4, 0, 5, 11, 5, 6, 12, 34]", () => {
      expect(src.bonusCombineArraysInterleaved2(input3, input4)).to.eql([1, 7, 9, 8, 8, 2, 4, 0, 5, 11, 5, 6, 12, 34]);
    });

    it("bonusCombineArraysInterleaved2(null, input2) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved2(null, input2)).to.equal(null);
    });

    it("bonusCombineArraysInterleaved2(input1, null) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved2(input1, null)).to.equal(null);
    });

    it("bonusCombineArraysInterleaved2([], input2) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved2([], input2)).to.equal(null);
    });

    it("bonusCombineArraysInterleaved2(input1, []) should return: null", () => {
      expect(src.bonusCombineArraysInterleaved2(input1, [])).to.equal(null);
    });
  });
});