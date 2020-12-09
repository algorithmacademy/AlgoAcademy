

describe("Recursion - Part II", () => {
  let code;
  let util;

  before(() => {
    code = new L1();
  });

  beforeEach(() => {
    util = consoleHook_initialize();
  });

  afterEach(() => {
    util.terminate();
  });


  it("1. Reverse an Integer.", () => {
    expect(code.reverseInt(233445)).to.equal(544332);
  });


  it ("2. Convert an integer to a binary string.", () => {
    expect(code.intToBinary(7)).to.equal("111");
    expect(code.intToBinary(16)).to.equal("10000");
    expect(code.intToBinary(10)).to.equal("1010");
    expect(code.intToBinary(37)).to.equal("100101");
  });


  it("3. Format any number with commas.", () => {
    expect(code.intWithCommas(123)).to.equal("123");
    expect(code.intWithCommas(1940)).to.equal("1,940");
    expect(code.intWithCommas(2930194)).to.equal("2,930,194");
  });


  it("4. Write N number of Xs on same line.", () => {
    expect(code.logLineWithNXs(3)).to.equal("XXX");
    expect(code.logLineWithNXs(5)).to.equal("XXXXX");
  });


  it("5. Print a triangle with the number lines indicated by N.", () => {
    let depth = 5;

    code.logTriangle(depth);

    let line;

    for (let i=0; i<depth; i++) {
      line = util.read();

      expect(line.length).to.equal(i+1);
    }
  });


  it("6. Print a triangle with the number lines indicated by N in reverse order.", () => {
    let depth = 5;

    code.logTriangleUpsideDown(depth);

    let line;

    for (let i=depth; i>0; i--) {
      line = util.read();

      expect(line.length).to.equal(i);
    }
  });


  it("7. Write a recursive function that reverses an array in-place.", () => {
    expect(code.reverseArray([1,2,3,4,5,6])).to.eql([6,5,4,3,2,1]);
  });


  it("8. Write a recursive function to determine if two arrays are equal.", () => {
    let input1 = [1234567];
    let input2 = [1234567];
    let input3 = [7654321];
    let input4 = [32];

    expect(code.areArraysEqual(input1, input2, input1.length, input2.length)).to.equal(true);
    expect(code.areArraysEqual(input1, input3, input1.length, input3.length)).to.equal(false);
    expect(code.areArraysEqual(input1, input4, input1.length, input4.length)).to.equal(false);
    expect(code.areArraysEqual([], [], 0, 0)).to.equal(true);
  });


  it("9. Write a recursive function that returns the index of the max value in an array of numbers.", () => {
    expect(code.maxValueInArray([1,2,5,2,5,2,19,5,2], 9)).to.equal(6);
  });


  it("10. Write a recursive function that returns whether an array of number is sorted.", () => {
    expect(code.isArraySorted([1,2,3,4,5,6], 5)).to.equal(true);
    expect(code.isArraySorted([1,2,3,5,4,6], 5)).to.equal(false);
  });

  it("11. Write a recursive function to fill a pre-allocated array with increasing numbers from 1 to n.", () => {
    let input = new Array(6);

    expect(code.fillArrayIncreasing(input, input.length)).to.eql([1,2,3,4,5,6]);
  });

  it("12. Write a recursive function to determine if an array is palindrome.", () => {
    expect(code.isPalindrome([1,2,3,4,3,2,1])).to.equal(true);
    expect(code.isPalindrome([1,2,3,3,2,1])).to.equal(true);
    expect(code.isPalindrome([1,2,3,1,2,3])).to.equal(false);
  });

  it("13. Write a recursive function to flatten an array of array of numbers.", () => {
    let input = [1,2,[3,4,[5,6,7]]];
    let output = code.flattenArray(input);

    expect(output).to.eql([1,2,3,4,5,6,7]);
  });
});
