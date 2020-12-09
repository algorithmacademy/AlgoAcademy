
describe("Dynamic Arrays & Vectors - Part I | Array Doubling & Length Management", () => {
  let Vector;
  let vector;

  before(() => {
    Vector = L1();
    vector = new Vector();
  });


  describe("Initialize", () => {
    it("vector.length should be 0", () => {
      expect(vector.length).to.equal(0);
    });

    it("vector.capacity should be 8", () => {
      expect(vector.capacity).to.equal(8);
    });

    it("vector.storage should be [undefined, ... x8]", () => {
      expect(vector.storage.length).to.equal(vector.capacity);
    });
  });

  describe("Add the first 3 items", () => {
    it("vector.length should be 3", () => {
      vector.add(0);
      vector.add(1);
      vector.add(2);

      expect(vector.length).to.equal(3);
    });

    it("vector.toArray() should return [0, 1, 2]", () => {
      expect(vector.toArray()).to.eql([0, 1, 2]);
    });
  });

  describe("Add two more items", () => {
    it("vector.length should be 5", () => {
      vector.add(3);
      vector.add(4);

      expect(vector.length).to.equal(5);
    });

    it("vector.toArray() should return [0, 1, 2, 3, 4]", () => {
      expect(vector.toArray()).to.eql([0, 1, 2, 3, 4]);
    });
  });

  describe("Insert new item at vector[3]", () => {
    it("vector.length should be 6", () => {
      vector.insert(3, 2.5);

      expect(vector.length).to.equal(6);
    });

    it("vector.toArray() should return [0, 1, 2, 2.5, 3, 4]", () => {
      expect(vector.toArray()).to.eql([0, 1, 2, 2.5, 3, 4]);
    });
  });

  describe("Remove item at vector[3]", () => {
    it("vector.length should be 5", () => {
      vector.remove(3);

      expect(vector.length).to.equal(5);
    });

    it("vector.toArray() should return [0, 1, 2, 3, 4]", () => {
      expect(vector.toArray()).to.eql([0, 1, 2, 3, 4]);
    });
  });

  describe("Set vector[2] = 15", () => {
    it ("vector.toArray() should return [0, 1, 15, 3, 4]", () => {
      vector.set(2, 15);

      expect(vector.toArray()).to.eql([0, 1, 15, 3, 4]);
    });

    it("vector.get(2) should return 15", () => {
      expect(vector.get(2)).to.equal(15);
    });
  });

  describe("Add 3 more items", () => {
    it("vector.length should be 8", () => {
      vector.add(5);
      vector.add(6);
      vector.add(7);

      expect(vector.length).to.equal(8);
    });

    it("vector.toArray() should return [0, 1, 15, 3, 4, 5, 6, 7]", () => {
      expect(vector.toArray()).to.eql([0, 1, 15, 3, 4, 5, 6, 7]);
    });
  });

  describe("Add one more item to exceed the capacity", () => {
    it("vector.length should be 9", () => {
      vector.add(8);

      expect(vector.length).to.equal(9);
    });

    it("vector.capacity should be 16", () => {
      expect(vector.capacity).to.equal(16);
    });

    it("vector.toArray() should return [0, 1, 15, 3, 4, 5, 6, 7, 8]", () => {
      expect(vector.toArray()).to.eql([0, 1, 15, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe("Remove from the end using vector.remove() with no parameters", () => {
    it("vector.length should be 8", () => {
      vector.remove();

      expect(vector.length).to.equal(8);
    });

    it("vector.toArray() should return [0, 1, 15, 3, 4, 5, 6, 7]", () => {
      expect(vector.toArray()).to.eql([0, 1, 15, 3, 4, 5, 6, 7]);
    })
  });

  describe("Remove vector[2] using vector.remove(2)", () => {
    it("vector.length should be 7", () => {
      vector.remove(2);

      expect(vector.length).to.eql(7);
    });

    it("vector.toArray() should return [0, 1, 3, 4, 5, 6, 7]", () => {
      expect(vector.toArray()).to.eql([0, 1, 3, 4, 5, 6, 7]);
    });
  });

  describe("Remove the first item using vector.remove(0)", () => {
    it("vector.length should be 6", () => {
      vector.remove(0);

      expect(vector.length).to.equal(6);
    });

    it("vector.capacity should be 16", () => {
      expect(vector.capacity).to.eql(16);
    });

    it("vector.toArray() should return [1, 3, 4, 5, 6, 7]", () => {
      expect(vector.toArray()).to.eql([1, 3, 4, 5, 6, 7]);
    });
  });

  describe("Insert an item at the beginning with vector.insert(0, 0)", () => {
    it("vector.length should be 7", () => {
      vector.insert(0, 0);

      expect(vector.length).to.equal(7);
    });

    it("vector.toArray() should return [0, 1, 3, 4, 5, 6, 7]", () => {
      expect(vector.toArray()).to.eql([0, 1, 3, 4, 5, 6, 7]);
    });
  });

  describe("Remove from the beginning using vector.remove(0)", () => {
    it("vector.length should be 6", () => {
      vector.remove(0);

      expect(vector.length).to.equal(6);
    });

    it("vector.toArray() should return [1, 3, 4, 5, 6, 7]", () => {
      expect(vector.toArray()).to.eql([1, 3, 4, 5, 6, 7]);
    });
  });


  describe("Re-Initialize to test <capacity> and such", () => {
    before(() => {
      vector = new Vector();
    });

    it("vector.length should be 0", () => {
      expect(vector.length).to.equal(0);
    });

    it("vector.capacity should be 8", () => {
      expect(vector.capacity).to.equal(8);
    });

    it("vector.storage should be [undefined, ... x8]", () => {
      expect(vector.storage.length).to.equal(vector.capacity);
    });
  });

  describe("Add the first 6 items", () => {
    it("vector.length should be 6", () => {
      vector.add(0);
      vector.add(1);
      vector.add(2);
      vector.add(3);
      vector.add(4);
      vector.add(5);

      expect(vector.length).to.equal(6);
    });

    it("vector.toArray() should return [0, 1, 2, 3, 4, 5]", () => {
      expect(vector.toArray()).to.eql([0, 1, 2, 3, 4, 5]);
    });
  });

  describe("Insert 1 more via vector.insert(1, 6)", () => {
    it("vector.length should be 7", () => {
      vector.insert(1, 6);

      expect(vector.length).to.equal(7);
    });

    it("vector.storage.length should be 8", () => {
      expect(vector.storage.length).to.equal(8);
    });

    it("vector.toArray() should return [0, 6, 1, 2, 3, 4, 5]", () => {
      expect(vector.toArray()).to.eql([0, 6, 1, 2, 3, 4, 5]);
    });
  });

  describe("Insert 1 more via vector.insert(1, 7)", () => {
    it("vector.length should be 8", () => {
      vector.insert(1, 7);

      expect(vector.length).to.equal(8);
    });

    it("vector.capacity should be 8", () => {
      expect(vector.capacity).to.equal(8);
    });

    it("vector.storage.length should be 8", () => {
      expect(vector.storage.length).to.equal(8);
    });

    it("vector.toArray() should return [0, 7, 6, 1, 2, 3, 4, 5]", () => {
      expect(vector.toArray()).to.eql([0, 7, 6, 1, 2, 3, 4, 5]);
    });
  });

  describe("Insert 1 more via vector.insert(6, 8) to go beyond capacity", () => {
    it("vector.length should be 8", () => {
      vector.insert(6, 8);

      expect(vector.length).to.equal(9);
    });

    it("vector.capacity should be 16", () => {
      expect(vector.capacity).to.equal(16);
    });

    it("vector.storage.length should be 16", () => {
      expect(vector.storage.length).to.equal(16);
    });

    it("vector.toArray() should return [0, 7, 6, 1, 2, 3, 8, 4, 5]", () => {
      expect(vector.toArray()).to.eql([0, 7, 6, 1, 2, 3, 8, 4, 5]);
    });
  });
});