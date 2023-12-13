

function cb1(){
    console.log("cb1")
}
function cb2(){
    console.log("cb2")
}

function cb3(){
    console.log("cb3")
}

function cb4(){
    console.log("cb4")
}

function cb5(){
    console.log("cb5")
}

process.nextTick(cb1)
setTimeout(cb2, 0)
Promise.resolve().then(cb4)
process.nextTick(cb3)
setImmediate(cb5)
