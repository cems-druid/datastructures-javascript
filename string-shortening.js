//An example of string shortening which are used in some URLs.
var DIC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function encodeId(num){
    var base = DIC.length;
    var encoded = "";

    if(num === 0){
        return DIC[0];
    }

    while(num>0){
        encoded += DIC[(num%base)];
        num = Math.floor(num/base);
    }

    return reverseWord(encoded);
}

function reverseWord(str){
    var reversed = "";
    for(var i= str.length-1; i>=0; i--){
        reversed += str.charAt(i);
    }
    return reversed;
}

function decodeId(id){
    var base = DIC.length;
    var decoded = 0;

    for(var idx = 0; idx < id.split("").length; idx++){
        decoded = decoded * base + DIC.indexOf(id.charAt(idx));
    }
    return decoded;
}
