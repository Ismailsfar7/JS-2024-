const juser = {
    Name: "Ismail",
    Email: "ismial@google.com",
    phone: 1324546576,
    age: 27,
    location: "dallas",
    isloggedin: false,
}
// console.log(juser["Name"]);  
// above is the best practice to access or to call the values with above syntax.

// writing methods with objects below

juser.greeting = function(){
    console.log('hello Welcome, ${this.Name}');
}
console.log(juser.greeting());
