// Questions in the exam:
// 1. CSS specificity
// 2. Regular expression
// 3. Array – splice, filter, map, reduce, find, findIndex, and/or forEach
// 4. Regular function, function expression, arrow function, callback
// 5. Execution Context: please list LE and what will be the output.
//  a. Lexical environments
//  b. Variable: let, const, var, and its scope
//  c. Function declaration, function expression, object literal
//  d. Closure – free variable
//  e. outer
//  f. this
// 6. setTimeout, setInterval, clearTimeout, clearInterval
// 7. This keyword
//  a. You’ll be asked to read a piece of code, then tell the outputs
//  b. I’ll say the output is not I expected, could you fix with it using different ways?
// 8. Prototypal inheritance
//  a. Give you a piece of code, draw inheritance diagram
//  b. Implement Object literal, function constructor, and/or class syntax

// const grades = [1, 2, 3, 4, 5, 6, 4, 4, 3, 3, 3, 3, 3, 2, 2, 3, 43, 453];

// // splice
// const splice = grades.slice(1, 3);
// console.log("splice", splice);
// // filter
// const filter = grades.filter((grade) => grade % 2 == 0);
// console.log("filter", filter);
// // map
// const map = grades.map((grade) => grade * 2);
// console.log("Map", map);

// // reduce
// const reduce = grades.reduce((pre, cur, curIdx, arr) => pre + cur, 0);
// console.log("reduce", reduce);
// // find
// const find = grades.find((grade) => grade == 3);
// console.log("find", find);
// // findIndex
// const findIndex = grades.findIndex((grade) => grade == 3);
// console.log("findIndex", findIndex);

// // forEach
// grades.forEach(
//   (value, index, array) => console.log(`Value: ${value} Index: ${index} Array: ${array}`)
// );

// console.log("######## Array Lampda function ###########")
