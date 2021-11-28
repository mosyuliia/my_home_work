/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/

function yourAge(){
    let age = prompt("Введіть ваш вік");
    let ageChild = "Ви дитина";
    let ageTeenager = "Ви підліток";
    let ageAdult = "Ви дорослий";
    let ageRetiree = "Ви пенсіонер";
    let result;
    if (age >= 0 && age < 12){
        result = ageChild;      
    }
    else if(age >= 12 && age < 18){
        result = ageTeenager;       
    }
    else if(age >=18 && age <60){
        result = ageAdult;       
    }
    else if(age >= 60){
        result = ageRetiree;       
    }
    alert(result);
 }

/*Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

function specialSymbol(){
    let number = prompt("Введіть число від 1 до 9");
    let result;

    if(number == 1){
        result = '!';
    }
    else if(number == 2){
        result = '@';
    }
    else if(number == 3){
        result = '#';
    }
    else if(number == 4){
        result = '$';
    }
    else if(number == 5){
        result = '%';
    }
    else if(number == 6){
        result = '^';
    }
    else if(number == 7){
        result = '&';
    }
    else if(number == 8){
        result = '*';
    }
    else if(number == 9){
        result = '(';
    }
    else if(number == 0){
        result = ')';
    }
    alert(result);
}

/*Підрахуй суму всіх чисел в заданому користувачем діапазоні*/

function rangeOfNumbers(){
    let x = Number (prompt("Введіть перше число діапазону"));
    let y = Number (prompt("Введіть останнє число діапазону"));
    let sum = 0;
    while(x <= y){       
        sum+=x;  
        x++;
    }
alert(sum);
}

/*Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/




/*Запитай у користувача число і виведи всі дільники цього числа.*/




/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:

1. від 200 до 300 - знижка буде 3%; 
2. від 300 до 500 - 5%;
3. від 500 і вище - 7%.*/

function amountOfPurchases(){
    let amount = parseInt(prompt("Введіть сумму"));
    let result;
    if (amount>200 && amount<300){
        result = amount - amount*3/100;
    }
    else if (amount>300 && amount<500){
        result = amount - amount*5/100;
    }
    else if (amount>500){
        result = amount - amount*7/100;
    }
    alert(result);
}