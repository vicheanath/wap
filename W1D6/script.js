// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((acc, elem, i, arr) => {
//   return acc + elem;
// });

// console.log(sum);

// let strArr = ["Hello", "World", "All"];

// let str = strArr.reduce((acc, elem, i, arr) => {
//   return acc + elem + "_";
// }, "");

// console.log(str);

let myJSmatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(myJSmatrix[1][1]);

// for (let i = 0; i < myJSmatrix.length; i++) {
//   for (let j = 0; j < myJSmatrix[i].length; j++) {
//     console.log(myJSmatrix[i][j]);
//   }
// }

//for ..of
// for (let arr of myJSmatrix)
//     for (let e of arr)
//         console.log(e)

// sort matrix by using first element of each array
// let a = myJSmatrix.sort((a, b) => {
//   if (a[0] > b[0]) return 1;
//   else if (a[0] < b[0]) return -1;
//   else return 0;
// });

// console.log(a);

// const [first, , third] = ["foo", "bar", "baz", "foo"];
// console.log(first);
// console.log(third);

// let user = {
//   fullName: "Vichea Nath",
//   dateOfBirth: new Date(2000, 4, 2),
//   "bulling address": [
//     // Generate 3 USA address different states
//     {
//       street: "1234 Main St",
//       city: "Los Angeles",
//       state: "CA",
//       zip: "90001",
//     },
//     {
//       street: "1234 Main St",
//       city: "Los Angeles",
//       state: "CA",
//       zip: "90001",
//     },
//     {
//       street: "1234 Main St",
//       city: "Los Angeles",
//       state: "CA",
//       zip: "90001",
//     },
//   ],
//   "shipping address": [
//     // Generate 3 USA address different states
//     {
//       street: "1234 Main St",
//       city: "Los Angeles",
//       state: "CA",
//       zip: "90001",
//     },
//     {
//       street: "1234 Main St",
//       city: "Los Angeles",
//       state: "CA",
//       zip: "90001",
//     },
//     {
//       street: "1234 Main St",
//       city: "Los Angeles",
//       state: "CA",
//       zip: "90001",
//     },

//     ],
// }

// let a = prompt("Enter a number: ");
// let b = prompt("Enter a number: ");

// let sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(a, b));

// create login prompt

// let user = {
//   username: "admin",
//   password: "123",
// };
// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");
// let login = (username, password) => {
//   if (username === user.username && password === user.password) {
//     return true;
//   }
//   return false;
// };
