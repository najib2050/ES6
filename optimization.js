/**
 * Debounce => it is the process of delaying the fetch data from server
 *           use optimize the server during fetching. 
 *             to enhance browser efficeincy, development, debouce delays the data fetch untill a certain amount of time has passed
 * 
 */

let i=0
function getData(){
   console.log("fetching data"+ i++)
}
const doSth=function(fn,delay){
   let timer;
   return  function(){
      clearTimeout(timer);
      timer=setTimeout(()=>{
         fn()
      },delay);
   }
}
const betterFunction=doSth(getData,500)

console.log("najiib")


// WHAT IS DEVOUNCING.
/**
 * Is a strategy use to perform to a feature of web page bu contralling the at which the function is excuted
 * Dbouncing accept a function and transforms it(function ) to updatred function =>debounced, so that the code inside the original function is excuted after a certain perion of time
 * if the debounce function is called within that time, the previous timer is reset and new timer is stated for this function call
 * 
 */
//lets take function we want this function to excuted after 500seconds
function fun(){
   console.log("this is afuntion");
}

//HOW TO IMPLEMENT DEBOUNCING IN JAVASCRIPT.
/**
 * What behaviour do want from debouncig
 * 1: delay the function excution by certain time ,delay
 * 2: reset the timer if the function is called again
 * to debounce a function we will have:
 *  a function<debounce> that accept fun reference and delay as parametrs and returns debounced function
 * function  debounce(fun,dalay){
 *       return ()=>{}  debounced function
 * }
 * this function above is only called once to return debounce
 * to delay a function in some milisecond we use setTimeOut() method
 * function debounce(fun,delay){
 *       return ()=>{
 *             setTimeOut(()=>{
 *                  fun()
 *       },delay)
 *    }
 * }
 * the second behaviour reseting the timer if the fun is called again
 * create a variable timer and assign it return value of setTimeOout, setTimOut return a unique identifies to timer, and the identifier is stored /held by timer
 * 
 * fucntion debounce(fun,delay){
 *    let timer=0 or null
 *           return ()=>{
 *             timer =  setTimeOut(()=>{
 *                  fun()
 *         },delay)
 *     }
 * }
 * how do we get acces to timer from outside of the debounced funct?
 * how does debouce fun have acces to timer even if it used outside the debounced fun?
 * ANs USE closure  concept
 * js uses closur to hold access to tmer every time use debounced fun
 * since debounce fun has access to the same variable in every func call we add codition to check whether the previous timer excist
 * if(timet  ==!null) or if(timer)
 * to cancel the prvious timer use cleartimeOut METHDE
 * if(timer){clearTimeOut(timer)}
 * 
 */
function debounce(fun, delay){
   let timer=0
   return ()=>{
      if(timer ==!null){
         clearTimeout(timer)
      }
     timer= setTimeout(()=>{
      fun()
     },delay)

   }
 }
 //use the above debouncing fun
 const debouncedFun=debounce(fun,500)

 debounce()
 setTimeout(debounce,100)

 function addition(){
   console.log("the arguments ");
 }

 function debounceAddition(add,delay){
   let timer=null;
   return ()=>{
      if(timer) return clearTimeout(timer)

      timer=setTimeout(()=>{
         add()
      },delay)
   }
 }
 const addFun=debounceAddition(addition,500)

//USE CASE OF DEBOUNCING.