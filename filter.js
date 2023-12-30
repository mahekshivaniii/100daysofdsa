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