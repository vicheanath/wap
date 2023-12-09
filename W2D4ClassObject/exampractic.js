const student = [
  { name: "Quincy", grade: [99, 88], courses: ["cs301", "cs303"] },
  { name: "Jason", grade: [29, 38], courses: ["cs201", "cs203"] },
  { name: "Alexs", grade: [99, 88], courses: ["cs301", "cs303"] },
  { name: "John", grade: [1, 2], courses: ["cs301", "cs303"] },
  { name: "Jame", grade: [99, 88], courses: ["cs301", "cs303"] },
];

function getAverageGradeAsOneObjectasCs303AsOneObject(student) {
  let stud = student
    .filter((s) => s.courses.includes("cs301"))
    .reduce((acc, elem) => {
      acc[elem.name] = elem.grade.reduce(
        (acc, elem, index, arr) => acc + elem / arr.length,
        0
      );
      return acc;
    }, {});
  return stud;
}

console.log(getAverageGradeAsOneObjectasCs303AsOneObject(student));
