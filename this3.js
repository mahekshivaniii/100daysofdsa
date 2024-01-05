// console.log(this)

//  function mahek() {
//         console.log(this)
//  }
// mahek()

// let a =  () => {
//     console.log(this)
// }

// console.log(a)
let myobj = {
    name:'mahek',
    age:45,
    myFn : function(){
        console.log(this)
    }
}

myobj.myFn()


