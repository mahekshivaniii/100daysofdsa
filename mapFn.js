// // square an array through looping

// let arr = [1,2,4,5]

// for(let i = 0 ; i<arr.length;i++){
//     console.log(arr[i]*arr[i])
// }

//check even odd by map function
// const n = [1,2,4,3,6,7]

// const isEven = n.map(function(num){
//     return num%2==0
// })

// console.log(isEven)


// indian to dollar

const transcations = [1000,3000,4000,2000,-898,3800,4500]

const intoDollar = transcations.map((rupees) => {
    return (rupees/80).toFixed(0)
})

console.log(intoDollar)


