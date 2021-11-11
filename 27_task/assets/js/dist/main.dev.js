"use strict";

function cam() {
  var number = parseInt(document.getElementById("ser").value);
  var resualt = number * number;
  document.getElementById("abo");
}
/*Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.*/


function calc() {
  var number = parseInt(prompt("Введите первое число"));
  var number2 = parseInt(prompt("Введите второе число"));
  var action = prompt("Введите действие: + - * /");
  var result;

  if (action === "+") {
    result = number + number2;
  }

  if (action === "-") {
    result = number - number2;
  }

  if (action === "*") {
    result = number * number2;
  }

  if (action === "/") {
    result = number / number2;
  }

  alert(result);
}