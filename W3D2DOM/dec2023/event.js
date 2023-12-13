// document.getElementById("myBtn1").onclick = function (event) {
//     console.log('My Button 1 is clicked event 1');
// }

// function callback(event) {
//     console.log('My Button 1 is clicked event 2');
// }
// document.getElementById("myBtn1").onclick = callback;



//register multiple listeners for the click event using addEventListener
// document.getElementById("myBtn1").addEventListener("click", function () {
//     console.log('My Button 1 is clicked event 1');
// })


// document.getElementById("myBtn1").addEventListener("click", function () {
//     console.log('My Button 1 is clicked event 2');
// })

// document.getElementById("myBtn1").addEventListener("click", function () {
//     console.log('My Button 1 is clicked event 3');
// })



window.onload = function () {
    let myBtn = document.getElementById("myBtn1");
    myBtn.addEventListener("mouseover", function () {
        myBtn.style.background = "blue";
        myBtn.style.color = "white";

    })

    myBtn.addEventListener("mouseout", function () {
        myBtn.style.background = "green";
        myBtn.style.color = "black";


    })
}

document.addEventListener("DOMContentLoaded", function () {
    let myBtn = document.getElementById("myBtn1");
    myBtn.addEventListener("mouseover", function () {
        myBtn.style.background = "blue";
        myBtn.style.color = "white";

    })

    myBtn.addEventListener("mouseout", function () {
        myBtn.style.background = "green";
        myBtn.style.color = "black";


    })
})

