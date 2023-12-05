// let arr = [1, 200, 10, 100, 1000, 100]

// let sum = arr.reduce(function (acc, elem, i, arr1) {
//     return acc + elem;
// }, 0)
// console.log(sum);

// let strArr = ["hello", "World", "All"];
// let str = strArr.reduce(function (acc, elem, i, arr1) {
//     return acc + elem + " "
// }, "")

// console.log(str);

// let result = arr.find(function (elem, index, arr1) {
//     return elem > 103
// })

// console.log(result);

// let resultIndex = arr.findIndex(function (elem, index, arr1) {
//     return elem > 250
// })

// console.log(resultIndex);
// let myJSmatrix = [
//     [5, 2, 3],
//     [4, 5, 10],
//     [7, 8, 9]
// ];



// for (let i = 0; i < myJSmatrix.length; i++) {
//     for (let j = 0; j < myJSmatrix[i].length; j++) {
//         console.log(myJSmatrix[i][j]);
//     }
// }

//for..of
// for (let arr of myJSmatrix)
//     for (let e of arr)
//         console.log(e);

// myJSmatrix.sort();
// console.log(myJSmatrix);

// function sortByLastE(a1, a2) {
//     if (a1[a1.length - 1] > a2[a2.length - 1]) return 1;
//     if (a1[a1.length - 1] == a2[a2.length - 1]) return 0;
//     if (a1[a1.length - 1] < a2[a2.length - 1]) return -1;

// }
// function sortByFirstE(a1, a2) {
//     if (a1[0] > a2[0]) return 1;
//     if (a1[0] == a2[0]) return 0;
//     if (a1[0] < a2[0]) return -1;

// }
// myJSmatrix.sort(sortByFirstE);
// console.log(myJSmatrix);

// const [first, , third] = ["foo", "bar", "baz", "foo"];
// console.log(first);
// console.log(third);

// let obj = {};
// console.log(obj);

// const point = {
//     x: 15,
//     y: 25
// }
// console.log(point);

// //accessing
// let x = point.x
// //creating property
// point.z = 65;
// console.log(point);
// //replacing value (x exists in point object)
// point.x = 78;
// console.log(point.x);

// //deleting property
// delete point.x;
// console.log(point);

// let user = {
//     fullname: "Anna Johns",
//     dob: new Date(1993, 6, 15),
//     "billing address": [
//         { street: "1000 N 4th", city: "Fairfield", state: "IA", zip: 52557 },//0
//         { street: "123 7th", city: "Fairfield", state: "CA", zip: 1523 }//1
//     ],
//     "shipping address": [
//         { street: "1000 N 4th", city: "Fairfield", state: "MN", zip: 52557 },
//         { street: "123 7th", city: "Fairfield", state: "CO", zip: 52557 },
//         { street: "123 7th", city: "Fairfield", state: "IA", zip: 52557 }
//     ],
//     getDobYear: function () {
//         return this.dob.getFullYear()
//     },
//     getDobMonth() {
//         return this.dob.getMonth();
//     }

// }

// console.log(user.fullname);
// console.log(user['fullname']);
// console.log(user['billing address'][1].state);
// console.log(user['billing address'][1]['state']);
// console.log(user['shipping address'][0].street);
// console.log(user['shipping address'][0]['street']);

// console.log(user.getDobYear());
// console.log(user.getDobMonth());


// user.getFullName = function () {
//     return this.fullname;
// }
// console.log(user);

let user = {
    fullname: "Anna Johns",
    display: function () {
        console.log("Hello display");
    }
}

function getFullname() {
    console.log(this.fullname);
}
getFullname.myname = "Anka"
console.dir(getFullname);

user.getFullname = getFullname;
window.fullname = 'window'
user.getFullname();// this->user
getFullname();//this->window
// console.log(window);