var num1 = 6
// this is an impure function because its depend on num1 variable and num1 is an external factor for the add function
function add(num2)
{
    console.log(num1+num2)
    num1++

}
add(2)
add(2)
add(2)

// pure function
// this is partial pure function it uses external factor(console and log)
function sum(x,a){
    console.log(x+a)
}


sum(2,3) //if the change the parameters then its a impure function you can call sum function as many you want without changing the paramemters
sum(2,3)
sum(2,3)



// fully pure function
function add1(m,n){
    return m+n
}

console.log(add1(4,5))