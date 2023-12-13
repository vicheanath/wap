
//getting the elements
// let element = document.getElementById("pID")
// console.dir(element);
// console.log(element.nodeName);
// console.log(element.tagName);
// console.log(element.parentNode);
// console.log(element.parentElement);

// let divs = document.getElementsByTagName("div");
// console.log(divs);

// let elements = document.getElementsByClassName("main");
// console.log(elements);

// let element = document.querySelector("div.main");
// console.log(element);

// let element = document.querySelectorAll("div");
// console.log(element);

// let element = document.getElementById("myDiv")
// console.log(element.outerHTML);
// console.log(element.innerHTML);
// console.log(element.innerText);
// console.log(element.textContent);
// element.innerHTML = "<b>Hello</b>";
// console.log(element);


//getting/setting the attribute value
// console.log(element.id);
// console.log(element.getAttribute("myAttribute"));
// element.setAttribute("myAttribute", true)
// console.log(element.getAttribute("myAttribute"));
// let counter = 0;
// document.getElementById("addBtn").onclick = function () {
//     let p = document.createElement("p");//creating p element node
//     let text = document.createTextNode("new P") //creating text node
//     p.setAttribute("id", "p" + counter++)
//     p.appendChild(text) // textnode is inserted to p element
//     document.body.appendChild(p) // p element is added to body element/tag
// }
// document.getElementById("deleteBtn").onclick = function () {
//     let id = "p" + (counter - 1);
//     counter--;
//     console.log(document.getElementById(id));
//     document.getElementById(id).remove();
// }

// console.dir(document.getElementsByTagName('html')[0].childNodes[2].nodeType);

console.dir(document.body);
// console.log(document.body.firstChild);//first element, text, or  comment node
// console.log(document.body.firstElementChild); // first element node
// console.log(document.body.lastElementChild);
console.dir(document.body.childNodes);
console.dir(document.body.children);
