'use strict'

console.log(this)

    function a() {
        console.log(this)
    }

    a()

    let m =  () => {
        console.log(this)
    }
    console.log(m)


    let myObj  = {
        name:'rishika',
        age:9,
        myFn : function(){
            console.log(this)
        }
    }

    myObj.myFn()