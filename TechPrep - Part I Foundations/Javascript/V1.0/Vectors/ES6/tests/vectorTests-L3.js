
describe("Dynamic Arrays & Vectors - Part III | Edge cases & Error Handling", () => {
  let Vector;
  let vector;

  before(() => {
    Vector = L3();
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

    it("vector.capacity should be 8", () => {
      let x = vector.capacity;
      expect(vector.capacity).to.eql(8);
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

  describe("Index `Out of Range` exceptions when not empty.", () => {
    it("vector.insert(-5, -5) [before range] should throw exception", () => {
      expect(vector.insert.bind(vector, -5, -5)).to.throw();
    });

    it("vector.insert(20, 20) [after range] should throw exception", () => {
      expect(vector.insert.bind(vector, 20, 20)).to.throw();
    });

    it("vector.insert(9, 20) [immediately after range] should throw exception", () => {
      expect(vector.insert.bind(vector, 9, 20)).to.throw();
    });

    it("vector.remove(-5) [before range] should throw exception.", () => {
      expect(vector.remove.bind(vector, -5)).to.throw();
    });

    it("vector.remove(20) [after range] should throw exception.", () => {
      expect(vector.remove.bind(vector, 20)).to.throw();
    });

    it("vector.get(-1) [before range] should throw exception.", () => {
      expect(vector.get.bind(vector, -1)).to.throw();
    });

    it("vector.set(-1) [before range] should throw exception", () => {
      expect(vector.set.bind(vector, -1)).to.throw();
    });
  });

  describe("Remove all", () => {
    it("vector.length should be 0", () => {
      vector.remove();
      vector.remove();
      vector.remove();
      vector.remove();
      vector.remove();
      vector.remove();
      vector.remove();
      vector.remove();
      vector.remove();

      expect(vector.length).to.equal(0);
    });

    //it("vector.storage should be []", () => {
    //  expect(vector.storage).to.eql([]);
    //});

    it("vector.insert(0, 0) when empty should cause exception", () => {
      expect(vector.insert.bind(vector, 0, 0)).to.throw();
    });
  });

  describe("Expanding beyond max capacity should cause exception", () => {
    it("After adding 16 items, capacity should be 16", () => {
      for (let i=0; i<vector.max; i++) {
        vector.add(i);
      }

      expect(vector.capacity).to.equal(vector.max);
    });

    it("vector.length should be 16", () => {
      expect(vector.length).to.equal(16);
    });

    it("vector.storage.length should be 16", () => {
      expect(vector.storage.length).to.equal(16);
    });

    it("vector.max should be 16", () => {
      expect(vector.max).to.equal(16);
    });

    it("Adding one more beyond max capacity should throw exception", () => {
      expect(vector.add.bind(vector, 100)).to.throw();
    });
  });

  describe("BONUS tests", () => {
    it("vector.find(12) should return its index position: 12", () => {
      expect(vector.find(12)).to.equal(12);
    });

    it("vector.find(100) should return null", () => {
      expect(vector.find(100)).to.equal(null);
    });

    it("vector.contains(12) should return true", () => {
      expect(vector.contains(12)).to.equal(true);
    });

    it("vector.contains(100) should return false", () => {
      expect(vector.contains(100)).to.equal(false);
    });
  });
});