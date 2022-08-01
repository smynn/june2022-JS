//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//Перевірте  скрипт при a, що дорівнює 1, 0, -3
let t = prompt();
if (t !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
};

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let x = prompt();
if (x<0 && x>15){
    console.log('1');
} else if (x<15 && x>30){
    console.log('2');
} else if (x<30 && x>45){
    console.log('3');
} else if (x<45 && x>59){
    console.log('4');
} else {
    console.log('push Ctrl+F5')
}


//- У змінній day дано якесь число від 1 до 31.
//Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).



let r = prompt();
if (r>0 && r<10){
    console.log('1');
} else if (r>10 && r<20){
    console.log('2');
} else if (r>20 && r<31){
    console.log('3');
} else {
    console.log('push Ctrl+F5')
}




//- Скласти розклад на тиждень за домопоги switch.
//Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
//на цей день (можна замість плану на день, назву дня англійською).
let e=prompt();
switch (e){
    case "1":
        console.log('smathing 1');
        break;
    case '2':
        console.log('smathing 2');
        break;
    case "3":
        console.log('smathing 3');
        break;
    case '4':
        console.log('smathing 4');
        break;
    case "5":
        console.log('smathing 5');
        break;
    case '6':
        console.log('smathing 6');
        break;
    case '7':
        console.log('smathing 7');
        break;
    default:
        console.log('????');
}
//- Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
let w,y;
w = +prompt();
y = +prompt();
if (x>y){
    console.log('x');
} else if (y>x){
    console.log('y');
} else {
    console.log('=');
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//Напишіть код який, за допомоги  оператора  буде присвоювати змінній х значення "default"
//якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let q =' ';
if (!q || q === ' '){
    q='default';
}
console.log(q);