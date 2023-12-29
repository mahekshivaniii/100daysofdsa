//some function

const num = [ 12,4,5,6,9,45,6,73,245];

let checkNum = num.some((n) => {
  return n<0
})

console.log(checkNum)