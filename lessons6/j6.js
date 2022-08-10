//- Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'
let length1 = 'hello world';
let length2 = 'lorem ipsum';
let length3 = 'javascript is cool';
console.log(length1.length);
console.log(length2.length);
console.log(length3.length);
//- Перевести до великого регістру наступні стрінгові значення
//      'hello world', 'lorem ipsum', 'javascript is cool'
console.log(length1.toUpperCase());
console.log(length2.toUpperCase());
console.log(length3.toUpperCase());
//- Перевести до нижнього регістру настипні стрінгові значення
//      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(length1.toLowerCase());
console.log(length2.toLowerCase());
console.log(length3.toLowerCase());
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
console.log(str1.split(' '));


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
let nums = [11,21,3];
nums.sort(function(a, b){
    return a-b;
});
console.log(nums);
//sortNums(nums,'ascending') // [3,11,21]
let numss = [11,21,3];
numss.sort(function(a, b){
    return b-a;
});
console.log(numss);
//sortNums(nums,'descending') // [21,11,3]


//- є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a,b)=>{return b.monthDuration-a.monthDuration});
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
function big(q){
    return q.monthDuration>5
}
console.log(coursesAndDurationArray1.filter(big));
// описати колоду карт
let card = [
    {cardSuit:'spade', value:'6', color:'red'},
    {cardSuit:'spade', value:'7', color:'red'},
    {cardSuit:'spade', value:'8', color:'red'},
    {cardSuit:'spade', value:'9', color:'red'},
    {cardSuit:'spade', value:'10', color:'red'},
    {cardSuit:'spade', value:'ace', color:'red'},
    {cardSuit:'spade', value:'jack', color:'red'},
    {cardSuit:'spade', value:'queen', color:'red'},
    {cardSuit:'spade', value:'king', color:'red'},
    {cardSuit:'spade', value:'joker', color:'red'},
    {cardSuit:'diamond', value:'6', color:'red'},
    {cardSuit:'diamond', value:'7', color:'red'},
    {cardSuit:'diamond', value:'8', color:'red'},
    {cardSuit:'diamond', value:'9', color:'red'},
    {cardSuit:'diamond', value:'10', color:'red'},
    {cardSuit:'diamond', value:'ace', color:'red'},
    {cardSuit:'diamond', value:'jack', color:'red'},
    {cardSuit:'diamond', value:'queen', color:'red'},
    {cardSuit:'diamond', value:'king', color:'red'},
    {cardSuit:'diamond', value:'joker', color:'red'},
    {cardSuit:'heart', value:'6', color:'red'},
{cardSuit:'heart', value:'7', color:'red'},
{cardSuit:'heart', value:'8', color:'red'},
{cardSuit:'heart', value:'9', color:'red'},
{cardSuit:'heart', value:'10', color:'red'},
{cardSuit:'heart', value:'ace', color:'red'},
{cardSuit:'heart', value:'jack', color:'red'},
{cardSuit:'heart', value:'queen', color:'red'},
{cardSuit:'heart', value:'king', color:'red'},
{cardSuit:'heart', value:'joker', color:'red'},
{cardSuit:'clubs', value:'6', color:'red'},
{cardSuit:'clubs', value:'7', color:'red'},
{cardSuit:'clubs', value:'8', color:'red'},
{cardSuit:'clubs', value:'9', color:'red'},
{cardSuit:'clubs', value:'10', color:'red'},
{cardSuit:'clubs', value:'ace', color:'red'},
{cardSuit:'clubs', value:'jack', color:'red'},
{cardSuit:'clubs', value:'queen', color:'red'},
{cardSuit:'clubs', value:'king', color:'red'},
{cardSuit:'clubs', value:'joker', color:'red'},
{cardSuit:'spade', value:'6', color:'black'},
{cardSuit:'spade', value:'7', color:'black'},
{cardSuit:'spade', value:'8', color:'black'},
{cardSuit:'spade', value:'9', color:'black'},
{cardSuit:'spade', value:'10', color:'black'},
{cardSuit:'spade', value:'ace', color:'black'},
{cardSuit:'spade', value:'jack', color:'black'},
{cardSuit:'spade', value:'queen', color:'black'},
{cardSuit:'spade', value:'king', color:'black'},
{cardSuit:'spade', value:'joker', color:'black'},
{cardSuit:'diamond', value:'6', color:'black'},
{cardSuit:'diamond', value:'7', color:'black'},
{cardSuit:'diamond', value:'8', color:'black'},
{cardSuit:'diamond', value:'9', color:'black'},
{cardSuit:'diamond', value:'10', color:'black'},
{cardSuit:'diamond', value:'ace', color:'black'},
{cardSuit:'diamond', value:'jack', color:'black'},
{cardSuit:'diamond', value:'queen', color:'black'},
{cardSuit:'diamond', value:'king', color:'black'},
{cardSuit:'diamond', value:'joker', color:'black'},
{cardSuit:'heart', value:'6', color:'black'},
{cardSuit:'heart', value:'7', color:'black'},
{cardSuit:'heart', value:'8', color:'black'},
{cardSuit:'heart', value:'9', color:'black'},
{cardSuit:'heart', value:'10', color:'black'},
{cardSuit:'heart', value:'ace', color:'black'},
{cardSuit:'heart', value:'jack', color:'black'},
{cardSuit:'heart', value:'queen', color:'black'},
{cardSuit:'heart', value:'king', color:'black'},
{cardSuit:'heart', value:'joker', color:'black'},
{cardSuit:'clubs', value:'6', color:'black'},
{cardSuit:'clubs', value:'7', color:'black'},
{cardSuit:'clubs', value:'8', color:'black'},
{cardSuit:'clubs', value:'9', color:'black'},
{cardSuit:'clubs', value:'10', color:'black'},
{cardSuit:'clubs', value:'ace', color:'black'},
{cardSuit:'clubs', value:'jack', color:'black'},
{cardSuit:'clubs', value:'queen', color:'black'},
{cardSuit:'clubs', value:'king', color:'black'},
{cardSuit:'clubs', value:'joker', color:'black'}]
// - знайти піковий туз
console.log(card.filter(val => val.cardSuit==='clubs' && val.value==='ace' && val.color==='black'));
// - всі шістки
console.log(card.filter(val => val.value==='6'));
// - всі червоні карти
console.log(card.filter(val => val.color==='red'));
// - всі буби
console.log(card.filter(val => val.cardSuit==='spade'));
// - всі трефи від 9 та більше
console.log(card.filter(val => val.value>='9' && val.cardSuit==='heart'));


//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}


//Додатково по reduce
//Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//    diamonds:[],
//    hearts:[],
//    clubs:[]
//}
console.log(card.reduce((s, cards)=>{
    if(cards.cardSuit==='spade'){
        s.spade.push(cards)}
    if(cards.cardSuit==='heart'){
        s.heart.push(cards)}
    if(cards.cardSuit==='diamond'){
        s.diamond.push(cards)}
    if(cards.cardSuit==='clubs'){
        s.clubs.push(cards)}
    return s},{
    spade: [], heart: [], diamond: [], clubs: []}));