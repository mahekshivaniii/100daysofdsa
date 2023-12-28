function  firstName(firstName,cb){
    console.log(firstName)
    cb('Stark')
}

firstName('Tony',last_Name)


function last_Name(lastName)//call back function
{
    console.log(lastName)
}

// lastName('Stark')