'use strict'
 
console.log(this)


function mahek(){
    console.log(this)
}
mahek()

let a = () => {
    console.log(this)
}

console.log(a)