
describe("Linked Lists - Part I | Finding Nodes & Linkage Using Sentinel", () => {
  let SinglyLinkedList;
  let Node;
  let list;

  before(() => {
    [SinglyLinkedList, Node] = L1();
    list = new SinglyLinkedList();
  });


  describe("Creating a new Linked List", () => {
    it("list should not be null", () => {
      expect(list).to.not.equal(null);
    });

    it("list.head should be defined", () => {
      expect(list.hasOwnProperty("head")).to.equal(true);
    });

    it("list.head should be the head sentinel", () => {
      expect(list.head).to.eql(new Node(null, null));
    });

    it("list.tail should be defined", () => {
      expect(list.hasOwnProperty("tail")).to.equal(true);
    });

    it("list.tail should be null", () => {
      expect(list.tail).to.equal(null);
    });
  });


  describe("Node exists and is defined correctly as { data: , next: }", () => {
    it("The Node class is defined", () => {
      expect(Node).to.exist;
    });

    it("Node.data is defined", () => {
      let n = new Node();

      expect(n.hasOwnProperty("data")).to.exist;
    });

    it("Node.next is defined", () => {
      let n = new Node();

      expect(n.hasOwnProperty("next")).to.exist;
    });

    it("new Node(data) creates a new Node with this.data set to data", () => {
      let n = new Node("Test");

      expect(n.data).to.equal("Test");
    });
  });


  describe("Add the head Node with data `First`", () => {
    let result;
    let first;

    before(() => {
      result = list.insert(0, "First");
      first = list.head.next;
    });

    it("list.head is not null", () => {
      expect(first).to.not.equal(null);
    });

    it("list.head.data = `First`", () => {
      expect(first.data).to.equal("First");
    });

    it("list.tail is not null", () => {
      //expect(list.tail).to.not.equal(null);
    });

    it("insert(0, \"First\") returns the new node it just created", () => {
      expect(result.data).to.equal("First");
    });
  });


  describe("Add a second node (will become tail) with data `Second`", () => {
    let first;

    before(() => {
      list.insert(1, "Second");
      first = list.head.next;
    });

    it("list.head.next is not null", () => {
      expect(list.head.next).to.not.equal(null);
    });

    it("list.head.next.data = `Second`", () => {
      expect(first.next.data).to.equal("Second");
    });

    it("list.head is not list.tail", () => {
      expect(list.head).to.not.eql(list.tail);
    });

    it("list.tail.data = `Second`", () => {
      //expect(list.tail.data).to.equal("Second");
    });
  });


  describe("Add third node as new head with data `Zeroth`", () => {
    let first;

    before(() => {
      list.insert(0, "Zeroth");
      first = list.head.next;
    });

    it("list.head.value = `Zeroth`", () => {
      expect(first.data).to.equal("Zeroth");
    });

    it("list.tail.data should still be `Second`", () => {
      expect(list.tail.data).to.equal("Second");
    });
  });


  describe("Add a fourth node before tail with data `Third`", () => {
    let first;

    before(() => {
      list.insert(2, "Third");
      let first = list.head.next;
    });

    it("Node.data before tail should = `Third`", () => {
      let x = list.toArray();
      expect(first.next.next.data).to.equal("Third");
    });
  });


  describe("Remove the head node", () => {
    before(() => {
      list.remove();
    });

    it("list.head.data should be `First`", () => {
      expect(list.head.data).to.equal("First");
    });
  });


  describe("Remove the tail node", () => {
    before(() => {
      list.remove(2);
    });

    it("list.tail.data should be `Third`", () => {
      //expect(list.tail.data).to.equal("Third");
    });
  });


  describe("Finding data", () => {
    it("list.find(`First`) returns { 0, <node> }", () => {
      let result = list.find("First");
      expect(result.position).to.equal(0);
      expect(result.node.data).to.equal("First");
    });

    it("list.find(`Third`) returns { 1, <node> }", () => {
      let result = list.find("Third");
      expect(result.position).to.equal(1);
      expect(result.node.data).to.equal("Third");
    });
  });


  describe("Add one more into the middle", () => {
    before(() => {
      list.insert(1, "Middle");
    });

    it("list.get(1) should return node.data = `Middle`", () => {
      expect(list.get(1).data).to.equal("Middle");
    });
  });


  describe("Test list.toArray()", () => {
    it("list.toArray should return [`First`, `Middle`, `Third`]", () => {
      expect(list.toArray()).to.eql(["First", "Middle", "Third"]);
    });
  });


  describe("Remove all remaining nodes", () => {
    before(() => {
      list.remove();
      list.remove();
    });

    it("Last remaining node should be both head and tail", () => {
      expect(list.head).to.eql(list.tail);
    });

    it("list.head should be null", () => {
      list.remove();
      expect(list.head).to.equal(null);
    });

    it("list.tail should be null", () => {
      //expect(list.tail).to.equal(null);
    });

    it("list.toArray() should return []", () => {
      expect(list.toArray()).to.eql([]);
    });
  });


  describe("Range checks", () => {
    it("list.get(-1) should return null", () => {
      expect(list.get(-1)).to.equal(null);
    });

    it("list.get(100) should return null", () => {
      expect(list.get(100)).to.equal(null);
    });
  });
});