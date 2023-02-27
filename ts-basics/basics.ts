//Simple types
let age1:number=14;

let userName:string;

userName="Yasvi";

let userName1:string | string[];

userName1="Yasvi";

let isInstructor:boolean;

isInstructor=false;

//Complex types

let hobbies:string[];

hobbies=["Sports","Cooking"];


//Type Aliases
type Person={
    name:string,
    age:number
}
// let person:{
//     name:string,
//     age:number
// }

let person:Person;


person={
    name:"Yasvi",
    age:21
}


// person{
//     isEmployee:true
// }

// let people:{
//     name:string,
//     age:number
// }[];

let people:Person[];


//Type inference

let course="React-the complete guide"

// course=1234;


//Union types

let course1 : string | number="React-the complete guide"

course1=1234;



//Functions & types

function add(a:number,b:number){
    return a+b;
}

function print1(value:any){
    console.log(value);
}

//Generics

// function insertAtBeginning(array:any,value:any){
//   const newArray=[value,...array];
//   return newArray;
// }

function insertAtBeginning<T>(array:T[],value:T){
    const newArray=[value,...array];
    return newArray;
  }

const demoArray=[1,2,3];
const updatedArray=insertAtBeginning(demoArray,-1);
const stringArray=insertAtBeginning(['a','b','c'],'d');
console.log(updatedArray);
console.log(stringArray);

// updatedArray[0].split('');