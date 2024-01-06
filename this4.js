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


    // let myObj  = {
    //     name:'rishika',
    //     age:9,
    //     myFn : function(){
    //         console.log(this)
    //     }
    // }

    // myObj.myFn()

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
