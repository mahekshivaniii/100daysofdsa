// function  firstName(firstName,cb){
    // console.log(firstName)
    // cb('Stark')
// }

// firstName('Tony',last_Name)


// function last_Name(lastName)//call back function
// {
    // console.log(lastName)
// }

// lastName('Stark')


const evenFn = (n) => {
    return n%2==0
}


let checkEven = (callback,num) => {
    const a = callback(num)
    console.log(`the num is ${a}`)

}

checkEven(evenFn,4)