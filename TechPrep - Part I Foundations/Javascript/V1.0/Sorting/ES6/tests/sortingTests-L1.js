
describe("Sorting - Part I", () => {
  let sorts;

  before(() => {
    sorts = new L1();
  });


  describe("Bubble Sort", () => {
    let input;
    let output;

    let result;
    let count;

    beforeEach(() => {
      input =  [12,2,4,6,7,21,9,13];
      output = [2,4,6,7,9,12,13,21];
    });

    afterEach(() => {
      input = [];
      output = [];
    });

    it("bubbleSort should properly sort", () => {
      [result, count] = sorts.bubbleSort(input);
      expect(result).to.eql(output);
    });

    it("[My implementation of] bubbleSort completed with 14 operations", () => {
      expect(count).to.equal(14);
    });

    it("bubbleSortOptimized should properly sort with fewer operations", () => {
      [result, count] = sorts.bubbleSortOptimized(input);
      expect(result).to.eql(output);
    });

    it("[My implementation of] bubbleSortOptimized completed with 9 operations.  If yours doesn't, check to see if it at least uses fewer cycles.", () => {
      expect(count).to.equal(9);
    });
  });


  describe("Selection Sort", () => {
    let input;
    let output;

    let result;
    let count;

    beforeEach(() => {
      input = [12, 2, 4, 6, 7, 21, 9, 13];
      output = [2, 4, 6, 7, 9, 12, 13, 21];
    });

    afterEach(() => {
      input = [];
      output = [];
    });

    it("selectionSort should properly sort", () => {
      [result, count] = sorts.selectionSort(input);
      expect(result).to.eql(output);
    });

    it("[My implementation of] selectionSort completed with 15 operations", () => {
      expect(count).to.equal(15);
    });
  });


  describe("Insertion Sort", () => {
    let input;
    let output;

    let result;
    let count;

    beforeEach(() => {
      input = [12, 2, 4, 6, 7, 21, 9, 13];
      output = [2, 4, 6, 7, 9, 12, 13, 21];
    });

    afterEach(() => {
      input = [];
      output = [];
    });

    it("insertionSort should properly sort", () => {
      [result, count] = sorts.insertionSort(input);
      expect(result).to.eql(output);
    });

    it("[My implementation of] selectionSort completed with 14 operations", () => {
      expect(count).to.equal(14);
    });
  });


  describe("Merge Sort", () => {
    let input;
    let output;

    let result;
    let count;

    beforeEach(() => {
      input = [12, 2, 4, 6, 7, 21, 9, 13];
      output = [2, 4, 6, 7, 9, 12, 13, 21];
    });

    afterEach(() => {
      input = [];
      output = [];
    });

    it("mergeSort should properly sort", () => {
      result = sorts.mergeSort(input);
      expect(result).to.eql(output);
    });

    // TODO: Add counts
    //it("[My implementation of] selectionSort completed with 14 operations", () => {
    //  expect(count).to.equal(14);
    //});
  });


  describe("Quick Sort", () => {
    let input;
    let output;

    let result;
    let count;

    beforeEach(() => {
      input = [12, 2, 4, 6, 7, 21, 9, 13, 44];
      output = [2, 4, 6, 7, 9, 12, 13, 21, 44];
    });

    afterEach(() => {
      input = [];
      output = [];
    });

    it("quickSort should properly sort", () => {
      result = sorts.quickSort(input, 0, input.length - 1);
      expect(result).to.eql(output);
    });
  });
});