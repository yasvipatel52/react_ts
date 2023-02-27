var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Simple types
var age1 = 14;
var userName;
userName = "Yasvi";
var userName1;
userName1 = "Yasvi";
var isInstructor;
isInstructor = false;
//Complex types
var hobbies;
hobbies = ["Sports", "Cooking"];
// let person:{
//     name:string,
//     age:number
// }
var person;
person = {
    name: "Yasvi",
    age: 21
};
// person{
//     isEmployee:true
// }
// let people:{
//     name:string,
//     age:number
// }[];
var people;
//Type inference
var course = "React-the complete guide";
// course=1234;
//Union types
var course1 = "React-the complete guide";
course1 = 1234;
//Functions & types
function add(a, b) {
    return a + b;
}
function print1(value) {
    console.log(value);
}
//Generics
// function insertAtBeginning(array:any,value:any){
//   const newArray=[value,...array];
//   return newArray;
// }
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
console.log(updatedArray);
console.log(stringArray);
// updatedArray[0].split('');
