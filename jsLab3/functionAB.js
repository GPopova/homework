"use strict"

var x = prompt("введите число от 1 до 30");

calc(x);

function calc() {
    var a = "A";
    var b = "B";
    var c = "AB";

    while(x >= 1 && x <= 30){
        for(var i = 0; i < 30; i++){
            if(x % 3 === 0 && x % 5 === 0) {
                return console.log(c);
            }
            else if(x % 3 === 0){
                return console.log(a);
            }
            else if(x % 5 === 0){
                return console.log(b);
            }
            else if(x % 3 !== 0 && x % 5 !== 0){
                return console.log(x);
            }
        }
    }
}