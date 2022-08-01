//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let number = [1, '2', 3, 4, true, 6, 7, false, '9', 10];
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);
console.log(number[5]);
console.log(number[6]);
console.log(number[7]);
console.log(number[8]);
console.log(number[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
    let a = {
    title:'abc',
    pageCount:123,
    genre:'def'
};
let b = {
    title:'bca',
    pageCount:231,
    genre:'efd'
};
let c = {
    title:'cab',
    pageCount:312,
    genre:'fde'
};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//    Поле "автори" - масив. Кожен автор має поля name,age
a.authors=['ac',32];
b.authors=['ad',37];
c.authors=['ab',45];
console.log(a);
//- Створити масив з 10 об'єктами які описують сутніть "користувач".
//Поля: name, username,password. Вивести в консоль пароль кожного користувача
let c1 ={
    name:'qwe',
    username:'asd',
    password:'xc',
};
let c2 ={
    name:'qwre',
    username:'asdf',
    password:'zxcv',
};
let c3 ={
    name:'qw',
    username:'as',
    password:'zx',
};
let c4 ={
    name:'qwer',
    username:'asdfg',
    password:'zxcv',
};
let c5 ={
    name:'l',
    username:'ad',
    password:'zc',
};
let c6 ={
    name:'we',
    username:'sd',
    password:'xc',
};
let c7 ={
    name:'ere',
    username:'dsd',
    password:'cxc',
};
let c8 ={
    name:'qwe',
    username:'asd',
    password:'zxc',
};
let c9 ={
    name:'qie',
    username:'akd',
    password:'zmc',
};
let c10 ={
    name:'qy',
    username:'ah',
    password:'zn',
};
let v=[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10];
let i;
for(i=0;i<10;i++){
    console.log(v[i].name);
};