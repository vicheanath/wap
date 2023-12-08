class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run() {
    this.speed++;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

class Employee {
  #fullName;
  static #counter = 0;
  constructor(fullName, salary) {
    this.#fullName = fullName;
    this.salary = salary;
    Employee.#increment();
  }

  static #increment() {
    this.#counter++;
  }

  static getCounter() {
    return this.#counter;
  }
  get name() {
    return this.#fullName;
  }
  set name(name) {
    this.fullName = name;
  }
  #display() {
    console.log("Name: " + this.name);
  }
  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(fullName, salary, bonus) {
    super(fullName, salary);
    this.bonus = bonus;
  }
  display() {
    super.display();
    console.log("Manager")
  }
  calSalary() {
    return super.getSalary() + this.bonus;
  }
}

let manager = [
  new Manager("John", 1000, 500),
  new Manager("Pete", 1500, 300),
  new Manager("Mary", 2000, 200),
];

console.log(manager);
console.log(Employee.getCounter());

for (let m of manager) {
  console.log("Name: " + m.name + " Salary: " + m.calSalary());
}
