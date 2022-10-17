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

// //Округление до заданного знака
// let a = 0.1 + 0.2;
// console.log(a.toFixed(2)); //Выведет строку '0.30'
// console.log(+a.toFixed(2)); //Выведет число 0.3

// //Функция prompt();
// //позволяет получить от пользователя какой-либо текст
// let name = prompt('What\'s your name?');
// alert('Your name: ' + name);
// alert('Your name: ' + prompt('What\'s your name?'));
// alert('Your age: ' + prompt('What\'s your age?')); // функция prompt() всегда возвращает строку!
// let num1 = prompt("Enter first number: ");
// let num2 = prompt("Enter second number: ");
// alert(Number(num1) + Number(num2));
// let a = prompt("Enter first side of the rectangle");
// let b = prompt("Enter second side of the rectangle");
// let perimeterRect = a*2 + b*2;
// alert("Perimeter is: " + perimeterRect);

//Ввод текста в документ
// document.writeln(123);
// document.writeln('some text');
// document.writeln('<b>text in tag</b>');
// //вывод текста в колонку
// document.write('text1<br>');
// document.write('text2<br>');
// document.write('text3<br>')
// //второй вариант текста в колонку
// document.write('text1');
// document.write('<br>');
// document.write('text2');
// //вывод текста курсивом
// document.write('<i>Text</i>');

// //Как я понял мини квиз "Найди ошибку в коде и исправь её" (хотя там нет ничего интересного для меня)
// let num1 = 1;
// let num2 = 2;
// console.log('сумма: ' + (num1 + num2));
//
// let num = '123';
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
// console.log(sum);

// //Какая-то скучная практика на операции в JS, делать больше трёх штук просто не вижу смысла
// console.log(60*60*60*24); //сколько секунд в сутках
// console.log(60*24*365); //минут в году
// console.log(1024**4); //байт в терабайте

        /*Практика на формулы*/
// //1
// let radius = prompt('Enter radius of circle');
// let s = Math.PI * radius**2;
// console.log(+s.toFixed(2));
// //2
// let a = prompt('Enter A');
// let s = 2 * a**2;
// console.log(s);
// //3
// let a, b;
// a = prompt('Enter A');
// b = prompt('Enter B');
// let s = 2 * a * b;
// console.log(s);

//to de continued...
