let arr = [
    {name:'a',age:45,gender:'m'},
    {name:'b',age:35,gender:'m'},
    {name:'c',age:65,gender:'f'},
    {name:'d',age:55,gender:'f'},
    {name:'e',age:25,gender:'m'},
    {name:'f',age:15,gender:'f'},
    {name:'g',age:30,gender:'m'},
    {name:'h',age:21,gender:'f'}
]
//perform to find out the age of males
//separate all the males using filter function 
let  malesAge = arr.filter((n) => {
    return n.gender == 'm'
}).map((n) =>{
    return n.age
})

console.log(malesAge)
 

// wap to add the filter out the (+ve) Element and calculate the sum of that Element

const transcation = [23,56,-90,459,-682,1000]

let sum = transcation.filter((n) =>{
    return n > 0
}) .reduce((acc,value) => {
    return acc+value
},0)

console.log(sum)