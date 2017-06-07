"use strict"

calc(5,4,20,153);

function calc(){
    var result;

    if (arguments.length == 2) {
        result = Math.pow(arguments[0], arguments[1]);
        return console.log(result);
    }
    else if(arguments.length == 3){
        result = arguments[0] * arguments[1] * arguments[2];
        return console.log(result);
    }
    else if(arguments.length == 4){
        result = arguments[0] + arguments[1] + arguments[2] + arguments[3];
        return console.log(result);
    }
}
