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

//find out ages of men(males) using filter function 
let  males = arr.filter((n) => {
    return n.gender == m
})
 console.log(males)