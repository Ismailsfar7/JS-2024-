// singleton objects are This ensures that there is only one instance of the class throughout the application,
//  providing a global point of access to that instance. way to declare it is below.
// const user = new Object()

// below is the declaration for non-singleton objects where you can insert or put values in the code anywhere and anytime 

const user1 = {}
user1.id = "12331"
user1.name = "Farooqi"
user1.isloggedin = false
// console.log(user1);

// here you can merge the objects and store it in one, {target, source}, hence we give 1st index as an empty object.
const obj1 =  {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);
// or else you can use, same array spread() function to merge it.


const course = {
    instructor: "Ismail",
    class: "js",
    duration: "4 weeks"
}
const {class:sec} = course
console.log(sec);

