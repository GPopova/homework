"use strict"


var elemLogoImg = document.querySelector('img');
console.log(elemLogoImg);

var textLeftMenu = document.getElementById('list').textContent;
console.log(textLeftMenu);

// or

var textLeftMenu = document.querySelectorAll('div> div> div> ul> li> a');
console.log(textLeftMenu[0], textLeftMenu[1], textLeftMenu[2], textLeftMenu[3],
    textLeftMenu[4], textLeftMenu[5]);

var elemImg = document.querySelectorAll('img');
console.log(elemImg[1]);

var elemImg = document.getElementsByClassName('image');
console.log(elemImg[0]);

var textCopyright = document.getElementById('copy').textContent;
console.log(textCopyright);



