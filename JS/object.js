const mysymb=Symbol("key11");

const user={
    "name":"Amit Vishwakarma",
    [mysymb]:"key11",
    email:"amitvish@gmail.com",
    location:"Ayodhya",
    age:19,
    lastLoggedIn:["Monday","Tuesday","Wednesday","Thursday"]
}

// console.log(typeof user.email)
// console.log(typeof user["email"]);
// console.log(typeof user[mysymb]);
// console.log(user.name);

user.email="amitvish8881@gmail.com";
// Object.freeze(user);
user.email="Amit9991@cdbchj";
// console.log(user);


user.greeting=function(){
    console.log("Hii JS User!!!");
}
user.greet=function(){
    console.log(`Hello!!! JS User, ${this.name}.`);
}
// user.greet();
// console.log(user.greeting());



const user1={
    age:19,
    username:{
        fullname:{
            firstname:"Amit",
            lastName:"Vishwakarma"
        }
    },
    location:"Ayodhya",
    RegularUser:true
}

// console.log(user1);
// console.log(user1.RegularUser)
// console.log(user1.username?.fullname.firstname);


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

const obj3=Object.assign({},obj1,obj2);
const obj4={...obj1,...obj2};
// console.log(obj3);
// console.log(obj4);

const obj11=[
    {
        name:"ankit",
        email:"ankitkumar5526@gmail.com"
    },
    {
        name:"amit",
        email:"amitkumar5526@gmail.com"
    },
    {
        name:"aditya",
        email:"adityakumar5526@gmail.com"
    },
    {
        name:"anmol",
        email:"anmolkumar5526@gmail.com"
    }
    
]
// console.log(obj11[2].name);
// console.log(obj11[3].email);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('name'));

 



