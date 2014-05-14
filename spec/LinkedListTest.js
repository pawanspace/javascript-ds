/**
* Created with javascript-ds.
* User: pawanspace
* Date: 2014-05-14
* Time: 08:06 PM
*/

describe("Testing linked list", function(){
   
    var list = null;
    
    beforeEach(function(){
        list = new DS.LinkedList();
    })
    
    it("Can create Linkedlist with zero element", function(){
        expect(list).not.toBe(null);
        expect(list).not.toBe(undefined);
        expect(list.size()).toBe(0);
    });
    
    
    it("Can add elements to Linkedlist", function(){
        expect(list).not.toBe(null);

        list.add(new DS.Node());
        
        expect(list.size()).toBe(1);
    });
    
    it("Can add multiple elements to Linkedlist", function(){
        expect(list).not.toBe(null);

        list.add(new DS.Node());
        list.add(new DS.Node());
        
        expect(list.size()).toBe(2);
    });
    
    it("Can add/get multiple elements to Linkedlist", function(){
        expect(list).not.toBe(null);
        
        var firstNode = new DS.Node();
        firstNode.setValue("First Node");    
        list.add(firstNode);
        
        var secondNode = new DS.Node();
        secondNode.setValue("Second Node");
        list.add(secondNode);
        
        expect(list.size()).toBe(2);
        expect(list.getFirst()).toBe(secondNode);
        expect(list.getFirst().getValue()).toBe("Second Node");
        expect(list.getFirst().getNext()).toBe(firstNode);
        expect(list.getFirst().getNext().getValue()).toBe("First Node");
        
        expect(list.getLast()).toBe(firstNode);
        
    });
    
});
