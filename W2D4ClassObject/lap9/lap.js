class Question {
  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }
  checkAnswer(question) {
    return this.answer == question.answer && this.qid == question.qid;
  }
}

class Quiz {
  constructor(question, student) {
    this.question = new Map();
    this.student = student;
    for (let q of question) {
      this.question.set(q.qid, q.answer);
    }
  }
  scoreStudentBySid(sid) {
    let score = 0;
    let stu = this.student.find((s) => s.studentId == sid);

    stu.answer.forEach((ans) => {
      let q = this.question.get(ans.qid);
      if (q == ans.answer && q != undefined) {
        score++;
      }
    });
    return score;
  }

  getAverageScore() {
    let totalScore = 0;
    this.student.forEach((student) => {
      totalScore += this.scoreStudentBySid(student.studentId);
    });
    return totalScore / this.student.length;
  }
}

class Student {
  constructor(studentId) {
    this.studentId = studentId;
    this.answer = [];
  }

  addAnswer(question) {
    this.answer.push(question);
  }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));
const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));
const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];
const quiz = new Quiz(questions, students);
console.log(quiz);

let scoreforStudent10 = quiz.scoreStudentBySid(10);

console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
