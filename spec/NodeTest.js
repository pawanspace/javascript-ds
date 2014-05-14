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

    
  it("node set value can add next node to node", function() {
    var nextNode = new DS.Node();  
    nextNode.setValue("second");
  	node.setNext(nextNode);
  	expect(node.getValue()).toBe(undefined);
    expect(node.getNext()).not.toBe(null);
  	expect(node.getNext()).not.toBe(undefined);
  	expect(node.getNext()).toBe(nextNode);
  	expect(node.getNext().getValue()).toBe("second");     
  	expect(node.getValue()).toBe(undefined);           

  });
    
      
  it("should not have access to private members of node", function() {
  	expect(node.value).toBe(undefined);
    expect(node.next).toBe(undefined);
    node.setValue("first");
    expect(node.getValue()).toBe("first");  
    node.value = "changed";
    expect(node.getValue()).toBe("first");        
  });  

    



});

