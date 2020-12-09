
describe("Trees - Part I", () => {
  let BST;
  let tree;
  let Node;

  before(() => {
    [Node, BST] = L1();
    tree = new BST();
  });


  it("tree should not be null", () => {
    expect(tree).to.not.equal(null);
  });

  it("Add 7 nodes.", () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(2);
    tree.add(4);
    tree.add(6);
    tree.add(8);
  });

  it("Tree should contain 7 nodes.", () => {
    expect(tree.getNodeCount(tree.root)).to.equal(7);
  });


  it("Tree height should be 3 levels deep.", () => {
    let height = tree.getHeight(tree.root);
    expect(height).to.equal(3);
  });


  it("TraverseBFS should return 5372468.", () => {
    let bfs = "";
    tree.traverseBFS((node) => { bfs += node.data; });

    expect(bfs).to.equal("5372468");
  });


  it("TraverseDFS should return 5324768.", () => {
    let dfs = "";
    tree.traverseDFS((node) => { dfs += node.data; }); //  5324768

    expect(dfs).to.equal("5324768");
  });


  it("Each level should have the correct values.", () => {
    let [levels, level] = tree.getLevel(1, tree.root); // Levels(3), Level(1)

    // print by level  1, 2, 3
    //
    let pbl;

    pbl = levels[1].toString(); //        5
    expect(pbl).to.equal("5");

    pbl = levels[2].toString(); //      3, 7
    expect(pbl).to.equal("3,7");

    pbl = levels[3].toString(); //   2,4    6, 8
    expect(pbl).to.equal("2,4,6,8");
  });


  it("PostOrder traversal should return 2436875.", () => {
    let order = "";
    tree.postOrder(tree.root, (node) => { order += node.data; }); // 2 4 3 6 8 7 5

    expect(order).to.equal("2436875");
  });


  it("inOrder traversal should return 2345678.", () => {
    let order = "";
    tree.inOrder(tree.root, (node) => { order += node.data; }); // 2 3 4 5 6 7 8

    expect(order).to.equal("2345678");
  });


  it("preOrder traversal should return 5324768.", () => {
    let order = "";
    tree.preOrder(tree.root, (node) => { order += node.data; }); // 5 3 2 4 7 6 8

    expect(order).to.equal("5324768");
  });


  it("getMaxValue should be 8.", () => {
    expect(tree.getMaxValue(tree.root)).to.equal(8);
  });


  it("getMinValue should be 2.", () => {
    expect(tree.getMinValue(tree.root)).to.equal(2);
  });


  it("tree contains the value 5.", () => {
    expect(tree.contains(5)).to.equal(true);
  });


  it("tree does not contain 11.", () => {
    expect(tree.contains(11)).to.equal(false);
  });
});