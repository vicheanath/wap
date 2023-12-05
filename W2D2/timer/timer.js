// (
//     function myDisplay() {
//         console.log("Helllo");
//     }
// )()

// console.log(window);

// function incBy2(e) { //callback
//     console.log(e * 2)
//     return e * 2;
// }
// console.log("start");
// let newArr = [1, 2, 3].map(incBy2);//sync
// // console.log(newArr);
// console.log("end")


// console.log("start")
// function sayHi() {
//     console.log('Hello');
// }
// let id = setInterval(sayHi, 1000);
// console.log("end");



// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }


// console.log("start")
// function sayHi() {
//     console.log('Hello Timeout');
// }

// function sayHi1() {
//     console.log('Hello Interval');
// }
// setTimeout(sayHi, 0);
// setInterval(sayHi1, 0);






// function cb1(phrase, who) {
//     console.log(phrase, who);
//     console.log('callback1');
// }

// setTimeout(cb1, 1000, "Hello", "John");


// Promise.resolve()
//     .then(() => console.log('promise2'))//p2


// Promise.resolve()
//     .then(() => console.log('promise1'))//p1







// function cb2() {
//     console.log('callback2');
// }
// function cb4() {
//     console.log('callback2');
// }
// function cb3() {
//     console.log('callback3');
// }

// // setTimeout(cb2, 3000);
// setTimeout(cb3, 0);
//callback3
//hello john
// callback1
// callback2

// document.getElementById("start").onclick = function cb1() {
//     let count = 0;
//     console.log(count);
//     timerId = setInterval(() => console.log(count++, 'tick'), 1000);

// }


// document.getElementById("stop").onclick = function cb2() {
//     clearInterval(timerId);
// }




// let timerId = setTimeout(() => alert("never happens"), 3000);
// alert(timerId); // timer identifier
// clearTimeout(timerId);
// alert(timerId); // same identifier (doesn't become null after canceling)


// repeat with the interval of 2 seconds




// function foo() {
//     console.log("foo...");

// }
// setTimeout(foo, 5000);

// let timerId = setTimeout(() => alert("never happens"), 5000);
// alert(timerId); // timer identifier
// // clearTimeout(timerId);
// let a = 0;
// let timerId = setInterval(() => console.log(a++), 2000);
// // after 5 seconds stop
// clearInterval(timerId);
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// setInterval(sum, 1000, 8, 8);

// console.log('start');
// function sum(num1) {
//     console.log(num1 + 1);
//     return num1 + 1;
// }

// const timerId = setInterval(sum, 2000, 1);
// console.log('end');
// console.log(window);


// console.log("start");
// setTimeout(sum, 0, 5, 10);
// console.log("end");

// console.log("start");
// setTimeout(() => console.log("Hello"), 0);
// console.log("end");

// document.getElementById('btn').addEventListener('click', function () {
//     clearInterval(timerId);
// });




// function cb1() {
//     console.log('callback1');
// }

// function cb2() {
//     console.log('callback2');
// }

// setTimeout(cb1, 1000);
// setTimeout(cb2, 0);