let obj = {
    name:'mahek',
    gender:'F',
    age:78
}


let{name , gender,age} = obj
 console.log(name)
 console.log(gender)
 console.log(age)



 //using different keys name specific method

 let flowers ={
      naam:"Rose",
      color:'Red',
      country:'Satna'
    
 }



 let{naam:n,color,country} = flowers
console.log(n)


//destructing nested object

let humans = {
      fullName:'Akash Shivani',
      dob : 17,
      address :{
        state:'Madhya Pradesh',
        city:'Satna'
      }
}


let{fullName,dob,address:{state,city}} = humans
console.log(fullName)
console.log(state)
console.log(city)