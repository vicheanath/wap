let Student = require("../model/student");

let controller = {
    getStudents: function (req, res, next) {
        let allStudents = Student.getStudents();
        res.status(200).json(allStudents);
    },
    getStudentById: function (req, res, next) {
        let id = req.params.id;
        let student = Student.getStudentById(id);
        if (student)
            res.status(200).json(student);
        else
            res.status(404).json({ message: "student not found" });
    },
    deleteStudentById: function (req, res, next) {
        let id = req.params.id;
        let student = Student.deleteStudentById(id);
        if (student) res.status(200).json(student)
        else
            res.status(404).json({ message: "not found" })
    },
    createStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        // let id = req.body.id;
        // let name = req.body.name;
        // let program = req.body.program;
        let student = new Student(id, name, program);
        let newCreatedStudent = student.addStudent();
        if (newCreatedStudent) res.status(200).json(newCreatedStudent);
        else res.status(404).json({ message: "already registered.." })
    },
    updateStudentById: function (req, res, next) {
        let idForUpdate = req.params.id;
        let { name, program, id } = req.body;
        let student = Student.updateStudentById(idForUpdate,id, name, program);
        if (student) res.status(200).json(student)
        else
            res.status(404).json({ message: "not found" })
    },
    search: function (req, res, next) {
        let program = req.query.program;
        let name = req.query.name;
        console.log(program, name)
        let student = Student.search(program, name);
        if (student) res.status(200).json(student)
        else
            res.status(404).json({ message: "not found" })
    }

}
module.exports = controller;