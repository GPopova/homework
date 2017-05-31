"use strict"


do{
    var a = +prompt("введите первое число");
}while(!isNumeric(a));

do{
    var b = +prompt("введите второе число");
}while(!isNumeric(b));

var c = prompt("введите операцию(+, -, *, /)");

function isNumeric(a, b) {
    return !isNaN(parseFloat(a, b)) && isFinite(a, b);
}

switch(c) {
    case '+':
        alert(a+b);
        break;
    case '-':
        alert(a-b);
        break;
    case '*':
        alert(a*b);
        break;
    case '/':
        if (a/b == Infinity) {
            alert("ошибка!нельзя делить на ноль");
        }
        else{
            alert(a/b);
        }
        break;
    default:alert("введена некорректная операция, попробуйте еще раз");
        break;
}

// if (a == "" && b == ""){
//     alert("вы забыли ввести числа");
// }
// else{
//     if(a == "" || b == ""){
//         alert("вы забыли ввести одно число");
//     }
// }
// if (c == '-') {
//     result=a-b;
//     alert(result);
// }
// else{
//     if(c == '+'){
//         result=a+b;
//         alert(result);
//     }
//     else{
//         if(c == '*'){
//             result=a*b;
//             alert(result);
//         }
//         else{
//             if(c == '/'){
//                 result=a/b;
//                 alert(result);
//             }
//             else {
//                 alert("введите корректную операцию");
//             }
//         }
//     }
// }
//
