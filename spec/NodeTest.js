describe("Node DataStructure", function() {
  
  var node;

  beforeEach(function(){
  	node = new DS.Node();
  });

  it("node is not null", function() {
  	expect(node).not.toBe(null);
    expect(node.setNext).not.toBe(undefined);
    expect(node.haveNext).toBe(undefined);
  });

  it("node set value can add value to node", function() {
  	node.setValue("first");
  	expect(node.getValue()).not.toBe(null);
  	expect(node.getValue()).not.toBe(undefined);
  	expect(node.getValue()).toBe("first");
  });


});

