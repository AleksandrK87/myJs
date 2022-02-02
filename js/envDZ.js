'use strict';

function customCounter(x) {
    let i = 0; 
  
    return function () {
      return i+=x;
    };
  }
  
  const myCounter = customCounter(5);
  const result1 = myCounter(); 
  console.log(result1);
  const result2 = myCounter();
  console.log(result2);
  const result3 = myCounter();
  console.log(result3);