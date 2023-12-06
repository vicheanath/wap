// const arr = [1,2,3,4,5,5]

// console.log(arr)
// console.dir(arr.__proto__)
// console.dir(Object.getPrototypeOf(arr) === Array.prototype)

function display() {}

console.dir(display);
console.log(display.prototype);
console.dir(display.__proto__);

// let point = { x: 4, y: 6 };
// console.log(point)
// console.log(point.toString())
// console.dir(print.__proto__)
// console.dir(Object.getPrototypeOf(print))

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.getName = function () {
  return this.name;
};
Employee.prototype.getSalary = function () {
  return this.salary;
};
Employee.compareByName = function (e1, e2) {
  if (e1.name > e2.name) return 1;
  if (e1.name === e2.name) return 0;
  if (e1.name < e2.name) return -1;
};

function Manager(name, salary, bonus) {
  Employee.call(this, name, salary); // pass parameter to super()
  this.bonus = bonus;
}

Manager.prototype.getBonus = function () {
  return this.bonus;
};
Manager.prototype.calcSalary = function () {
  return this.salary + this.bonus;
};

Manager.compareBySalary = function (m1, m2) {
  if (m1.salary > m2.salary) return 1;
  if (m1.salary === m2.salary) return 0;
  if (m1.salary < m2.salary) return -1;
};

Object.setPrototypeOf(Employee, Manager);
Object.setPrototypeOf(Employee.prototype, Manager.prototype);

let emp1 = new Employee("Vichea", 12222);
console.log(emp1);

let manager1 = new Manager("Jhon", 180000, 1000);
console.log(manager1);

console.log(manager1 instanceof Employee)
console.log(manager1 instanceof Manager)
console.log(manager1 instanceof Object)