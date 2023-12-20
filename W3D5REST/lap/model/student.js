let db = [
  { id: 116857, name: "Anna Johns", program: "Compro" },
  { id: 615757, name: "Smith Dove", program: "Compro" },
  { id: 618975, name: "Jom Jerry", program: "MBA" },
];

class Student {
  constructor(id, name, program) {
    this.id = id;
    this.name = name;
    this.program = program;
  }
  addStudent() {
    if (!db.find((s) => s.id == this.id)) {
      db.push(this);
      return this;
    }
  }
  static getStudents() {
    return db;
  }
  static getStudentById(id) {
    return db.find((s) => s.id == id);
  }
  static deleteStudentById(id) {
    let index = db.findIndex((s) => s.id == id);
    if (index !== -1) return db.splice(index, 1);
  }

  static updateStudentById(idForUpdate, id, name, program) {
    let index = db.findIndex((s) => s.id == idForUpdate);
    if (index !== -1) {
      db[index].name = name;
      db[index].program = program;
      db[index].id = id;
      return db[index];
    }
  }
  // search by program or name or both
  static search(program, name) {
    if (program && name) {
      return db.filter(
        (s) => s.program.includes(program) && s.name.includes(name)
      );
    } else if (program) {
      return db.filter((s) => s.program.includes(program));
    } else if (name) {
      return db.filter((s) => s.name.includes(name));
    }
  }
}

module.exports = Student;
