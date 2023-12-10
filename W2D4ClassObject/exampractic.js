// const students = [
//   { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },
//   { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },
//   { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },
//   { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },
//   { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
// ];

// let result = students
//   .filter((e) => e.courses.includes("cs303"))
//   .reduce((acc, cur) => {
//     acc[cur.name] =
//       cur.grades.reduce((sum, e, cs) => sum + e, 0) / cur.grades.length;
//     return acc;
//   }, {});
// console.log(result);

// // function Vehicle(make, model, year, mileage) {
// //   this.make = make;
// //   this.model = model;
// //   this.year = year;
// //   this.mileage = mileage;
// // }

// // Vehicle.prototype.drive = function (distance) {
// //   this.mileage += distance;
// // };

// // Vehicle.prototype.toString = function () {
// //   return `${this.year} ${this.make} ${this.model} (${this.mileage} miles)`;
// // };

// // Object.setPrototypeOf(Car, Vehicle);
// // Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

// // function Car(make, model, year, mileage, numDoors, speed, topSpeed) {
// //   Vehicle.call(this, make, model, year, mileage);
// //   this.numDoors = numDoors;
// //   this.speed = speed;
// //   this.topSpeed = topSpeed;
// // }

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 10;
// // };

// // Car.prototype.toString = function () {
// //   return `${Vehicle.prototype.toString.call(this)}, ${this.numDoors}, ${
// //     this.topSpeed
// //   } mph`;
// // };

// // let vehicle = new Vehicle("Toyoto", "Prius", 2022, 15000);
// // vehicle.drive(100);
// // console.log(vehicle.toString()); // 2022 Toyoto Prius (15100 miles)
// // let car = new Car("Toyoto", "Accord", 2023, 9000, 4, 0, 115);
// // car.drive(300);
// // car.accelerate();
// // car.accelerate();
// // console.log(car.toString()); //2023 Toyoto Accord (9300 miles) 4 115

// // Convert This code to class

// class Vehicle {
//   constructor(make, model, year, mileage) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.mileage = mileage;
//   }
//   drive(distance) {
//     this.mileage += distance;
//   }
//   toString() {
//     return `${this.year} ${this.make} ${this.model} (${this.mileage} miles)`;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model, year, mileage, numDoors, speed, topSpeed) {
//     super(make, model, year, mileage);
//     this.numDoors = numDoors;
//     this.speed = speed;
//     this.topSpeed = topSpeed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }
//   brake() {
//     this.speed -= 10;
//   }
//   toString() {
//     return `${super.toString()} ${this.numDoors}, ${this.topSpeed} mph`;
//   }
// }

// let vehicle = new Vehicle("Toyoto", "Prius", 2022, 15000);
// vehicle.drive(100);
// console.log(vehicle.toString()); // 2022 Toyoto Prius (15100 miles)
// let car = new Car("Toyoto", "Accord", 2023, 9000, 4, 0, 115);
// car.drive(300);
// car.accelerate();
// car.accelerate();
// console.log(car.toString()); //2023 Toyoto Accord (9300 miles) 4 115



async function getNumTransactions(username) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
  // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>
  let result = await fetch(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`)
  let data = await result.json()
  let userId = data.data[0].id
  let result2 = await fetch(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`)
  let data2 = await result2.json()

  return data2.total

}


console.log(getNumTransactions('epaga'))