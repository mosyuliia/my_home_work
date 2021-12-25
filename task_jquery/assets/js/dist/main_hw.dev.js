"use strict";

/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-12), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/
function yourAge() {
  var age = prompt("Введите ваш возраст");
  var ageChild = "Вы ребенок";
  var ageTeenager = "Вы подросток";
  var ageAdult = "Вы взрослый";
  var ageRetiree = "Вы пенсионер";
  var result;

  if (age >= 0 && age < 12) {
    result = ageChild;
  } else if (age >= 12 && age < 18) {
    result = ageTeenager;
  } else if (age >= 18 && age < 60) {
    result = ageAdult;
  } else if (age >= 60) {
    result = ageRetiree;
  }

  alert(result);
}
/*Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/


function specialSymbol() {
  var number = prompt("Введите число от 1 до 9");
  var result;

  if (number == 1) {
    result = '!';
  } else if (number == 2) {
    result = '@';
  } else if (number == 3) {
    result = '#';
  } else if (number == 4) {
    result = '$';
  } else if (number == 5) {
    result = '%';
  } else if (number == 6) {
    result = '^';
  } else if (number == 7) {
    result = '&';
  } else if (number == 8) {
    result = '*';
  } else if (number == 9) {
    result = '(';
  } else if (number == 0) {
    result = ')';
  }

  alert(result);
}
/*Підрахуй суму всіх чисел в заданому користувачем діапазоні*/


function rangeOfNumbers() {
  var x = Number(prompt("Введіть перше число діапазону"));
  var y = Number(prompt("Введіть останнє число діапазону"));
  var sum = 0;

  while (x <= y) {
    sum += x;
    x++;
  }

  alert(sum);
}
/*Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/


function commonDivisor() {
  var a = parseInt(prompt("Введіть перше число"));
  var b = parseInt(prompt("Введіть друге число"));
  var result = '';
  var c = a < b ? a : b;
  var d = 1;

  while (d <= c) {
    if (a % d == 0 && b % d == 0) {
      result = Math.max(d);
    }

    d++;
  }

  alert(result);
}
/*Запитай у користувача число і виведи всі дільники цього числа.*/


function divider() {
  var a = parseInt(prompt("Введіть число"));
  var result = '';
  var b = 1;

  while (b <= a) {
    if (a % b == 0) {
      result += b + " "; //плюс для того, чтобы результат не перезаписывался, а добавлялся
    }

    b++;
  }

  alert(result);
}
/*Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.*/


function palindrom() {
  var num = prompt("Введите число");
  var a, b, c, d, e;
  a = parseInt(num / 10000); //разряд десятков тысяч

  b = parseInt(num % 10000 / 1000); //разряд тысяч

  c = parseInt(num % 1000 / 100); //разряд сотен

  d = parseInt(num % 100 / 10); //разряд десятков

  e = num % 10; //разряд единиц

  if (a == e && b == d) {
    alert('It is palindrom');
  } else {
    alert('It is not palindrom');
  }
}
/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:

1. від 200 до 300 - знижка буде 3%; 
2. від 300 до 500 - 5%;
3. від 500 і вище - 7%.*/


function amountOfPurchases() {
  var amount = parseInt(prompt("Введіть сумму"));
  var result;

  if (amount > 200 && amount < 300) {
    result = amount - amount * 3 / 100;
  } else if (amount > 300 && amount < 500) {
    result = amount - amount * 5 / 100;
  } else if (amount > 500) {
    result = amount - amount * 7 / 100;
  }

  alert(result);
}
/*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/
//function tenNumbers()

/*Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.*/


function nextDay() {
  var a = true;

  while (a) {
    a = confirm("Понеділок. Хочеш побачити наступний день?");
    a = confirm("Вівторок. Хочеш побачити наступний день?");
    a = confirm("Середа. Хочеш побачити наступний день?");
    a = confirm("Четвер. Хочеш побачити наступний день?");
    a = confirm("П'ятниця. Хочеш побачити наступний день?");
    a = confirm("Субота. Хочеш побачити наступний день?");
    a = confirm("Неділя. Хочеш побачити наступний день?");
    a = false;
  }
}
/*Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.*/


function multTable() {
  var n = 10;
  var table = "\n    <table class=\"my_table\">\n        <thead>\n            <tr>";

  for (var i = 2; i < n; i++) {
    table += "<td>".concat(i, "</td>");
  }

  table += "</tr>\n        </thead>\n        <tfoot>\n        <tr>";

  for (var _i = 2; _i < n; _i++) {
    table += "<td>".concat(_i, "</td>");
  }

  table += "</tr>\n        </tfoot>\n        <tbody>";

  for (var _i2 = 1; _i2 <= n; _i2++) {
    table += '</tr>';

    for (var j = 2; j < n; j++) {
      table += "<td>".concat(_i2, " * ").concat(j, " = ").concat(_i2 * j, "</td>");
    }

    table += '</tr>';
  }

  table += "</tbody>\n        </table>\n        ";
  document.getElementById("multi_table").innerHTML = table;
}

multTable();
/*Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.*/

/*
const isLeapYear = (year)=>(year%400==0 || (year%4==0 && year%100!=0))?true:false;
const addZero = (n)=>n<10?'0'+n:n;
const checkDate=(d,m,y)=>{
    let ret = true;
    if(d >= 1 && d <=31){
        ret = false;
    }
    if(m==2){
        if(isLeapYear(y)){
            if(d>29){
                ret = false;
            }
        }else{
            if(d>28){
                ret = false;
            }
        }
    }else{
        ret = false;
    }
    return ret;
}

function nextDate(){
    let day_in = +prompt("Enter day");
    let month_in = +prompt("Enter month");
    let year_in = +prompt("Enter year");

    if(checkDate(day_in, month_in, year_in)){

        let day_out = +day_in+1,
            month_out = +month_in,
            year_out = +year_in;

        switch(month_in){
            case 4:
            case 6:
            case 9:
            case 11:
                if(day_out==31){
                    day_out = 1;
                    month_out++;
                }
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if(day_out==32){
                    day_out = 1;
                    month_out++;
                }
                break;
            case 2:
                if(isLeapYear(year_in)){
                    if(day_out==30){
                        day_out = 1;
                        month_out++;
                    }
                }else{
                    if(day_out==29){
                        day_out = 1;
                        month_out++;
                    }
                }
                break;
        }
        if(month_out==13){
            day_out = 1;
            month_out = 1;
            year_out++;
        }
        alert(`${addZero(day_out)}/${addZero(month_out)}/${year_out}`);
    }else{
        alert ("Invalid date");
    }
}*/

/*Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры. с урока*/

function isMatched() {
  var num = prompt("Введите число");
  var s, d, e;
  s = parseInt(num / 100);
  d = parseInt(num % 100 / 10);
  e = num % 10;

  if (s == d || s == e || d == e) {
    alert('Match');
  } else {
    alert('Not match');
  }
}
/*Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/


function leapYear() {
  var year = prompt("Введите год");

  if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    alert('It is leap year!');
  } else {
    alert('It is not leap year!');
  }
}