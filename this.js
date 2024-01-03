// access this keyword in global enivornment 

//  console.log(this)


// //access this keyword in function

// let a =  () => {
//     console.log(this)
// }

// console.log(a)


// //access this with normal function

// function m(){
//     console.log(this)
// }

// m()

// access this keyword in object 

// let myObj = {
//     name :'mahek',
//     age:45,
   
//     myFn : function (){
//         console.log(this)
//     }
// }
// myObj.myFn()

let myObj2 = {
    name :'rishika',
    age:9,
     
    myfn2: function(){
        function myfn3 (){
            console.log(this)
        }
        myfn3()
    }
}

myObj2.myfn2()