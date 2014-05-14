var DS = DS || {};

DS.Node = function(){

    var value, next;

    function setValue(input){
        value = input;
    }

    function getValue(){
        return value;
    }

    function setNext(node){
        next = node;
    }

    function getNext(){
        return next;
    }

    return {
        setValue: setValue,
        getValue: getValue,
        setNext: setNext,
        getNext: getNext
    };

};