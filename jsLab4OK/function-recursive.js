"use strict"


// function pow

function pow(a,b) {
    var result = a;
    for(var i = 1; i < b; i ++){
        result *= a;
    }
    return result;
}
console.log(pow(2,8));


//function powRecursive

function powRecursive(a,b) {
    if( b === 1){
        return a;
    }
    else{
        return a * powRecursive(a, b - 1);
    }
}
console.log(powRecursive(2,8));



// function fib

function fib(a) {
    var x = 1,
        y = 1;
    for(var i = 2; i < a; i++){
        var result = x + y;
        x = y;
        y = result;
    }
    return y;
}

console.log(fib(3));



//function fibRecursive

function fibRecursive(number) {
    if(number < 2){
        return number;
    }
    else{
        return fibRecursive(number-1) + fibRecursive(number-2);
    }
}
console.log(fibRecursive(7));