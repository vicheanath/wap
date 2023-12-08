// Question 1:
// Create a student object using object literal which has:
// Properties: firstName: string, lastName: string, grades: array
// Methods:
// • insertGrade(newGrade) push newGrade to grades
// • computeAverageGrade(): returns average of grades

const student = {
  firstName: "John",
  lastName: "Doe",
  grades: [],
  insertGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
  },
};

// Question 2: Redo the Question1 using Function expression.
const student2 = {
  firstName: "John",
  lastName: "Doe",
  grades: [],
};

student2.insertGrade = function (newGrade) {
  this.grades.push(newGrade);
};

student2.computeAverageGrade = function () {
  return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
};

//Question 3: Add a new method named mySort() without parameters in the built-in constructor function
// Array. It will sort all elements in the array in the ascending order.

Array.prototype.mySort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this[i] < this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
};

// Question 4: Convert the given diagram to JavaScript’s Prototypal Inheritance diagram and implement the
// code using the constructor function.
// Animal: run method will increase the animal speed.
// Rabbit: hide method will just print out rabbit name with “hides” string.

function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}

Animal.prototype.run = function () {
  this.speed++;
};

function Rabbit(name, speed, earLength) {
  Animal.call(this, name, speed);
  this.earLength = earLength;
}

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.hide = function () {
  console.log(`${this.name} hides`);
};

const rabbit = new Rabbit("White Rabbit", 5, 10);
rabbit.hide();
rabbit.run();
console.log(rabbit.speed);
console.log(rabbit.earLength);
