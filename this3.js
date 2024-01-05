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

let myObj2 = {
    name:'rishika',
    age:9,
    myfn1:function(){
        function myfn3(){
            console.log(this)
        }
        myfn3()
    }
}

myObj2.myfn1()


