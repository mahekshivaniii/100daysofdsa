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
let  males = arr.filter((n) => {
    return n.gender == 'm'
})


let age = males.map((n) =>{
    return n.age
})

console.log(age)
 //console.log(males)