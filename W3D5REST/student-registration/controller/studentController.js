const e = require("express");
let Student = require("../model/student");

let controller = {
  getAllStudents: (req, res) => res.status(200).json(Student.list()),
  getStudentById: (req, res) => {
    let student = Student.get(req.params.id);
    if (!student) {
      res.status(404).send({ message: "Student not found" });
    } else {
      res.status(200).json(student);
    }
  },
  createStudent: (req, res) => {
    try {
      Student.add(new Student(null, req.body.name, req.body.program));
      res.status(201).send({ message: "Student created" });
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  },
  updateStudent: (req, res) => {
    try {
      Student.update(req.params.id, req.body.name, req.body.program);
      res.status(200).send({ message: "Student updated" });
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  },
  deleteStudent: (req, res) => {
    try {
      Student.delete(req.params.id);
      res.status(200).send({ message: "Student deleted" });
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  },
};

module.exports = controller;
