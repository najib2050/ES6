/*
Arrow function dont have->
1 their own this keyword bcs its not suited for definning object methods
2 NOT hoisted bc it must be defined bf used
3 use constant instead of var bcs func exp is always const value
you can omit return keyword and the curly bracket if the function is single statement

 */

const multip=function(a,b){
   return a*b
}
// console.log(multip(5,10));
//arrow function
const multip2=(a,b)=>a*b;
// console.log(multip2(10,10));

/*
THIS keyword
in regualr or nomal func this keyword rep the object that called
the function -> window the document button or whatever
 IN ARROW FUNC- rep the object that define the arrow function
 */

 const hello=function(){
   document.getElementById("demo").innerHTML +=this //  displays obj window;
 }

 window.addEventListener("load",hello) // window obj calls the function

 document.getElementById("btn").addEventListener("click",hello) // obj window button obj

 const hello2=()=>document.getElementById("demo").innerHTML +=this; // this keword rep the obj that owns the func no matter who calls the func
 window.addEventListener("load",hello2); //onject window
 document.getElementById("btn").addEventListener("click",hello2); // object window 