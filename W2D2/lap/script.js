// Question 1: Fix using wrapper, bind, call, apply.

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: "John",
  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

// askPassword(user.loginOk, user.loginFail); this is not working

// Using bind
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));  //Ok

// Using call
// askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user)); // Ok

// Using apply
// askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user)); // Ok

// using wrapper
askPassword(
  () => user.loginOk(),
  () => user.loginFail()
);

// Question 2: Fix the code below using bind

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};

group.showList();
