// put the even elements in an  new array


const evenArr = [1,23,4,56,7,8,32]

const putArr = []

for(let i = 0 ; i < evenArr.length;i++){
    if(evenArr[i]%2==0){
        putArr.push(evenArr[i])
    }
}

console.log(putArr)

let evenNum = evenArr.filter((n) => {
    return n%2 == 0

})

console.log(evenNum)


const transcation = [3000,53,55,6425,-800,-6475]

const checkTranscation = transcation.filter((n) => {
    return n<0
})

console.log(checkTranscation)