document.getElementById('div1').addEventListener("click", function (event) {
    console.log('bubbling DIV');

}, false)//bubbling
document.getElementById('p1').addEventListener("click", function (event) {
    console.log('bubbling P');
})//bubbling , by default it is false
document.getElementById('em1').addEventListener("click", function (event) {
    console.log('bubbling Em');
})//bubbling , by default it is false

document.getElementById('div1').addEventListener("click", function (event) {
    console.log('capturing DIV .......1');
    event.stopImmediatePropagation();
    // event.stopPropagation();
}, true)//capturing

document.getElementById('div1').addEventListener("click", function (event) {
    console.log('capturing DIV.....2');

}, true)//capturing
document.getElementById('p1').addEventListener("click", function (event) {
    console.log('capturing P');

}, true)//capturing
document.getElementById('em1').addEventListener("click", function (event) {
    console.log('Capturing Em');

}, true)//capturing

