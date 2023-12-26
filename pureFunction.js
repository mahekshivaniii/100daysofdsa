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