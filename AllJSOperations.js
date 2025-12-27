console.log('Hello World');

var x = 10;
var x = 20;

console.log(x);

let y = 40;
// let y = 50;  //Syntex error already declared.
console.log(y);

const r = 45;
// const r = 50; //Syntex error const cant change.
console.log(r);

const obj  = {
    name: "Rohit",
    rollNo: 3045
}

for(let key in obj){
    console.log(key, ":", obj[key]);
}

console.log(obj);
console.log(obj.name);

var age = 20;

if(age<18){
    console.log("You are not adult");
}
else if(age>18 && age<25){
    console.log("You are youngester");
}
else{
    console.log("Invalid age");
}

// loops - for loop, while loop, do while, for each, map.

let arr = [1, 2, 3,4];

for(let idx in arr){
    console.log(idx, arr[idx]);
}

console.log("Values Index Array")
//Map function humesha ek new array return karta hai wahi foreach array ke elements par operation karne ke liye hai.

let a = arr.map((value, index, array) =>{
    console.log(value, index, array);
    return value + 1;
})

console.log(a);

console.log("Filter values")
let a2 = arr.filter((h)=>{
    return h<10;
})
console.log(a2);

console.log("Reduce values")
let newarr = arr.reduce((h1, h2)=>{
    return h1 + h2;
})
console.log(newarr);




// functions - 

// const add = function(a, b){
//     return a+b;
// }

// console.log(add(5, 3));

// const add = function sum(a, b){
//     return a+b;
// }

// console.log(add(4, 4));


const add = (x, y) => x + y;

console.log(add(5, 5));

//Call back functions - sequence dosent matter.


function display(x, y, operation){
    var res = operation(x, y);
    console.log(res);
}

function operation(x, y){
    return x + y;
}


display(5, 5, operation);


//Asychronous operation
console.log("Hii At first");

setTimeout(()=> {
    console.log("Hii after asynchronous way");
}, 2000);

console.log("Hii at last");

//Promise - Use to handle asynchronous operations and returns a promise.
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
            const random = Math.floor(Math.random() * 10);
            if(random<5){
                resolve("Successfully executed");
            }else{
                reject("Some Error Occured");
            }
    }, 2000)
})

promise.then((res) =>{
    console.log(res);
}).catch((error) =>{
    console.log(error);
})

//Hoisting 
x = 10;
console.log(x);

var x = 10;


myFunction();

function myFunction(){
    console.log("Hello Rohit!!");
}

console.log(y);

var y = 20;

//lexical scoping

function outerFunction(){
    const outerVal = "I am Outer value";
    
    function innerFunction(){
        console.log(outerVal);
    }
    
    innerFunction();
}

outerFunction();

//clousers - function + lexical scoping

function calculate(){
    let count = 1;
    return function(){
        count++;
        console.log(count);
    };
}

const clouser1 = calculate();
clouser1();
clouser1();

const clouser2 = calculate();
clouser2();

//Async/await - simplify the use of promise async handles asynchronous operation and await blocks the execution of code.

async function fetchResponse(){
    try{
        const result = await Math.floor(Math.random() * 20);
        console.log("executed", result);
    } catch(error){
        console.log(error);
    }
}

fetchResponse();

//Shallow and deep copy -
let originalobj = {
    name: "Rohit",
    city: "Indore"
}

console.log(originalobj);

let shallowCopy = {...originalobj};

console.log(shallowCopy);

shallowCopy.city = "Pune";

console.log(shallowCopy.city);
console.log(shallowCopy);

let deepCopy = JSON.parse(JSON.stringify(originalobj));

console.log(deepCopy);

deepCopy.name = "Sohil";

console.log(deepCopy);

//Destructuring - 
let [a, b] = [1, 2];

console.log(a, b);

//Bind, apply, call

console.log('Hello World');

const data = {
    name : "Rohit",
    rollNo : 3045,
    section : "N",
    details : function(section){
        return this.name+ " "+this.rollNo+ " "+section;
    }
}

const person = {
    name : "Rohan",
    rollNo : 4521
}

console.log(data.details.call(person, "S"));
console.log(data.details.apply(person, ["S"]));
const result = data.details.bind(person, "S");
console.log(result);
console.log(result());
