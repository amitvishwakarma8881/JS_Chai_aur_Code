// function myName(){
//     console.log("A");
//     console.log("M");
//     console.log("I");
//     console.log("T");
// };

// // myName();

// const name="A M I T";
// // const name1=();

// function name2(){
//     console.log(name.split(' '));
// }
// name2();

function addTwoNumber(a,b,c,d){
    let result=a+b+c+d;
    return result;
}
const result=addTwoNumber(4,2,6,8);
// console.log("Result:",result);

function logInUserMessage(username="Sam"){
    if(username===undefined){
        console.log("Please enter a Username");
        return
    }
    return `${username} is just logged in...`
}
// console.log(logInUserMessage("Amit"));

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,300,400,600));


const worker={
    username1:"Amit Vishwa",
    price:1999,
    location:"Ayodhya"
};

function handleObject(anyobject){
    console.log(`The user is ${anyobject.username1} from ${anyobject.location} has ordered an order of price ${anyobject.price}.`);
};
// handleObject(worker);



const myNewArray=[200,100,300,400,500];

function reviewSecondValue(getArray){
    return getArray[3];
}
// console.log(reviewSecondValue(myNewArray));

// +++++++++++++++++++++++++++++++++++++++++
// Scopes....

function addone(num){
    return num+2;
}
// console.log(addone(5));

const addtwo=function (num){
    return num+2;
}
addtwo(5); 

// 'this' keyword provide us the reference of context of current Scope.
// this keyword is used in only object cannot be possessed in functions.




// +++++++++++++++++ARROW FUNCTION++++++++++++++++++
const add1=(num2,num3)=>{
    return num2+num3;
}
// console.log(add1(5,4));

const add4=(num1,num2)=>(num1+num2);
// console.log(add4(2,1)); 



// +++++++++++++++++++++++++++++++++IIFE(immediately invoked function expression)

(function working(){
    // console.log("WORKING PROCESS");
})();

((name)=>{
    console.log(name);
})("Amit");

