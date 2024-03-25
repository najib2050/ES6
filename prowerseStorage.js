//staore data in the database
//store data in the prowser
//store data in the user

//browser store is storing data in the prowser
//types of prowser storage
// 1: cookes -> helps to store sth inthe browser
               // keeps us to login the websit
               // store permmananet => my be inmprtant info
               //the can expire aperiod of time

//sesion storage->store info temporay during user's session
                  //has largest sorage u can open alt of tabs on ur broweser
//localsorage=> 

//scheuling fuction
// setTimeout=>
//setinterval=>sheduling fun or buil in fun excute a specific fun
               // or codeblock at specif time
// setInterval(function/codeBlock,interval)
//setInterval has two parameters function and interval=>fun to be excuted at spacific interval while interval is the time
              //in millisecond btw each excution of the fun
let sayHello=()=>{
   console.log("hello user")
}
let interval=setInterval(sayHello,1000)
console.log(interval)
setTimeout(()=>{
   clearInterval(interval)
},3000)

// setInterval(() => {
   // console.log("hii najiib")
// }, 100);
