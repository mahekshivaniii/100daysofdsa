const num = [ 1,2,3,4,5,6,7,8,9];
const arr =[5,7,8]
for(let i = 0 ; i < num.length;i++){
    /*Naive Apporach */
    // var a = num[i]*num[i]
    // console.log(a)
    arr.push(num[i]*num[i])
}
console.log(arr)