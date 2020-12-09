

describe("Linked Lists - Part 0 | Introduction to Linked Lists", () => {
  let src_p1;
  let src_p2;

  before(() => {
    src_p1 = new L0_P1();
    src_p2 = new L0_P2();
  });


  describe("Defaults are defined and set properly.", () => {
    it("LinkedListNode class exists", () => {
      expect(LinkedListNode).to.exist;
    });

    it(".data property exist.", () => {
      let node = new LinkedListNode();
      expect(node).to.have.property("data");
    });

    it(".next property to exist.", () => {
      let node = new LinkedListNode();
      expect(node).to.have.property("next");
    });

    it("head exists and is defaulted to null", () => {
      expect(head).to.equal(null);
    });

    it("tail exists and is defaulted to null.", () => {
      expect(tail).to.equal(null);
    });
  });



  describe(" 1. Create New Node.", () => {
    let node;

    before(() => {
      node = src_p1.createNewNode("Hello World!");
    });


    it("createNewNode(\"Hello World!\") returns new node.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Hello World!\".", () => {
      expect(node.data).to.equal("Hello World!");
    });

    it("node.next should be: null.", () => {
      expect(node.next).to.equal(null);
    });
  });



  describe(" 2. Create the First Node of a Linked List.", () => {
    let node;

    before(() => {
      head = null;
      node = src_p1.createFirstNode("First Node!");
    });


    it("createFirstNode(\"First Node!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"First Node!\".", () => {
      expect(node.data).to.equal("First Node!");
    });

    it("node.next should be: null.", () => {
      expect(node.next).to.equal(null);
    });

    it("`head` should be set to the node.", () => {
      expect(head).to.eql(node);
    });
  });



  describe(" 3. Create new node and always make it the head node.", () => {
    let node;

    before(() => {
      head = null;
      node = src_p1.createAndInsertFirst("First!");
    });


    it("createAndInsertFirst(\"First!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"First!\".", () => {
      expect(node.data).to.equal("First!");
    });

    it("node.next should be: null.", () => {
      expect(node.next).to.equal(null);
    });

    it("`head` should be set to the node.", () => {
      expect(head).to.eql(node);
    });
  });



  describe("Calling createAndInsertFirst(\"Second!\") again returns a new node and sets `head` to it.", () => {
    let node;

    before(() => {
      node = src_p1.createAndInsertFirst("Second!");
    });


    it("createAndInsertFirst(\"Second!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Second!\".", () => {
      expect(node.data).to.equal("Second!");
    });

    it("node.next should not be null", () => {
      expect(node.next).to.not.equal(null);
    });

    it("node.next.data should be: \"First!\".", () => {
      expect(node.next.data).to.equal("First!");
    });

    it("`head` should be set to the node.", () => {
      expect(head).to.eql(node);
    });
  });



  describe("Calling createAndInsertFirst(\"Third!\") again returns a new node and sets `head` to it.", () => {
    let node;

    before(() => {
      node = src_p1.createAndInsertFirst("Third!");
    });


    it("createAndInsertFirst(\"Third!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Third!\".", () => {
      expect(node.data).to.equal("Third!");
    });

    it("node.next should not be null", () => {
      expect(node.next).to.not.equal(null);
    });

    it("node.next.data should be: \"Second!\".", () => {
      expect(node.next.data).to.equal("Second!");
    });

    it("`head` should be set to the node.", () => {
      expect(head).to.eql(node);
    });
  });



  describe(" 4. Create new node and always make it the second node.", () => {
    let node;

    before(() => {
      head = null;
      node = src_p1.createAndInsertSecond("First!");
    });


    it("createAndInsertSecond(\"First!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"First!\".", () => {
      expect(node.data).to.equal("First!");
    });

    it("node.next should be: null.", () => {
      expect(node.next).to.equal(null);
    });

    it("`head` should set be to the node.", () => {
      expect(head).to.eql(node);
    });
  });



  describe("Calling createAndInsertSecond(\"Second!\") again returns a new node and sets the second to it.", () => {
    let node;

    before(() => {
      node = src_p1.createAndInsertSecond("Second!");
    });


    it("createAndInsertSecond(\"Second!\") returns new node and sets the second node to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Second!\".", () => {
      expect(node.data).to.equal("Second!");
    });

    it("node.next should be null", () => {
      expect(node.next).to.equal(null);
    });

    it("Second node should be set to the node.", () => {
      expect(head.next).to.eql(node);
    });
  });



  describe("Calling createAndInsertSecond(\"Third!\") again returns a new node and sets the second to it.", () => {
    let node;

    before(() => {
      node = src_p1.createAndInsertSecond("Third!");
    });


    it("createAndInsertSecond(\"Third!\") returns new node and sets the second node to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Third!\".", () => {
      expect(node.data).to.equal("Third!");
    });

    it("node.next should not be null", () => {
      expect(node.next).to.not.equal(null);
    });

    it("node.next.data should be: \"Second!\".", () => {
      expect(node.next.data).to.equal("Second!");
    });

    it("Second node should be set to the node.", () => {
      expect(head.next).to.eql(node);
    });

    it("first.data should be \"First!\".", () => {
      expect(head.data).to.equal("First!");
    });
  });



  describe(" 5.1. Create the First Node of a Linked List.  Maintain `head` and `tail`.", () => {
    let node;

    before(() => {
      head = null;
      tail = null;
      node = src_p2.createFirstNode("First Node!");
    });


    it("createFirstNode(\"First Node!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"First Node!\".", () => {
      expect(node.data).to.equal("First Node!");
    });

    it("node.next should be: null.", () => {
      expect(node.next).to.equal(null);
    });

    it("`head` should set to the node.", () => {
      expect(head).to.eql(node);
    });

    it("`tail` should set to the node.", () => {
      expect(tail).to.eql(node);
    });
  });



  describe(" 5.2. Create new node and always make it the head node.  Maintain `head` and `tail`.", () => {
    let node;

    before(() => {
      head = null;
      tail = null;
      node = src_p2.createAndInsertFirst("First!");
    });


    it("createAndInsertFirst(\"First!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"First!\".", () => {
      expect(node.data).to.equal("First!");
    });

    it("node.next should be: null.", () => {
      expect(node.next).to.equal(null);
    });

    it("`head` should set to the node.", () => {
      expect(head).to.eql(node);
    });

    it("`tail` should be set to the node.", () => {
      expect(tail).to.eql(node);
    });
  });



  describe("Calling createAndInsertFirst(\"Second!\") again returns a new node and sets `head` to it.  Maintain `tail` as needed.", () => {
    let node;

    before(() => {
      node = src_p2.createAndInsertFirst("Second!");
    });


    it("createAndInsertFirst(\"Second!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Second!\".", () => {
      expect(node.data).to.equal("Second!");
    });

    it("node.next should not be null", () => {
      expect(node.next).to.not.equal(null);
    });

    it("node.next.data should be: \"First!\".", () => {
      expect(node.next.data).to.equal("First!");
    });

    it("`head` should set to the node.", () => {
      expect(head).to.eql(node);
    });

    it("`tail` should be set to the second node.", () => {
      expect(head.next).to.eql(tail);
    });
  });



  describe("Calling createAndInsertFirst(\"Third!\") again returns a new node and sets `head` to it.  Maintain `tail` as needed.", () => {
    let node;

    before(() => {
      node = src_p2.createAndInsertFirst("Third!");
    });


    it("createAndInsertFirst(\"Third!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Third!\".", () => {
      expect(node.data).to.equal("Third!");
    });

    it("node.next should not be null", () => {
      expect(node.next).to.not.equal(null);
    });

    it("node.next.data should be: \"Second!\".", () => {
      expect(node.next.data).to.equal("Second!");
    });

    it("`head` should set to the node.", () => {
      expect(head).to.eql(node);
    });

    it("`tail` should be set to the third node.", () => {
      expect(head.next.next).to.eql(tail);
    });
  });



  describe(" 5.3. Create new node and always make it the second node.  Maintain `head` and `tail`.", () => {
    let node;

    before(() => {
      head = null;
      tail = null;
      node = src_p2.createAndInsertSecond("First!");
    });


    it("createAndInsertSecond(\"First!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"First!\".", () => {
      expect(node.data).to.equal("First!");
    });

    it("node.next should be: null.", () => {
      expect(node.next).to.equal(null);
    });

    it("`head` should be set to the node.", () => {
      expect(head).to.eql(node);
    });

    it("`tail` should be set to the node.", () => {
      expect(tail).to.eql(node);
    });
  });



  describe("Calling createAndInsertSecond(\"Second!\") again returns a new node and sets the second to it.  Maintain `tail` as needed.", () => {
    let node;

    before(() => {
      node = src_p2.createAndInsertSecond("Second!");
    });


    it("createAndInsertSecond(\"Second!\") returns new node and sets the second node to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Second!\".", () => {
      expect(node.data).to.equal("Second!");
    });

    it("node.next should be null", () => {
      expect(node.next).to.equal(null);
    });

    it("Second node should set to the node.", () => {
      expect(head.next).to.eql(node);
    });

    it("Second node should be set to `tail`.", () => {
      expect(node).to.eql(tail);
    });
  });



  describe("Calling createAndInsertSecond(\"Third!\") again returns a new node and sets the second to it.  Maintain `tail` as needed.", () => {
    let node;

    before(() => {
      node = src_p1.createAndInsertSecond("Third!");
    });


    it("createAndInsertSecond(\"Third!\") returns new node and sets the second node to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"Third!\".", () => {
      expect(node.data).to.equal("Third!");
    });

    it("node.next should not be null", () => {
      expect(node.next).to.not.equal(null);
    });

    it("node.next.data should be: \"Second!\".", () => {
      expect(node.next.data).to.equal("Second!");
    });

    it("Second node should set to the node.", () => {
      expect(head.next).to.eql(node);
    });

    it("first.data should be \"First!\".", () => {
      expect(head.data).to.equal("First!");
    });

    it("Third node should be `tail`.", () => {
      expect(head.next.next).to.eql(tail);
    });
  });



  describe(" 6. Create new node and always make it the `tail` node.", () => {
    let node;

    before(() => {
      head = null;
      tail = null;
      node = src_p2.addNewNode("First!");
    });


    it("addNewNode(\"First!\") returns new node and sets `head` to it.", () => {
      expect(node).to.not.equal(null);
    });

    it("node.data should be: \"First!\".", () => {
      expect(node.data).to.equal("First!");
    });

    it("node.next should be: null.", () => {
      expect(node.next).to.equal(null);
    });

    it("`head` should set be to the node.", () => {
      expect(head).to.eql(node);
    });

    it("`tail` should be set to the node.", () => {
      expect(tail).to.eql(node);
    });
  });



  describe(" 7. Always remove the `head` node.  The next node becomes the new `head`.", () => {
    let node;

    before(() => {
      head = null;
      tail = null;

      src_p2.createAndInsertFirst("First!");
      src_p2.createAndInsertFirst("Second!");
      src_p2.createAndInsertFirst("Third!");
      src_p2.createAndInsertFirst("Fourth!");
    });

    it("first.data should be: \"Fourth!\".", () => {
      expect(head.data).to.equal("Fourth!");
    });

    it("last.data should be: \"First!\".", () => {
      expect(tail.data).to.equal("First!");
    });

    it("Linked List is properly initialized with four initial nodes.", () => {
      expect(toArray(head)).to.eql(["Fourth!", "Third!", "Second!", "First!"]);
    });

    it("removeFirstNode removes the head node and returns it.", () => {
      node = src_p2.removeFirstNode();
      expect(node.data).to.equal("Fourth!");
    });

    it("removeFirstNode removes the head node and makes the second node the new `head`.", () => {
      expect(head.data).to.equal("Third!");
    });

    it("removeFirstNode again removes the head, and makes the new head.data equal `Second!`.", () => {
      node = src_p2.removeFirstNode();
      expect(head.data).to.equal("Second!");
    });

    it("removeFirstNode again removes the head, and makes the new head.data equal `First!`.", () => {
      node = src_p2.removeFirstNode();
      expect(head.data).to.equal("First!");
    });

    it("head and tail are now the same node.", () => {
      expect(head).to.eql(tail);
    });

    it("removeFirstNode on the tail existing node cases head and tail to be: null.", () => {
      node = src_p2.removeFirstNode();

      expect(head).to.eql(tail);
    });
  });



  describe(" 8. Always remove the second node.", () => {
    let node;

    before(() => {
      head = null;
      tail = null;

      src_p2.createAndInsertFirst("First!");
      src_p2.createAndInsertFirst("Second!");
      src_p2.createAndInsertFirst("Third!");
      src_p2.createAndInsertFirst("Fourth!");
    });

    it("first.data should be: \"Fourth!\".", () => {
      expect(head.data).to.equal("Fourth!");
    });

    it("last.data should be: \"First!\".", () => {
      expect(tail.data).to.equal("First!");
    });

    it("Linked List is properly initialized with four initial nodes.", () => {
      expect(toArray(head)).to.eql(["Fourth!", "Third!", "Second!", "First!"]);
    });

    it("removeSecondNode removes the second node and returns it.", () => {
      node = src_p2.removeSecondNode();
      expect(node.data).to.equal("Third!");
    });

    it("The current second node should be: \"Second!\".", () => {
      expect(head.next.data).to.equal("Second!");
    });

    it("removeSecondNode again removes the second and returns it.", () => {
      node = src_p2.removeSecondNode();
      expect(head.next.data).to.equal("First!");
    });

    it("last.data should be: \"First!\".", () => {
      expect(tail.data).to.equal("First!");
    });

    it("The second node should be the tail node.", () => {
      expect(tail).to.eql(head.next);
    });

    it("removeSecondNode again removes the second node, leaving only one node in the list.", () => {
      node = src_p2.removeSecondNode();
      expect(head.next).to.equal(null);
    });

    it("head and tail are now the same node.", () => {
      expect(head).to.eql(tail);
    });

    it("removeFirstNode on the tail existing node cases head and tail to be: null.", () => {
      node = src_p2.removeFirstNode();

      expect(head).to.eql(tail);
    });
  });



  describe(" 9. Return a node anywhere in the list.", () => {
    let node;

    before(() => {
      head = null;
      tail = null;

      src_p2.createAndInsertFirst("First!");
      src_p2.createAndInsertFirst("Second!");
      src_p2.createAndInsertFirst("Third!");
      src_p2.createAndInsertFirst("Fourth!");
    });

    it("first.data should be: \"Fourth!\".", () => {
      expect(head.data).to.equal("Fourth!");
    });

    it("last.data should be: \"First!\".", () => {
      expect(tail.data).to.equal("First!");
    });

    it("Linked List is properly initialized with four initial nodes.", () => {
      expect(toArray(head)).to.eql(["Fourth!", "Third!", "Second!", "First!"]);
    });

    it("getNodeAtIndex(head, 0) should return: \"Fourth!\".", () => {
      expect(src_p2.getNodeAtIndex(head, 0).data).to.equal("Fourth!");
    });

    it("getNodeAtIndex(head, 1) should return: \"Third!\".", () => {
      expect(src_p2.getNodeAtIndex(head, 1).data).to.equal("Third!");
    });

    it("getNodeAtIndex(head, 2) should return: \"Second!\".", () => {
      expect(src_p2.getNodeAtIndex(head, 2).data).to.equal("Second!");
    });

    it("getNodeAtIndex(head, 3) should return: \"First!\".", () => {
      expect(src_p2.getNodeAtIndex(head, 3).data).to.equal("First!");
    });

    it("getNodeAtIndex(head, 4) should return: null.", () => {
      node = src_p2.getNodeAtIndex(head, 4);
      expect(node).to.equal(null);
    });
  });



  describe("10. Return the previous node.", () => {
    let node;
    let n1, n2, n3, n4;

    before(() => {
      head = null;
      tail = null;

      n1 = src_p2.createAndInsertFirst("First!");
      n2 = src_p2.addNewNode("Second!");
      n3 = src_p2.addNewNode("Third!");
      n4 = src_p2.addNewNode("Fourth!");
    });

    it("first.data should be: \"First!\".", () => {
      expect(head.data).to.equal("First!");
    });

    it("last.data should be: \"Fourth!\".", () => {
      expect(tail.data).to.equal("Fourth!");
    });

    it("Linked List is properly initialized with four initial nodes.", () => {
      expect(toArray(head)).to.eql(["First!", "Second!", "Third!", "Fourth!"]);
    });

    it("getPreviousNode(head, n1) should return: null.", () => {
      expect(src_p2.getPreviousNode(head, 0)).to.equal(null);
    });

    it("getPreviousNode(head, n2) should return: \"First!\".", () => {
      expect(src_p2.getPreviousNode(head, n2)).to.eql(n1);
    });

    it("getPreviousNode(head, n3) should return: \"Second!\".", () => {
      expect(src_p2.getPreviousNode(head, n3)).to.eql(n2);
    });

    it("getPreviousNode(head, n4) should return: \"Third!\".", () => {
      expect(src_p2.getPreviousNode(head, n4)).to.eql(n3);
    });
  });



  describe("11. Always remove the second node.", () => {
    let node;
    let n1, n2, n3, n4;


    before(() => {
      head = null;
      tail = null;

      n1 = src_p2.createAndInsertFirst("First!");
      n2 = src_p2.addNewNode("Second!");
      n3 = src_p2.addNewNode("Third!");
      n4 = src_p2.addNewNode("Fourth!");
    });


    it("first.data should be: \"First!\".", () => {
      expect(head.data).to.equal("First!");
    });

    it("last.data should be: \"Fourth!\".", () => {
      expect(tail.data).to.equal("Fourth!");
    });

    it("Linked List is properly initialized with four initial nodes.", () => {
      expect(toArray(head)).to.eql(["First!", "Second!", "Third!", "Fourth!"]);
    });

    it("removeLastNode returns the last node.", () => {
      node = src_p2.removeLastNode();
      expect(node).to.eql(n4);
    });

    it("tail should now be the 3rd node.", () => {
      expect(tail).to.eql(n3);
    });

    it("Calling removeLastNode again returns the 3rd node.", () => {
      node = src_p2.removeLastNode();
      expect(node).to.eql(n3);
    });

    it("Calling removeLastNode again returns the 2nd node.", () => {
      node = src_p2.removeLastNode();
      expect(node).to.eql(n2);
    });

    it("There should only be one remaining node which is both head and tail.", () => {
      expect(head).to.eql(tail);
    });

    it("Calling removeLastNode again returns the remaining node.", () => {
      node = src_p2.removeLastNode();
      expect(node).to.eql(n1);
    });

    it("The list should now be empty.", () => {
      expect(head).to.equal(null);
      expect(tail).to.equal(null);
    });
  });



  describe("12. Insert a node anywhere in the list.", () => {
    let node;
    let n1, n2, n3, n4;


    before(() => {
      head = null;
      tail = null;
    });


    it("insertNodeAtIndex(0, \"First\") inserts the first node.", () => {
      n1 = src_p2.insertNodeAtIndex(0, "First!");
      expect(head).to.eql(n1);
    });

    it("head and tail should both reference the new node.", () => {
      expect(head).to.eql(tail);
    });

    it("insertNodeAtPosition(0, \"Second!\" insert at the head position.", () => {
      n2 = src_p2.insertNodeAtIndex(0, "Second!");
      expect(head).to.eql(n2);
    });

    it("n1 should still be the tail.", () => {
      expect(tail).to.eql(n1);
    });

    it("insertNodeAtIndex(1, \"Third!\") should insert after the head position.", () => {
      n3 = src_p2.insertNodeAtIndex(1, "Third!");
      expect(head.next).to.eql(n3);
    });

    it("head should be n2.", () => {
      expect(head).to.eql(n2);
    });

    it("tail should be n1.", () => {
      expect(tail).to.eql(n1);
    });

    it("insertNodeAtIndex(3, \"Fourth!\") should insert after the current tail.", () => {
      n4 = src_p2.insertNodeAtIndex(3, "Fourth!");
      expect(tail).to.eql(n4);
    });

    it("n4 should be the fourth node in this list.", () => {
      expect(head.next.next.next).to.eql(n4);
    });
  });



  describe("13. Remove any node in the list.", () => {
    let node;
    let n1, n2, n3, n4;

    before(() => {
      head = null;
      tail = null;

      n1 = src_p2.createAndInsertFirst("First!");
      n2 = src_p2.addNewNode("Second!");
      n3 = src_p2.addNewNode("Third!");
      n4 = src_p2.addNewNode("Fourth!");
    });

    it("first.data should be: \"First!\".", () => {
      expect(head.data).to.equal("First!");
    });

    it("last.data should be: \"Fourth!\".", () => {
      expect(tail.data).to.equal("Fourth!");
    });

    it("Linked List is properly initialized with four initial nodes.", () => {
      expect(toArray(head)).to.eql(["First!", "Second!", "Third!", "Fourth!"]);
    });

    it("removeNodeAtIndex(head, 10) should return null.", () => {
      expect(src_p2.removeNodeAtIndex(head, 10)).to.equal(null);
    });

    it("removeNodeAtIndex(head, 0) should remove the head from the list.", () => {
      node = src_p2.removeNodeAtIndex(head, 0);
      expect(node).to.eql(n1);
    });

    it("n2 should be the new head.", () => {
      expect(head).to.eql(n2);
    });

    it("Calling removeNodeAtIndex(head, 2) should remove n4.", () => {
      node = src_p2.removeNodeAtIndex(head, 2);
      expect(node).to.eql(n4);
    });

    it("n3 should be the new tail.", () => {
      expect(tail).to.eql(n3);
    });

    it("Calling removeNodeAtIndex(head, 1) should remove n3.", () => {
      node = src_p2.removeNodeAtIndex(head, 1);
      expect(node).to.eql(n3);
    });

    it("n2 should be the new tail and head.", () => {
      expect(head).to.eql(n2);
      expect(tail).to.eql(n2);
    });

    it("Calling removeNodeAtIndex(head, 0) should return n2.", () => {
      node = src_p2.removeNodeAtIndex(head, 0);
      expect(node).to.eql(n2);
    });

    it("The list should be empty.", () => {
      expect(head).to.eql(null);
      expect(tail).to.eql(null);
    });
  });



  describe("14. Return an array representing all the data in the linked list.", () => {
    before(() => {
      src_p2.createAndInsertFirst(1);
      src_p2.addNewNode(2);
      src_p2.addNewNode(3);
      src_p2.addNewNode(4);
      src_p2.addNewNode(5);
    });


    it("List is properly initialized.", () => {
      expect(toArray(head)).to.eql([1,2,3,4,5]);
    });

    it("toArray(head) should return: [1,2,3,4,5].", () => {
      expect(src_p2.toArray(head)).to.eql([1,2,3,4,5]);
    });
  });
});






function toArray(first) {
  let result = [];

  while (first) {
    result.push(first.data);
    first = first.next;
  }

  return result;
}

