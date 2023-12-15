let db = [
  {
    id: 1,
    name: "Adam Doe",
    program: "Computer Science",
  },
  {
    id: 2,
    name: "Eve Doe",
    program: "Graphic Design",
  },
  {
    id: 3,
    name: "John Doe",
    program: "Data Science",
  },
  {
    id: 4,
    name: "Jane Doe",
    program: "Graphic Design",
  },
];

class Student {
  constructor(id, name, program) {
    this.id = id;
    this.name = name;
    this.program = program;
    this.#incrementId();
  }
  #incrementId() {
    this.id = db.length + 1;
  }

  static add(student) {
    if (db.find((s) => s.id === this.id)) {
      throw new Error("Student already exists");
    }
    db.push(student);
  }

  static list() {
    return db;
  }
  static get(id) {
    return db.find((s) => s.id === id);
  }
  static delete(id) {
    let index = db.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error("Student not found");
    }
    db.splice(index, 1);
  }
  static update(id, name, program) {
    let student = db.find((s) => s.id === id);
    if (!student) {
      throw new Error("Student not found");
    }
    student.name = name;
    student.program = program;
  }
}

module.exports = Student;