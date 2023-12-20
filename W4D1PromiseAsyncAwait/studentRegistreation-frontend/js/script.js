window.onload = function () {
    display();
    renderStudentSelect('ddlStudent');
    renderStudentSelect('ddlStudentForUpdate');
}

const API_URL = "http://localhost:3000/";

async function display() {
    let response = await fetch(API_URL + "students");
    let json;
    if (response.ok) {
        json = await response.json();
        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
        }
    }
    else alert("Error" + response.status);

}

function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);
}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(API_URL + "students", setting);
    if (response.ok) {
        addRowToTable(id, name, program);
    } else alert("Error " + response.status);

}

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
    document.getElementById('myform').reset()
});


// Delete a student
async function deleteStudent(id) {
    let setting = {
        method: "DELETE",
    }
    let response = await fetch(API_URL + "students/" + id, setting);
    if (response.ok) {
        document.getElementById(id).remove();
    } else alert("Error " + response.status);
}
// render student to select #ddlStudent
async function renderStudentSelect(selectedId) {
    let response = await fetch(API_URL + "students");
    let json;
    if (response.ok) {
        json = await response.json();
        for (let e of json) {
            let option = document.createElement('option');
            option.setAttribute("value", e.id);
            option.appendChild(document.createTextNode(e.name));
            document.getElementById(selectedId).appendChild(option);
        }
    }
    else alert("Error" + response.status);
}

document.getElementById('btnDelete').addEventListener("click", () => {
    let id = document.getElementById('ddlStudent').value;
    deleteStudent(id);
});


// Update a student
async function updateStudent(idForUpdate, id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(API_URL + "students/" + idForUpdate, setting);
    if (response.ok) {
        document.getElementById(idForUpdate).remove();
        addRowToTable(id, name, program);
    } else alert("Error " + response.status);
}

document.getElementById('btnUpdate').addEventListener("click", () => {
    let idForUpdate = document.getElementById('ddlStudentForUpdate').value;
    let id = document.getElementById('idForUpdate').value;
    let name = document.getElementById('nameForUpdate').value;
    let program = document.getElementById('programForUpdate').value;
    updateStudent(idForUpdate, id, name, program);
});