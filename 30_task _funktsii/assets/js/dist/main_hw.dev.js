"use strict";

/*Створи функцію, яка буде виводити кількість переданих їй аргументів.*/
function chekArg(a, b, c, d, e) {
  alert(chekArg.length);
}
/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/


function getNumber() {
  var a = prompt("Введіть перше число");
  var b = prompt("Введіть друге число");

  if (a < b) {
    alert(-1);
  } else if (a > b) {
    alert(1);
  } else if (a === b) {
    alert(0);
  }
}
/*Напиши функцію, яка обчислює факторіал переданого їй числа.*/


function getFactorial() {
  var num = parseInt(prompt("Введіть число"));

  if (num <= 10) {
    var _result = 1,
        _i = 1;

    while (_i <= num) {
      _result = _result * _i;
      _i++;
    }

    alert(_result);
  } else {
    alert("Завелике число. Введіть число, яке менше або дорівнює 10.");
  }
}
/*Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/


function createNumber() {
  var a = prompt("Ввведіть першу цифру");
  var b = prompt("Ввведіть другу цифру");
  var c = prompt("Ввведіть третю цифру");

  if (a <= 9 && b <= 9 && c <= 9) {
    a = String(a);
    b = String(b);
    c = String(c);

    var _result2 = a + b + c;

    alert(_result2);
  } else {
    alert("Введіть цифру, яка менше або дорівнює 9");
  }
}
/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/


function calcArea() {
  var a = prompt("Ввведіть ширину");
  var b = prompt("Ввведіть довжину");

  if (a > 0 && b > 0) {
    var res_rectangle = a * b;
    alert(res_rectangle);
  } else {
    var res_quadrate = a * a || b * b;
    alert(res_quadrate);
  }
}
/*Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/


function chekNumber() {
  var a = parseInt(prompt("Введіть число"));
  var sum = 0;
  var result;

  for (var _i2 = 1; _i2 <= a / 2; _i2++) {
    if (a % _i2 == 0) {
      sum += Math.ceil(_i2);
      result = a == sum;
    } else {
      result = a != sum;
    }
  }

  alert(result);
}
/*Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/


function perfectNumber() {
  var a = parseInt(prompt("Введіть мінімальне значення діапазону"));
  var b = parseInt(prompt("Введіть максимальне значення діапазону"));
  var sum = 0;
  var num;

  while (i >= a / 2 && i <= b / 2) {
    for (var _i3 = 1; _i3 <= a / 2; _i3++) {
      if (a % _i3 == 0) {
        sum += Math.ceil(_i3);
        num == sum;
        result += num + " ";
      }

      num++;
    }
  }

  alert(result);
}
/*Запитай у користувача число і виведи всі дільники цього числа.*/

/*function divider(){
    let a = parseInt(prompt("Введіть число"));
    let result = '';
    let b = 1;
    while(b <= a){
        if(a % b==0){
            result += b + " ";//плюс для того, чтобы результат не перезаписывался, а добавлялся
        }
        b++;
    }
    alert (result);
}*/