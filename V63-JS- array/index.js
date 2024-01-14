let arr=[1, 2, 3, 4, 5]
console.log(arr)
console.log(arr.length) //length
console.log(arr[0]) //index(0)
console.log(typeof arr)

//array is mutable,means able to change value
arr[0]= 5522;
console.log(arr)

//Convert in string
console.log(arr.toString())

//conert "," in string into other string 
console.log(arr.join(" and "))

//example
let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
console.log(a1.concat(a2,a3))

// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333) 
// (4) [1, 222, 333, 5]