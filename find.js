const transcation = [3000,4000,-898,6989,-1000]

let withdrawNeg = transcation.find((n) => {
            return n<0
})

console.log(withdrawNeg)