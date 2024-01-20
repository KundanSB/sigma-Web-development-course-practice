// let rand = Math.random();


let first, second, thrid;
// Lets generate the first word
let rand = Math.random();
if (rand < 0.33) {
    first = "Crazy"
}
else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing"
}
else {
    first = "Fire"
}

// Lets generate the second word
rand = Math.random()
if(rand<0.33){
    second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}

// Lets generate the third word
rand = Math.random()
if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)