"use strict"


var inputAll = document.querySelectorAll('input');
console.log(inputAll);

//TASK1

var email = inputAll[2];
email.value = 'galka_popova@outlook.com';
// var mail = document.querySelector('input[type ="email"]');
// mail.value = 'galka_popova@outlook.com';

//TASK2

for(var i = 0; i < 2; i++){
    inputAll[i].style.borderStyle = 'solid';
    inputAll[i].style.borderColor = 'red';
}

//TASK3

var checkbox = inputAll[5];
checkbox.setAttribute('checked','checked');

//TASK4

var submit = inputAll[6];
submit.style.backgroundImage = 'none';
submit.style.backgroundColor = 'green';
submit.style.color = 'yellow';

