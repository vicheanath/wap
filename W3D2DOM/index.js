// create text node element
let text = document.createTextNode("it is P tag")
// create p node element
let p = document.createElement('p')
// set attribute id=myID to p element
p.setAttribute('id',"myID")
// appendChild to p as text
p.appendChild(text)
// create div element 
let div = document.createElement('div')
// append element p to div
div.appendChild(p)
document.body.appendChild(div)