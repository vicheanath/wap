let div = document.createElement("div");
let p = document.createElement("p");
p.setAttribute("id", "myPID");
let text = document.createTextNode("it is P tag.")

div.appendChild(p);
p.appendChild(text);

document.body.appendChild(div)
