// wap to check a square of a number is even or odd\
//Imperative way of writing code
var n =9
let squareNum = n*n

let isEven

if(squareNum%2==0){
    isEven = true
}
else{
    isEven = false
}

console.log(isEven)



// Declarative way of writing code

const checkSquare = (x) => (x*x % 2 == 0 ? true:false)

console.log(checkSquare(4))