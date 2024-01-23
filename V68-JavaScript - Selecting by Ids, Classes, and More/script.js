console.log("This is js")

// let box = document.getElementsByClassName("box")
// console.log(box)
// box[2].style.backgroundColor = "red"

document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";//first box only get green
// console.log(document.querySelectorAll(".box"))//show all class box element


document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 