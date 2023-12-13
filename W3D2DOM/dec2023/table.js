
document.getElementById("addBtn").addEventListener('click', function (event) {
    let id = document.createElement("td");//cell
    let idStr = document.getElementById("myID").value;
    let idText = document.createTextNode(idStr)
    id.appendChild(idText)

    let name = document.createElement("td");//cell, td - is html tag
    let nameStr = document.getElementById("myName").value;
    let nameText = document.createTextNode(nameStr);
    name.appendChild(nameText)

    let row = document.createElement("tr");
    row.appendChild(id)
    row.appendChild(name)


    let tableBody = document.getElementById("myTableBody");
    tableBody.appendChild(row)
})