/*Створи функцію, яка буде виводити кількість переданих їй аргументів.*/

function chekArg(a, b, c, d, e) {
    alert (chekArg.length);
}


/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/

function getNumber(){
    let a = prompt("Введіть перше число");
    let b = prompt("Введіть друге число");
    if(a<b){
        alert (-1);
    }
    else if(a>b){
        alert (1);
    }
    else if(a===b){
        alert (0);
    }
}

/*Напиши функцію, яка обчислює факторіал переданого їй числа.*/

function getFactorial(){
    let num = parseInt(prompt("Введіть число"));
    if(num<=10){
        let result = 1, i = 1;
        while(i<=num){
            result = result * i;
            i++;
        }
        alert (result);
    }else{
        alert ("Завелике число. Введіть число, яке менше або дорівнює 10.");
    }
}

/*Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

function createNumber(){
    let a = prompt("Ввведіть першу цифру");
    let b = prompt("Ввведіть другу цифру");
    let c = prompt("Ввведіть третю цифру");
    if(a<=9 && b<=9 && c<=9){
        a = String(a);
        b = String(b);
        c = String(c);
        let result = a + b + c;
        alert (result);
    }else{
        alert ("Введіть цифру, яка менше або дорівнює 9");
    }

}

/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

function calcArea(){
    let a = prompt("Ввведіть ширину");
    let b = prompt("Ввведіть довжину");
    if(a>0 && b>0){
        let res_rectangle = a * b;
        alert (res_rectangle);
    }
    else{
        let res_quadrate = a * a || b * b;
        alert (res_quadrate);
    }
}

/*Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

function chekNumber(){
    let a = parseInt(prompt("Введіть число"));
    let sum = 0;
    let result;
    for (let i = 1; i<= (a/2); i++){
        if(a % i == 0){
            sum += Math.ceil(i);
            result = a == sum;            
        }else{
            result = a != sum;
        }
        
    }
    alert (result);
}


/*Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/

function perfectNumber(){
    let a = parseInt(prompt("Введіть мінімальне значення діапазону"));
    let b = parseInt(prompt("Введіть максимальне значення діапазону"));
    let sum = 0;
    let num;
    
    while(i>=(a/2) && i<=(b/2)){
        for (let i = 1; i<= (a/2); i++){
            if(a % i == 0){
                sum += Math.ceil(i);
                num == sum;
                result += num + " ";         
            }
            num++;
        }
    }
    alert (result);
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