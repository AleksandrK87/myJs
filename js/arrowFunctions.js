'use strict'

function sum(){
    let sum = 0;
    for(let i=0; i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
console.log('object :>> ', sum(1,2,3,4,5));

const sum = (a, b) => { return a + b;}

const sum1 = (a, b) => a + b;

const square = n => n * n;

const isAdult = (age) => age >= 18;
console.log('isAdult :>> ', isAdult(17));
console.log('isAdult :>> ', isAdult(20));
const isEven = number => number % 2 === 0;
console.log(`isEven:>> `, isEven(3));
console.log(`isEven:>> `, isEven(4));
const greeting = (lang, userName) => {
    let result = '';
    if(lang === 'en') {result = Hello  + userName;}
 
 
  else if(lang === 'ru') {result = 'привет ' + userName;}
 
 
  else if(lang === 'ua') {result = 'прiвiт ' + userName;}
  return result;
}
console.log('greeting :>> ', greeting('en', 'Andrey'));
console.log('greeting :>> ', greeting('ua', 'Andrey'));
console.log('greeting :>> ', greeting('ru', 'Andrey'));

const user1 = {
    firstName: 'Test',
    lastName: 'Testovich',
    getFullName: ()

}