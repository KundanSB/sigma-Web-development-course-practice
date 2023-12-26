let random = Math.random()
console.log(random);


let a=prompt("Enter value of a");
let b=prompt("Enter the operator")
let c=prompt("Enter the value of c")

let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random>0.1) {
    // Perform correct calculation
    // console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
} 

else {
    // Perform wrong calculation
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`) 
}