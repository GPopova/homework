"use strict"

var someArr = [],
    arrLength = 20,
    testArr = [];

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var i = 0; i < arrLength; i++) {
    someArr.push(randomNumbers(-50, 50));
}

console.log(someArr);

var testArr = someArr.filter(function (item) {
    return item % 2 === 0 && item >= -10 && item <= 10;
});

console.log(testArr);

// for(var i = 0; i < arrLength; i++){
//     if(someArr[i] % 2 === 0){
//         testArr.push(someArr[i]);
//     }
// }

// var nextArr = [];
//
// for(i = 0; i < testArr.length; i++){
//     if(testArr[i] >= -10 && testArr[i] <= 10){
//         nextArr.push(testArr[i]);
//     }
// }
//
// console.log(nextArr);
