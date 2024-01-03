// access this keyword in global enivornment 

 console.log(this)


//access this keyword in function

let a =  () => {
    console.log(this)
}

console.log(a)


//access this with normal function

function m(){
    console.log(this)
}

m()