// 1
console.log(str);
var str = "hello";
console.log(str);
// Global EC creation {outer:null, this:window, str:undefined}
// Global EC execution {outer:null, this: window, str:"hello"}

// 2
let str = "hello";
console.log(str);
// Global EC creation {outer:null,this:window} TDZ{str}
// Global EC execution {outer:null, this:window,str:"hello"}

// 3
console.log(str);
if (true) {
  var str = "hello";
}
console.log(str);
// Global EC creation {outer:null,this:window,str:undefined}
// Global EC execution {outer:null,this:window,str:"hello"}

// 4
if (true) {
  let str = "hello";
  console.log(str);
}
console.log(str); // error
// Global EC creation :
// LE {outer:null,this:window}
// Block LE {outer:LE, this:window} TDZ{str}
// Global EC in execution:
// LE:{outer:null,this:window}
// Block LE {outer:LE,str:"hello"}

// 5
foo("Hi", 23);
function foo(arg) {
  if (arg) {
    var str = "hello";
  }
  console.log(str);
}
// Global EC creation : {outer:null,this:window,foo:fn}
// Global EC execution :{outer:null,this:window,foo:fn}
// Foo EC creation : {outer:Global,this:window, arguments:{0:"Hi",1:23,length:2},str:undefined}
// Foo EC execution : {outer:Global,this:window, arguments:{0:"Hi",1:23,length:2},str:"hello"}

// 6
var foo = function () {
  console.log("Hello");
};
foo();
// Global EC creation :{outer:null,this:window,foo:undefined}
// Global EC execution : {outer:null,this:window,foo:fn}
// Foo EC creation :{outer:global,this:window, arguments:{length:0}}
// Foo EC execution :{outer:global,this:window, arguments:{length:0}}

// 7

let foo = function () {
  console.log("Hello");
};
foo();

// Global EC creation :{outer:null, this:window} TDZ{foo}
// Global EC execution :{outer:null, this:window,foo:fn}
// function EC creation :{outer:global,arguments:{length:0}}
// function EC execution :{outer:global,arguments:{length:0}}

// 8
function b() {
  function a() {
    console.log(x); //10
  }
  const x = 10;
  console.log(x); //10
  a();
}
const x = 20;
b();

// Global creation {outer:null,this:window} TDZ{x}
// Global execution {outer:null,this:window,x:10}
// function b EC creation {outer:global,this:window, arguments{length:0}} TDZ{x}
// function b EC execution {outer:global,this:window, arguments{length:0},x:10}
// function a EC creation {outer:b,this:window, arguments{length:0}}
// function a EC execution {outer:b,this:window, arguments{length:0}}

// 9

function a() {
  console.log(x); //20
}
function b() {
  const x = 10;
  console.log(x); //10
  a();
}
const x = 20;
b();

// Global EC in creation LE:{outer: null, a: fn, b: fn}, TDZ{x}
// Global EC in execution LE:{outer: null, a: fn, b: fn, x: 20}
// b EC in creation LE:{outer: Global, arguments: {length:0}}, TDZ{x}
// b EC in execution LE:{outer: Global, arguments: {length:0}, x:10}
// a EC in creation LE:{outer: Global, arguments: {length:0}}
// a EC in execution LE:{outer: Global, arguments: {length:0}}

let x = 1;
function foo(y) {
  let inner = function (z) {
    y = 3;
    return x + y + z;
  };
  return inner;
}
let f = foo(2);
console.log(f(5));

// Global EC in creation: LE:{outer:null, foo:fn} TDZ{x,f}
// Global EC in execution: LE:{outer:null, foo:fn, x:1, f:fn}
// foo EC in creation: LE:{outer:global, arguments:{0:2, length:1}, y:2} TDZ{inner}
// foo EC in execution: LE:{outer:global, arguments:{0:2, length:1}, y:2, inner:fn}
// inner EC in creation: LE:{outer:foo, arguments:{0:5, length:1}, z:2}, Closure(foo): {y:2}
// inner EC in execution: LE:{outer:foo, arguments:{0:5, length:1}, z:2}, Closure(foo): {y:3}
