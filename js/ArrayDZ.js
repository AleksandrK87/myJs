'use strict';

const arr1 = [1,2,5,6,0,10,-2];

// 1
const item1 = arr1.pop();
console.log(arr1)

arr1.unshift(25);
arr1.push(15);
console.log(arr1)

// 2
console.log(arr1.length)

// 3

const arr3 = [1,2,5,6,0,10,-2];


const evenIndexesOfArray = [];
arr3.filter((number, index) => {
   if (index % 2 === 0) {
      evenIndexesOfArray.push(number);
   }
})
console.log(evenIndexesOfArray);

// 4

const arr2 = [1,2,5,6,0,10,-2];


function even (arr2) { 
  
  for(let i = 0; i < arr2.length; i++ ) {
   if(arr2[i] % 2 === 0) console.log(arr2[i]);
  }
}

even(arr2);

// 5

const arr4 = [1,2,5,6,0,10,-2];


const zeroIndex = [];
arr4.filter((number, index) => {
   if (index === 0) {
      zeroIndex.push(number);
   }
})
console.log(zeroIndex);

// 6

const arr6 = [1,2,5,6,0,10,-2];
const zeroNumbers = [];
arr6.filter(zeroNumberInArray => {
   if (zeroNumberInArray  == 0) {
    zeroNumbers.push(zeroNumberInArray);
   }
})
console.log(zeroNumbers);

// 7

/*const numbers = [-1, 5, 0, 9, -10 ];

const isDellNull = function (item){
  return item > 0 || item < 0;
}

const dellNull = numbers.filter(isDellNull)
console.log(dellNull);*/

// 8

/*[-1, 5, 0, 9, -10 ].forEach(function(item){
  console.log(item ** 2);
});*/

// 9

/*const numbers = [-1, 5, 0, 9, -10 ];

const isEven = function(item) {
  return item % 2 === 0;
}

console.log(numbers.every(isEven));*/

// 10

/*const numbers = [-1, 5, 0, 9, -10 ];

const isEven = function(item) {
  return item < 0;
}

console.log(numbers.some(isEven));*/

// 11

const numbers = [-1, 5, 0, 9, -10 ];

const cube = function (item) {
  return item ** 3;
}

const newNumbers = numbers.map(cube)
console.log(newNumbers);