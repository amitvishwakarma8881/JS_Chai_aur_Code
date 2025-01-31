// function work(){
//     console.log("Amit Vishwakarma.");

//     function amit(){
//         console.log("Home is a temple");
//     }
//     setTimeout(amit,3000);
// }
// console.log(work());
// work();
// console.log([work(),amit()]);

// const answer=function (){
//         function work1(){
//             console.log("Work1");
//         }
//         function work2(){
//             console.log("Work2");
//         //    work3();
//            setTimeout(work3,6000);
//         }
//         function work3(){
//             console.log("Work3");
//             // work1();
//             setTimeout(work1, 1000);
//         }
//         // work2();
//         setTimeout(work2,3000);
// }

// answer();

// let a=0;

// const work=setInterval(function vinay(){
//     console.log("Anil Message Aaya Hai....."+a);
//     a++;
// if(a==5){
// clearInterval(work)
// console.log("Interval Cleared!!!!!!!!!")
// }
// },1000);


// async function home(){
//     await sum();
//     console.log("Amit is at home.");
// }
// function sum(){
//     console.log("Working");
// }
// home();


// function mypromise(){
//     return new Promise(function car(resolve,reject){
//     const speed=true;
//     if(speed){
//         resolve("Car is Faster.");
//     }
//     else{
//         reject("Car is slow");
//     }
// });
// }
//     mypromise()
//     .then((data)=>{
//         console.log(data);
//     }) 

//     .catch((error)=>{
//         console.log(error);
//     })



// function directory(){
//     return new Promise((resolve,reject)=>
//     setTimeout(()=>{
//         const 
//     }))
// }


let a=20;
let b="20";
var state;
var State="uttar pradesh";

// console.table([a,b,state,State]);

// ++++++++++++++++++++++++++++++++++++++++

// stack (Primitive )   &  Heap(non-Primitive)

let myYoutubeName="FlareXStorm"
let anotherName=myYoutubeName;
anotherName="CreativeAmit";

// console.log(anotherName);
// console.log(myYoutubeName);



// ++++++++++++++++++++++++++++++++++++++++++++++++
// DATA TYPES(primitive and non-primitive);

// #Primitive(call by value ; jo bhi changes krte hai wo uske copy me hota hai)
    // 7 types:
    // String(), Number , Boolean , Null ,Undefined ,Symbol ,BigInt

// #Non-primitive(call by reference, jo bhi changes krte hai wo uske reference me mtlb dono me changes hota hai )
    // Array , Objects , Functions

// Javascript is a dynamically-typed language but typescript is a static typed language....
 
const id=Symbol('123');
const anotherId=Symbol('123');
// console.log(id==anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++
// string interpolation

const name="Amit"
const repoCount=10;

// console.log(name+ repoCount);//normal way to concatinate..
// console.log(`Hello My name is ${name} and my Repository count is ${repoCount}`); //good practice of concatinate it is also called string interpolation.

const user=new String('Aditya');
// console.log(user);
// console.log(user[4])
// console.log(user.__proto__);
// console.log(user.length);
// console.log(user.toUpperCase())
// console.log(name.__proto__)
// console.log(user.fontsize());

// console.log(user.charAt(3));
// console.log(user.indexOf('t'));

// console.log(user.splice(2,4));

const array=[2,3,4,5,6,7,8,9];
// (array.splice(4,3));

// (array.splice(1,0,"cummin","argon"));

// array.splice(-1,4,0,1);
// console.log(array)

// TRIM,REPLACE,

const newString="Allavantahnaipuram";
// console.log(newString.replace('vantah','Raju'));
// console.log(newString.trim());
// const sub=(newString.replace(/\s+/g , ""));
// console.log(sub);
// console.log(newString.includes("allm"))
// console.log(newString.split("a"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NUMBER AND MATHS IN JS.................

const score=452.32145685;
const newNumber=new Number(100);
// console.log(score);
// console.log(newNumber);
// console.log(newNumber.toString());
// console.log(newNumber.toFixed(4));
// console.log(newNumber.toString().length);
// console.log(score.toPrecision(6));

const score1=1000000000000000;
// console.log(score1.toExponential(2));
// console.log(score1.toLocaleString('en-IN'));


const min=10;
const max=20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//  DATES++++++++++++++++++++++++++++++++++

let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let myDate=new Date("01-14-2025");
// console.log(myDate.toLocaleString());

let myDate=Date.now();
console.log(Math.floor(Date.now()/1000));  