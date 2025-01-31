// javascript is a resizeable...it can contain mix type of datatypes.
const arr=[1,2,3,4,5];
const arr1=new Array(6,7,8,9,0);
// console.log(arr);
// arr.push(8);
// arr.unshift(9);
// console.log(arr.__proto__.length);
let arr2= [...arr , ...arr1];
console.log(arr2);
// console.log(arr.length)


