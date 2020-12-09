
describe("Trees &mdash; Basic Trees", () => {
  let Tree;
  let tree;
  let Node;

  before(() => {
    [Node, Tree] = L0();
    tree = new Tree();
  });


  describe("Create new Tree", () => {
    it("tree should not be null", () => {
      expect(tree).to.not.equal(null);
    });
  });

  describe("Add data", () => {
    tree.add(null, "CEO");
    tree.add("CEO", "CTO");
    tree.add("CTO", "DEV");

    it("Root should contain 'CEO'", () => {
      expect(tree.children[0].data == "CEO");
    })
  });
});