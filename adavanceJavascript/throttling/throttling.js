/**
 * Throttling =>it ensure that a function is on excuted at mostone in specified time
 * 
 */
//EXP
let i=0
function expensive(){
   console.log("button cliked"+ ++i)
}

function throttle(fun,delay){
   let flag=true;
   return function(){
      if(flag){
         fun();
         flag=false;
         setTimeout(()=>{
            flag=true;
         },delay)
      }
   }

}

let betterThrottle=throttle(expensive,2000);

// console.log(betterThrottle)