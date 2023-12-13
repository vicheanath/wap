"use strict";

class Patient {
  constructor(
    patientIdNumber,
    firstName,
    middleInitial,
    lastName,
    dob,
    department,
    isOutPatient
  ) {
    this.patientIdNumber = patientIdNumber;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.department = department;
    this.isOutPatient = isOutPatient;
  }
  getDob() {
    return `${this.dob.getFullYear()}-${this.dob.getMonth()}-${this.dob.getDate()}`;
  }
}

class PatientList {
  static AGE_OLDER = 65;
  constructor() {
    this.patients = [];
  }

  addPatient(patient) {
    this.patients.push(patient);
  }
  addPatientFromForm() {
    let id = document.getElementById("patientIdNumber").value;
    let firstName = document.getElementById("firstName").value;
    let middleInitial = document.getElementById("middleInitials").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dateOfBirth").value;
    let department = document.getElementById("ddlDepartment").value;
    let isOutPatientNo = document.getElementById("radioIsOutPatientNo");
    let isOutPatient = isOutPatientNo.checked ? "No" : "Yes";
    let patient = new Patient(
      id,
      firstName,
      middleInitial,
      lastName,
      dob,
      department,
      isOutPatient
    );
    patientList.addPatient(patient);
    patientList.displayPatients();
    patientList.showMessageBox("Patient added successfully");
  }

  showMessageBox(message = "Message", type = "success", timeout = 3000) {
    // prepend success message to the form
    let successMsg = document.createElement("div");
    successMsg.className = `alert alert-${type}`;
    successMsg.innerHTML = message;
    let form = document.getElementById("patientForm");
    form.prepend(successMsg);
    // remove the success message after 3 seconds
    setTimeout(function () {
      successMsg.remove();
    }, timeout);
  }

  displayPatients(patients = this.patients) {
    let tbody = document.getElementById("tbodyPatientsList");
    tbody.innerHTML = "";
    for (let patient of patients) {
      let row = tbody.insertRow();
      row.insertCell().innerHTML = patient.patientIdNumber;
      row.insertCell().innerHTML = patient.firstName;
      row.insertCell().innerHTML = patient.middleInitial;
      row.insertCell().innerHTML = patient.lastName;
      row.insertCell().innerHTML = patient.getDob();
      row.insertCell().innerHTML = patient.department;
      row.insertCell().innerHTML = patient.isOutPatient;
    }
  }

  displayElderlyPatients() {
    let elderlyPatients = this.patients.filter(function (patient) {
      return (
        new Date().getFullYear() - patient.dob.getFullYear() >
        PatientList.AGE_OLDER
      );
    });
    this.displayPatients(elderlyPatients);
  }

  displayOutPatients() {
    let outPatients = this.patients.filter(function (patient) {
      return patient.isOutPatient === "Yes";
    });
    this.displayPatients(outPatients);
  }
}

/*
Patient 1:
    Patient ID Number: EP-001-000001,
    First Name: Ana,
    Middle Initial(s): J,
    Last Name: Smith,
    Date of birth: 5 January 1945
    Department: Ear, Nose and Throat,
    Is out-patient?: No
Patient 2:
    Patient ID Number: P-001-000002,
    First Name: Bob,
    Middle Initial(s): K,
    Last Name: Jones,
    Date of birth: 4 May 1985
    Department: Cardiology,
    Is out-patient: Yes
Patient 3:
    Patient ID Number: EP-001-000003,
    First Name: Carlos,
    Middle Initial(s): A,
    Last Name: Hernandez,
    Date of birth: 13 March 1957
    Department: Cardiology,
    Is out-patient: Yes
*/

let patientList = new PatientList();
let patient1 = new Patient(
  "EP-001-000001",
  "Ana",
  "J",
  "Smith",
  new Date("5 January 1945"),
  "Ear, Nose and Throat",
  "No"
);
let patient2 = new Patient(
  "P-001-000002",
  "Bob",
  "K",
  "Jones",
  new Date("4 May 1985"),
  "Cardiology",
  "Yes"
);
let patient3 = new Patient(
  "EP-001-000003",
  "Carlos",
  "A",
  "Hernandez",
  new Date("13 March 1957"),
  "Cardiology",
  "Yes"
);
patientList.addPatient(patient1);
patientList.addPatient(patient2);
patientList.addPatient(patient3);
patientList.displayPatients();

document.getElementById("patientForm").onsubmit = function (event) {
  event.preventDefault();
  patientList.addPatientFromForm();
  this.reset();
};

document
  .getElementById("chkElderlyPatients")
  .addEventListener("change", function () {
    if (this.checked) patientList.displayElderlyPatients();
    else patientList.displayPatients();
  });

document
  .getElementById("chkShowOutPatients")
  .addEventListener("change", function () {
    if (this.checked) patientList.displayOutPatients();
    else patientList.displayPatients();
  });
