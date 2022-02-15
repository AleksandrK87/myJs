'use strict';

let map = new Map ([
   [1,"first"], 
   [3,"third"]
]);

for (let key of map.keys()) {
   console.log(key);
};

for (let amount of map.values()) {
   console.log('amount :>>',amount);
};

console.log('map.size :>> ', map.size);

map.set(5);

console.log(map.has(5));

map.delete(3);

console.log(map.has(3));

const set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log('colection.has(3) :>> ', set.has(3));

console.log('colection.has(4) :>> ', set.has(4));

set.add(5);
set.add(6);

for(let value of set) console.log(value);

set.delete(2);
set.clear();

const arr =  [1,6,9,4,9,1,5,6];

const arrOfUniqueValues = Array.from(new Set(arr));
const arrOfUniqueValues2 = [...new Set(arr)];

console.log(arrOfUniqueValues2);

const arr1 = [1,6,9,4,9,1,5,6];
const arr2 = [5,10,11];

const arr1Unique = [...new Set(arr1)];
const arr2Unique = [...new Set(arr2)];
const allUniqueArr = new Set([...arr1Unique, ...arr2Unique]);

const uniqueArr = new Set([...arr1, ...arr2]);
console.log(uniqueArr);

