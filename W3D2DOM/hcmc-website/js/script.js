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

  outPatient() {
    return this.isOutPatient ? "Yes" : "No";
  }
}

class PatientList {
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
    let isOutPatient = document.getElementsByName("radioIsOutPatient").value;
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
      row.insertCell().innerHTML = patient.outPatient();
    }
  }

  displayElderlyPatients() {
    let elderlyPatients = this.patients.filter(function (patient) {
      return patient.dob.getFullYear() < 1950;
    });
    this.displayPatients(elderlyPatients);
  }

  displayOutPatients() {
    let outPatients = this.patients.filter(function (patient) {
      return patient.isOutPatient;
    });
    this.displayPatients(outPatients);
  }
}

let patientList = new PatientList();
let patient1 = new Patient(
  "EP-001-000001",
  "Ana",
  "J",
  "Smith",
  new Date("5 January 1945"),
  "Ear, Nose and Throat",
  false
);
let patient2 = new Patient(
  "P-001-000002",
  "Bob",
  "K",
  "Jones",
  new Date("4 May 1985"),
  "Cardiology",
  true
);
let patient3 = new Patient(
  "EP-001-000003",
  "Carlos",
  "A",
  "Hernandez",
  new Date("13 March 1957"),
  "Cardiology",
  true
);
patientList.addPatient(patient1);
patientList.addPatient(patient2);
patientList.addPatient(patient3);
patientList.displayPatients();

let btnRegisterPatient = document.getElementById("btnRegisterPatient");
btnRegisterPatient.addEventListener("submit", function (event) {
  event.preventDefault();
  patientList.addPatientFromForm();
});

document
  .getElementById("chkElderlyPatients")
  .addEventListener("change", function () {
    if (this.checked) {
      patientList.displayElderlyPatients();
    } else {
      patientList.displayOutPatients();
    }
  });

document
  .getElementById("chkShowOutPatients")
  .addEventListener("change", function () {
    if (this.checked) {
      patientList.displayOutPatients();
    } else {
      patientList.displayPatients();
    }
  });
