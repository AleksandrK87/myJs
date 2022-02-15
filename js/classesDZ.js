'use strict';

function MyArray(){
   this.length = 0;
   // console.log(arguments);
   for(let i = 0; i < arguments.length; i++) {
     this[i] = arguments[i];
   }
   this.length = arguments.length;
 }
 
 const myArrayProto = new MyArray();

 class MyArray {
    constructor
 }