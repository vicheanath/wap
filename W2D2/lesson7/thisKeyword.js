

//global context this referes to the global object ----------------------
// "use strict";
// console.log(this);
// console.log(window === this);

//in regular function ------------------------------------------------------
// in strict mode, this remains as undefined
// in normal mode, this will be window


// function greet() {
//     console.log(this);
// }
// greet();
// "use strict";
// when function called from within another function
// function outer() {

//     function inner() {
//         console.log(this);
//     }
//     inner();
// }
// outer();

//method call --------------------------------------------------------------
// let a = 5
// let user = {
//     firstName: "John",
//     sayHi(lname) {
//         console.log(this);//user
//         console.log(lname);
//         // console.log(firstName);
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };

// // user.sayHi(); //works
// let func = user.sayHi;
// func("Anna")//this=>window
// func.call(user, "Anna");
// func.apply(user, ["Anna"]);
// func.bind(user)("Anna");// this=>user

// setTimeout(user.sayHi, 2000)


// let anotherUser = {
//     firstName: "Anna"
// }
// anotherUser.sayHi = user.sayHi;
// // anotherUser.sayHi();
// user.sayHi();



//regular function inside of method -------------------------------------
// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(this)//user
//         console.log(`Hello, ${this.firstName}!`);//user.firstname
//         let self = this;
//         function inner() {
//             console.log(`Hello, ${self.firstName}!`);//hello, window.firstname=>undefined
//         }
//         inner();
//     }
// };
// user.sayHi(); //works


// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(this)
//         console.log(`Hello, ${this.firstName}!`);
//         // solution1:
//         let self = this;
//         function inner() {
//             console.log(`Hello, ${self.firstName}!`);
//         }
//         inner();
//         // //solution 2:
//         let inner1 = () => {
//             console.log(`Hello, ${this.firstName}!`);
//         }
//         inner1();
//     }
// }
// user.sayHi(); //works


//to invoke a function in JS, there are 3 ways:
// foo(5, 7);

// function foo(a, b) {
//     console.log(`this keyowrd:`, this);
//     console.log(a, b);
// }

// foo();//this=>window
// foo.call("Hello", 2, 3); //this=>string
// foo.call({ x: 1, y: 2 }, 5, 7);//this=>obj
// let obj = { x: 1, y: 2 }
// foo.apply(obj, [5, 7]);
// foo.bind({ x: 1, y: 2 }, 2, 3)(); // foo.bind(1)(2,3);




// let user = {
//     name: "John"
// }

// let anotherUser = {
//     name: "Anna"
// }

// function display(arg) {
//     console.log(this.name, arg);
// }
// // display("Hello");


// display.call(user, 15);//this = user
// display.call(anotherUser, 20);

// let car = {
//     name: "car name",
//     model: "car model"
// }

// display.call(car, 85)
// display.apply(user, [15]);

// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     printName(arg1, arg2) {
//         console.log(`${this.firstName} ${this.lastName}`, arg1, arg2);
//     }
// }
// user.printName();
// let user2 = {
//     firstName: "Anna",
//     lastName: "Karry",
// }
// user.printName.call(user2);
// user.printName.apply(user2);
// user.printName.bind(user2)(); //bind: doesn't execute the function, it returns the function
// let admin = {
//     firstName: "Anna",
//     lastName: "Smith"
// }
// user.printName.call(admin, 5, 7);
// user.printName.apply(admin, [5, 7]);
// let d = user.printName.bind(admin, 8, 9);
// d();
// console.log(d);


// const user = {
//     salute: "",
//     greet: function () {
//         this.salute = "Hello";
//         console.log(this.salute);
//         const setFrench = function (newSalute) { //inner function
//             this.salute = newSalute;
//             console.log(this);
//         };
//         setFrench("Bonjour");
//         console.log(this.salute);
//     }
// };
// user.greet();


//Self pattern
// const user = {
//     salute: "",
//     greet: function () {
//         const self = this;
//         self.salute = "Hello";
//         console.log(this.salute);
//         const setFrench = function (newSalute) { //inner function
//             self.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         console.log(this.salute);
//     }
// };
// user.greet();

//arrow function
// const user = {
//     salute: "",
//     greet: function () {

//         self.salute = "Hello";
//         console.log(this.salute);
//         const setFrench = (newSalute) => { //inner function
//             this.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         console.log(this.salute);
//     }
// };
// user.greet();

// //call, apply, bind
// const user = {
//     salute: "",
//     greet: function () {
//         self.salute = "Hello";
//         console.log(this.salute);
//         const setFrench = function (newSalute) { //inner function
//             this.salute = newSalute;
//         };
//         setFrench.call(this, "Bonjour");
//         console.log(this.salute);
//     }
// };
// user.greet();



// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     printName(arg1, arg2) {
//         console.log(`${this.firstName} ${this.lastName}`, arg1, arg2);
//     }
// }
// user.printName();
// setTimeout(user.printName, 2000);
// setTimeout(user.printName(), 2000);

// // //1.wrapper --------------
// setTimeout(() => user.printName(), 2000);
// setTimeout(function () { user.printName(); }, 2000);

// // //2. bind
// setTimeout(user.printName.bind(user), 2000);

// // //3. wrapper + call
// setTimeout(() => user.printName.call(user), 2000);


// // //4. wrapper + apply
// setTimeout(() => user.printName.apply(user), 2000);


//arrow function ---------------------------------------------------------------------

// let x = (a) => {
//     console.log(this);//window
//     console.log(a);
//     // console.log(arguments);

// }
// x(68);




// let x = function (a) {
//     s = 15;
//     var s = "hello";
//     let d = 5;
//     console.log(this);
//     console.log(a);
//     console.log(arguments);
// }
// x(68);

// const x = {
//     a: 1,
//     b: 2,
//     add() { return this.a + this.b }
// }
// console.log(x.add()); //3


// console.log(window);

// const y = {
//     a: 1,
//     b: 2,
//     add: () => { console.log(this) }
// }

// console.log(y.add());


// let user1 = {
//     firstName: "John",
//     sayHi() {
//         console.log(this)
//         console.log(`Hello, ${this.firstName}!`);
//     },
//     greet: () => { //parent scope of greet method is global scope
//         console.log("from arraw function " + this);
//         console.log('Hi' + this.firstName);
//     }
// };
// user.sayHi();
// user1.greet();

// let result = prompt("Password?", "default");
// console.log(result);

// {
//     {
//         function display() { //outer:global
//             console.log('hello from display');
//         }
//     }
// }
// display();

// function outer() {
//     function inner() { // outer:outer

//     }
//     inner()
// }

// let str = "global";
// let obj = {
//     str: "obj",
//     dislay: function () {
//         console.log(str);//global  outer:global
//         console.log(this.str);//this=>obj outer:global
//     }
// }
// obj.dislay();

// let str = "global";
// function get() {
//     let str = "function"
//     let innerObj = {
//         str: "innerObj",
//         dislay: function () {
//             console.log(str);//outer:get, str=>function
//             console.log(this.str);//innerobj
//         }
//     }
//     innerObj.dislay();
// }
// get();

// const user = {
//     salute: "",
//     greet: function () {
//         this.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = function (newSalute) { //inner function
//             this.salute = newSalute;//this=>window
//         };
//         setFrench("Bonjour");
//         console.log(this.salute); //Bonjour??// this=>user
//     }
// };

// user.greet(); //Hello	Hello	??
