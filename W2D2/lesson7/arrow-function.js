// "use strict"

// const func = () => {
//     console.log(arguments);
//     console.log(this); // this keyword is from surrounding environment, it's window object no matter the strict mode
// }
// // func();

// const func1 = function () {
//     console.log(arguments);
//     console.log(this); // this keyword is from surrounding environment, it's window object no matter the strict mode
// }
// func1();

//"use strict";
// function foo() {
//     console.log(this);
//     console.log(arguments);
//     const func = () => {
//         console.log(this); // in strict mode, it is undefined. in non strict mode, it is window
//     }
//     func();
// }
// foo();

// function baz() {
//     const bar = () => {
//         console.log(this);
//         const foo = () => console.log(this);
//         foo();

//     }
//     bar();
//     bar.apply({ x: 1 });
//     bar.call({ n: 888 });
// }

// baz.apply({ a: 'b' });

// function baz() {
//     var bar = function () {
//         console.log(this);
//         var foo = function () {
//             console.log(this);
//         };
//         foo();
//     };
//     bar();
//     bar.apply({ x: 1 });
//     bar.call({ n: 888 });
// }

// baz.apply({ a: 'b' });

// function foo() {
//     console.log(this);
// }

// foo.call(true);


// let obj = {
//     x: 1,
//     y: 2,
//     sum: function () {

//         const bar = () => {
//             console.log(this.x + this.y);
//         }
//         bar();
//     }
// };
// obj.sum();


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        let self = this;
        this.students.forEach(
            function (student) {
                // error – ‘this’ is undefined (or window)
                console.log(self.title + ": " + student);
            }
        );
    }
};
group.showList();


// const group = {
//     title: 'Student List',
//     students: ['John', 'Lily', 'Edward', 'Peter'],
//     showList: function () {
//         this.students.forEach(function (stu) {
//             console.log(this);
//             console.log(`${this.title}: ${stu}`);
//         }.bind(this));
//     }
// }
//group.showList();
// group.showList.bind(group)();

// group.showList.call({
//     title: 'this is another title',
//     students: [1, 2, 3]
// });


// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [john, pete];

// let u = people.map((o, index) => {
//     let e = {
//         fullname: "" + o.name + o.surname,
//         age: o.age
//     }
//     return e;
// });
// console.log(u);

