// Premitive 

// 7 types : string , number , boolearn , null , undefined , symbol, BigInt 

const score = 100;
const scoreValue = 100.3 ;

const isLoggedIn = false ;
const outsidetemp = null ;
let userEmails;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const BigNumber = 1212121211212121212121212n; // big Int

// Reference data type (non primitive)

// Array , Object , Functions

const heros = ["superman", "emotionalman", "vondoman"];

let myObj = {
    name : "Tanvir",
    age : 23,
}

const myFunction = function()
{
    console.log("Hello Tanvi") ;
}

console.log(typeof heros);
console.log(typeof anotherId);
