"use strict";
//alert("Hello, Java Script!");

//let a = 5, b = 4, c = 3;
// alert(a);
// alert(b);
// alert(c);
// a = 10; b = 2;
// alert(a);

//let a = 12, b = 3;
// alert(a+b);
// alert(a-b);
// alert(a*b);
// let result = a/b;
// alert(result);

// let result;
// let a = 1.5, b = 0.75;
// result = a + b;
// alert(result);

// let a = 13, b = 5;
// alert(a % b); // остаток от деления

// let a = 2, b = 10;
// alert(a ** b); //возведение в степень
//
// a = 3 * 2 ** 3 * 3;
// alert(a);

// let str1 = "Hello";
// let str2 = 'Hi';
// alert(str1);
// alert(str1.length);
// alert(str2);
// alert(str2.length);

// let str = 'va';//вставка переменных в строку
// let text = `Ja${str} script`; //let text = "Ja" + str + " script";
// alert(text);

// //многострочность в js
// let str1 = `hello
// my friend
// hi`; //обязательно косые кавычки!
// alert(str1);
// /*
// так не будет работать
// let str = "abc
// def";
//
// и так тоже
// let str = 'abc
// def';
// */

// let a; //значение undefined
// alert(a);
// a = null;
// alert(a);
// a = true; let b = false;
// alert(a);
// alert(b);

// alert("asd" * 8); //вывод значения NaN
// alert(NaN + 5); //вывод значения NaN

// alert(-12 / 0); //вывод -Infinity
// alert(47 / 0); //вывод Infinity

// let x = '1' + 2 + 3; //строка
// x = x - 3; //а тут уже число
// console.log(x);

// let a = "5";
// let b = "7";
// console.log(Number(a) + Number(b)); //приведение строки к числу

// let a = +'4'; //перед строкой ставится + и поэтому она становится числом
// let b = +'5'; // записано в перемнную число 5, не строка!
// console.log(a + b);

// console.log(Number('45f')); //выведет NaN
// console.log(+'45f'); //выведет NaN

/*
 Функция Number работает только со строками, состоящими из цифр.
 Однако, при программировании на JavaScript часто встречаются ситуации,
 когда вам нужно обращаться со строками, в начале которых стоит число, а затем буквы.
  Примером такой строки может быть значение в пикселях: '12px'.
  Пусть нам необходимо достать стоящее в начале число, отбросив строковую часть.
*/
// let n = parseInt('12,5px');
// console.log(n); //вывод 12
// n = parseFloat('123.5px');
// console.log(n); // вывод 123.5
// console.log(parseInt('5') + parseInt('6'));
// console.log(parseFloat('12.25') + parseFloat('2.3') + 'px');

////Преобразование к строке
// let str = String(123);
// console.log(str);
// let x1 = 2, x2 = 3;
// console.log(String(x1) + String(x2));

// let num = 12345;
// let str = String(num);
// console.log(str.length);

// //преобразование логического типа
// console.log(String(true));//true
// console.log(String(false));//false
// console.log('a' + true);//atrue
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(true + 1);//2
// console.log(true + true);//2


