/**
* Created with javascript-ds.
* User: pawanspace
* Date: 2014-05-14
* Time: 08:04 PM
*/

var DS = DS || {};

DS.LinkedList = function(){
    
    var _size = 0;
    var topNode = null;
    
    function prepend(node){
        node.setNext(topNode);
        topNode = node;
        _size++;
    }
    
    function size(){
        return _size;
    }
    
    function firstElement(){
        return topNode;
    }
    
    function lastElement(){
        var lastNode = topNode;
        var next = null
        while(next = lastNode.getNext()){
            lastNode = next;
        }
        
        return lastNode;
    }
    
    return {
        add: prepend,
        size: size,
        getFirst: firstElement,
        getLast: lastElement
    };
    
}