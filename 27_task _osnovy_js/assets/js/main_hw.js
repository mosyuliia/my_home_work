/*Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”*/

function helloName(){
    let yourName = prompt("Напишіть Ваше ім'я");
    const hello = 'Привіт, ';
    let result =  hello + yourName;
    alert (result);
}

/*Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;*/

function yourAge(){
    let yearBorn = prompt("Введіть рік народження");
    const thisYear = 2021;
    let howOld = "Ваш вік ";
    let result = (howOld + (thisYear - yearBorn));
    alert(result);
}

/*Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата*/

function perimeter(){
    let a = prompt("Введіть довжину квадрата (см)");
    let b = "Периметр (см) "
    let result = b + (a * a);
    alert (result);
}

/*Запитай у користувача радіус кола і виведи площу такої окружності.*/

function area(){
    let a = prompt("Введіть радіус кола (см)");
    let b = "Площа кола (см) ";
    const pi = 3.14; 
    let result = b + (pi * (a * a));
    alert (result);
}

/*Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/

function speed(){
    let a = prompt("Введіть відстань (км)");
    let b = prompt("Введіть бажану кількість годин");
    let c = "Ви маєте рухатись зі швидкістю (км/год) ";
    let result = c + (a / b);
    alert (result);
}

/*Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.*/

function currency(){
    let a = prompt("Введіть кількість доларів (USD)");
    const b = 0.89;
    let c = " EUR"
    let result = (a * b) + c;
    alert (result);
}