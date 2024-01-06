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