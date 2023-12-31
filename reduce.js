// sum of Element

const arr = [1,2,4]
 var sum = 0
for(let i = 0;i<arr.length;i++){
    sum +=arr[i]
}

console.log(sum)


// Reduce function

const num = arr.reduce((acc , value) => {
    return acc + value ;
},0)
 
console.log(num)


//doing multiplication using reduce 

const mul = arr.reduce((a,value) => {
    return a*value
} , 1)

console.log(mul)