# learning DSA with JS
# differnce between for in and for of loop is :
in for of loop the variable is access like a value 
and there is alternvativetly in for in loop

  <p> for of loop = for Loop <br>
  ES6 = Ecma Script </p>
  <p> Ecma = Eurpean computer manfactuerers Association</p>
  <p>we cannot reassign aur re decalre value in const keyword</p>
  <p>we cannot re decalre variable in let keyword</p>
  <p>we can re assign value in let keyword</p>
  <p>const and let keyword is blocked Scope</p>
  <p>var keyword is functional scope</p>
  <p><b>Arrow function = fat Arrow function</b></p>
  <p>Backtick used to print a sentence in a single line <br> we can put an element in an array and when we print that element we get undefined <b>we cannot pass the key of object with different name while we doing destructing of an object </b></p>
  <p><b>FUNCTION PROGRAMMING:- used declarative way to write a code</b> <br> declarative meaning what to achieve from the problem</p>
    <p>high order function receives a function</p>
    <p>call back function pass a function as an argument</p>
  <div><i><b>pure function = </b></i> same input and same output</div>


  <div><h2 align="center">Map  function</h2>
   <h3 align="center"> 
   <ul>
  <li>it work as an for loop and traverse each element of an array </li>
  <li>it will return a result as an array </li>
  <li>we dont have to create an array explicitly</li>
  <li>it display value in an array</li>  
</ul>
  </h3>
  </div>
<p>to fixed is used to remove decimal points it is a function</p>

<div> <h2 align="center"> forEach </h2>
<ul>
  <li>for each work same as a map function</li>
  <li>the different between forEach and map is forEach cannot return but  map  can do</li>
  <li>it display value in a  normal format</li>
</ul>
</div>

<div align="center">
  <h1><b>Find</b></h1>
  <ul >
    <li>it return the first element of an array that satsify the condition</li>
  </ul>
  <h2><b>findIndex</b></h2>
  <ul>
    <li>it uses to do some changes on that value of an array that we find on the find function (by indexing)</li>
    <li>it find the index of an particular condition</li>
  </ul>
  <h2><b>Some</b></h2>
  <ul>
    <li>it will return the value boolean value</li>
    <li>if will return 1 even if the one element satsify the condition</li>
  </ul>
  <h2><b>Every</b></h2>
  <p>this function is the vice versa of some function</p>
</div>

<div align="center">
  <h1 >Filter method</h1>
  <ul type="disc"> <li>it will return a new array and all the element in it that satsify the condition </li></ul>
</div>

<div align="center">
  <h1>Reduce Method</h1>
  <ul type="square"> <li>this method is used to perform mathmatical calculation</li> <li> it takes 4 argument but i take only 2 argument </li>
   <li>it return only single value.</li>
   <li><b>accumulator is assign the value like if we want to perform multiply on an array then we have to start the value from one(1).</b></li>
  </ul>
</div>

<div align="center"> 
  <h1>Chaining Method</h1>
  <ul type="circle">
    <li> this method is used to combine two method in one  </li>
    <li>making the chain of hof(high order function)</li>
  </ul>
</div>

<div align="center">
  <h1>Practice Question solved by naive approach</h1>
  <ol>
    <li>find peak element of an array which is greatest both the neighbours
      <ul>
        <li> input: [1,10,4]</li>
        <li>output :10 </li>
        <li>10 is greatest among both of these</li>
      </ul>
    </li>
    </ol>
   
      
  
  
</div>
 <div>
  <h1 align="center"> This keyword</h1>
  <ul>
    <li>non-strice mode (node js Enviornment) this.js file
      <ol>
        <li>when we print this keyword it gave empty object</li>
        <li>when we print in function it gave global object</li>
        <li>when we print in arrow it gave the function name </li>
        <li>when we print in object -> function it gave  object itself </li>
        <li> when we print in object->function->function it gave global objec</li>
      </ol>
    </li>
    <li> strict mode (node js Enviornment) this2.js file
      <ol>
         <li>in this we have to write (use strict)</li>
         <li>when we console this keyword it display empty object</li>
      </ol>

    </li>
  </ul>
 </div>