// console.log("Hello from script.js")
// alert("example of alert");


// console.log(typeof 1);
// console.log(typeof 1.5);
// console.log(typeof "Hello");
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof "");
// console.log(typeof '');
// console.log(typeof ``);

// var a = 5;
// console.log(a, typeof a);
// a = "Hello"
// console.log(a, typeof a);

// let b = 5;

// console.log(a);
// a = 5
// console.log(a);
// var a = 10;
// console.log(a);


// console.log(a);//error
// let a;
// console.log(a);
// a = 5;
// console.log(a);

// {
//     var a = 10;
// }
// console.log(a)

// function sum(num1 = 0, num2 = 0) {
//     return num1 + num2;
// }

// console.log(sum(2, 3));
// console.log(sum());

// function greet() {
//     console.log("Hi, from a function");
// }

// let result = 5;
// result = greet();
// console.log("This is result value: ", result);

// function f(x, y, z, t) {
//     console.log("x: " + x);
//     console.log("y: " + y);
//     console.log("z: " + z);
//     console.log("t: " + t);
// }
// f();
// f(1);
// f(2, 3);


// function log() {
//     console.log("No Arguments");
// }
// function log(x) {
//     console.log("1 Argument: " + x);
// }
// function log(x, y) {
//     console.log("2 Arguments: " + x + ", " + y);
//     console.log(arguments, arguments.length)
// }

// // log();
// // log(5);
// log(6, 7);
// function findMax() {
//     let i;
//     let max = -Infinity;
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     console.log(arguments, arguments.length);
//     return max;
// }
// let max1 = findMax(1, 123, 500, 115, 66, 88);
// console.log(max1);
// let max2 = findMax(3, 6, 8);

// function sum(x, y, ...more) {
//     //"more" is array of all extra passed params
//     let total = x + y;
//     if (more.length > 0) {
//         for (let i = 0; i < more.length; i++) {
//             total += more[i];
//         }
//         console.log(total);
//         return total;
//     }
// }

// sum();
// sum(5, 5, 5);
// sum(7, 7, 7, 7, 7);

// function sum(a, b) {
//     return a + b;
// }
// // assign the function sum to variable
// let func = sum;
// console.log(func)
// console.log(func())

//pass it as an argument
// function print(func) {
//     console.log(func)
//     console.log(func(5, 10))
// }
// print(sum)

//return the function from the function

// function getFunc() {
//     let mult = function (a, b) { return a * b };
//     return mult;
// }

// let resultFunc = getFunc();
// console.log(resultFunc);
// console.log(resultFunc());


// let arr = ["Banana", "Apple", "Plum"]
// // console.log(arr);
// arr[3] = "Pear"
// // console.log(arr);
// arr[8] = "Cherry"

// delete arr[8];

// console.log(arr);


// let arr = [1, 2, "Hello", true, {}];
// console.log(arr);

// let arr = ["Banana", "Apple", "Plum"]
// // let removedArray = arr.splice(1, 2);
// console.log(arr);
// // console.log(removedArray);

// arr.splice(1, 0, "Cherry", "Pear");//["Banana","Cherry", "Pear", "Apple", "Plum"]
// console.log(arr);

let arr = [1, 2, 3]
// let newArray = arr.slice(2, 4)
// console.log(newArray);

// console.log(arr.indexOf(8));
// console.log(arr.includes(3));

// function func(value, index, arr1) {
//     console.log("value:", value);
//     console.log("index:", index);
//     console.log("arr:", arr1);
// }
// arr.forEach(func)



// let users = ["John", "Pete", "Marry"]
// let filteredUser = users.filter(function (value, index, arr1) {
//     return !value.startsWith("J")
// }).filter(function (v, i, arrr) {
//     return v.length > 4
// })

// console.log(filteredUser);