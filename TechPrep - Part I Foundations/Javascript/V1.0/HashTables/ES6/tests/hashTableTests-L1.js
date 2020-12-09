
describe("Hash Tables - Part I", () => {
  let HashTable;
  let hashTable;

  before(() => {
    HashTable = L1();
    hashTable = new HashTable();
  });


  describe("Initialize", () => {
    it("hashTable should not be null", () => {
      expect(hashTable).to.not.equal(null);
    });

    it("hashTable.table should exist", () => {
      expect(hashTable.table).to.exist;
    });

    it("hashTable.length should be 0", () => {
      expect(hashTable.length).to.equal(0);
    });

    it("hashTable.capacity should be 4", () => {
      expect(hashTable.capacity).to.equal(4);
    });
  });

  describe("Add the first item", () => {
    before(() => {
      hashTable.set("8472", "Elvis Presley");
    });

    it("hashTable.length should be 1", () => {
      expect(hashTable.length).to.equal(1);
    });

    it("hashTable.get(`8472`) should return `Elvis Presley`", () => {
      expect(hashTable.get("8472")).to.equal("Elvis Presley");
    });
  });

  describe("Retrieve a value that doesn't exist", () => {
    it("hashTable.get(`1000`) should return null", () => {
      expect(hashTable.get(1000)).to.equal(null);
    });
  });

  describe("Add 1 more", () => {
    before(() => {
      hashTable.set("876", "James Hetfield");
    });

    it("hashTable.length should be 2", () => {
      expect(hashTable.length).to.equal(2);
    });

    it("hashTable.get(`876`) should return `James Hetfield`", () => {
      expect(hashTable.get("876")).to.equal("James Hetfield");
    });
  });

  describe("Remove 1.", () => {
    let removed;

    before(() => {
      removed = hashTable.remove("876");
    });

    it("The entry removed should be `James Hetfield`", () => {
      removed = "James Hetfield";
    });

    it("hashTable.length should be 1", () => {
      expect(hashTable.length).to.equal(1);
    });
  });

  describe("Add `James Hetfield` back", () => {
    before(() => {
      hashTable.set("876", "James Hetfield");
    });

    it("hashTable.length should be 2", () => {
      expect(hashTable.length).to.equal(2);
    });

    it("hashTable.get(`876`) should return `James Hetfield`", () => {
      expect(hashTable.get("876")).to.equal("James Hetfield");
    });
  });

  describe("Force a collision", () => {
    before(() => {
      hashTable.set("9555", "Ozzy  Osbourne");
    });

    it("hashTable.length should be 3", () => {
      expect(hashTable.length).to.equal(3);
    });

    it("hashTable.get(`9555`) should return `Ozzy  Osbourne`", () => {
      expect(hashTable.get("9555")).to.equal("Ozzy  Osbourne");
    });

    it("Ozzy and James are a collision", () => {
      expect(hashTable.table[4].toString()).to.equal("8472,Elvis Presley,9555,Ozzy  Osbourne");
    });
  });


  describe("BONUS: A rehash triggered with the addition of Ozzy", () => {
    it("hashTable.capacity should be 8", () => {
      expect(hashTable.capacity).to.equal(8);
    });
  });

  describe("BONUS: toString()", () => {
    it("hashTable.toString() returns the contents as string", () => {
      expect(hashTable.toString()).to.be.a("string");
    });
  });
});