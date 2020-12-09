

describe("Recursion - Introduction", () => {
  let code;
  let util;

  before(() => {
    code = new L0();
  });

  beforeEach(() => {
    util = consoleHook_initialize();
  });

  afterEach(() => {
    util.terminate();
  });


  it("1. Count from 1 to N.", () => {
    code.from1ToN(5);

    expect(util.read()).to.equal(1);
    expect(util.read()).to.equal(2);
    expect(util.read()).to.equal(3);
    expect(util.read()).to.equal(4);
    expect(util.read()).to.equal(5);
  });


  it("2. Count from N to 1.", () => {
    code.fromNTo1(5);

    expect(util.read()).to.equal(5);
    expect(util.read()).to.equal(4);
    expect(util.read()).to.equal(3);
    expect(util.read()).to.equal(2);
    expect(util.read()).to.equal(1);
  });


  it("3. Count from X to Y.", () => {
    code.fromXtoY(5, 10);

    expect(util.read()).to.equal(5);
    expect(util.read()).to.equal(6);
    expect(util.read()).to.equal(7);
    expect(util.read()).to.equal(8);
    expect(util.read()).to.equal(9);
    expect(util.read()).to.equal(10);
  });


  it("4. Count Length of Array.", () => {
    let result = code.getLengthOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result).to.equal(10);
  });


  it("5. Calculate sum of array of numbers.", () => {
    let result = code.sumOfArray([1,2,3,4]);
    expect(result).to.equal(10);
  });


  it("6. Calculate the average of array of numbers.", () => {
    let result = code.averageOfArray([23, 17, 23, 42, 8, 2, 73, 101, 83, 92]);
    expect(result).to.equal(46.4);
  });


  it("7. Calculate the sum of all even values in an array.", () => {
    let result = code.sumOfEvens([1,2,3,4,5,6,7,8]);
    expect(result).to.equal(20);
  });


  it("8. Return the number of digits in a number.", () => {
    let result = code.numberOfDigits(13028);
    expect(result).to.equal(5);
  });


  it("9. Return whether a number contains another number.", () => {
    let result = code.nContainsK(13250, 5);
    expect(result).to.equal(true);

    result = code.nContainsK(13250, 4);
    expect(result).to.equal(false);
  });


  it("10. Return the X to the power of Y.", () => {
    let result = code.power(2, 4);
    expect(result).to.equal(16);
  });
});