"use strict";

/*Запросить у пользователя его возраст
 и определить, кем он является: ребенком (0–2),
  подростком (12–18), взрослым (18_60)
   или пенсионером (60– ...).*/
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
/*Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/


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
/*Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
первій вариант с урока*/

/*
function isMatched(num){
    num = parseInt(num);
    let s, d, e;
    s = parseInt(num/100);
    d = parseInt((num%100)/10);
    e = num%10;
    if(s==d || s==e || d==e){
        console.log('Match');
    }
    else{
        console.log('Not match');
    }
}*/


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
/*Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.*/


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