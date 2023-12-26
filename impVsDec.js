// wap to check a square of a number is even or odd\

let n = prompt("enter a number")
let squareNum = n*n

let isEven

if(squareNum%2==0){
    isEven = true
}
else{
    isEven = false
}

console.log(isEven)