"use strict";
// const pi = 3.1415;
// let R = 45;
// let X = R * pi ** 2;
// console.log(X);

// //преобразование к логическому типу
// console.log(Boolean(0));//false
// console.log(Boolean(-0));//false
// console.log(Boolean(+0));//false
// console.log(Boolean(null));//false
// console.log(Boolean(NaN));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(''));//false

// console.log(Boolean(-1));//true
// console.log(Boolean(Infinity));//true
// console.log(Boolean(-Infinity));//true
// console.log(Boolean('0'));//true
// console.log(Boolean('false'));//true
// console.log(Boolean('NaN'));//true
// console.log(Boolean('null'));//true
// console.log(Boolean('undefined'));//true

// let str = 'abcde';
// console.log(str[0]); //a
// console.log(str[1]); //b
// console.log(str[2]); //c
// let num = 3;
// console.log(str[num]); //d
// str[0] = '6'; //ошибка! Символы строк можно читать, но нельзя изменять!

// let str = 'adsddfg';
// let last = str.length -1; //номер последнего символа
// console.log(str[last]); // последний сивол строки
// console.log(str[str.length -1]); //последний символ строки

// let str = '123456';
// let sum = 0;
// for (let i = 0; i <str.length; i++){
//     sum = sum + Number(str[i]);
// }
// console.log(sum);
// console.log(str[1]+str[2]);

// //Сокращенные операции в JS
// let num = 1;
// num += 2;
// num -= 1;
// num *= 2;
// num /= 3;

// let num = 1;
// num++; //инкремент
// num--; //декремент

//Округление до заданного знака
let a = 0.1 + 0.2;
console.log(a.toFixed(2)); //Выведет строку '0.30'
console.log(+a.toFixed(2)); //Выведет число 0.3

