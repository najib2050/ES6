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