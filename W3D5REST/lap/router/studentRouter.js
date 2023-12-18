let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");

let studentValidator = (req, res, next) => {
  let { id, name, program } = req.body;
  if (id && name && program) {
    next();
  } else {
    res.status(400).json({
      message: "id, name and program are required fields",
    });
  }
};

let studentUpdateValidator = (req, res, next) => {
  let { name, program } = req.body;
  if (name && program) {
    next();
  } else {
    res.status(400).json({
      message: "name and program are required fields",
    });
  }
};
router.get("/search", studentController.search);
router.get("/:id", studentController.getStudentById);
router.post("/", studentValidator, studentController.createStudent);
router.delete("/:id", studentController.deleteStudentById);
router.get("/", studentController.getStudents);
router.put("/:id", studentUpdateValidator, studentController.updateStudentById);


module.exports = router;
