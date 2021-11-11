function cam(){
    let number = parseInt(document.getElementById("ser").value);
    let resualt = number*number;
    document.getElementById("abo")
    
}

/*Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.*/

function calc(){
    let number = parseInt(prompt("Введите первое число"));
    let number2 = parseInt(prompt("Введите второе число"));
    let action = prompt("Введите действие: + - * /");
    let result;
    if(action === "+"){
        result = number + number2;        
    }
    if(action === "-"){
        result = number - number2;        
    }
    if(action === "*"){
        result = number * number2;        
    }
    if(action === "/"){
        result = number / number2;        
    }
    alert(result);
}