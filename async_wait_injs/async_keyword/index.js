import fetch from "node-fetch";


async function runProcess(){
   const fetchingDat=await fetch("https://jsonplaceholder.typicode.com/todos/1");
   let respons=await fetchingDat.json()
   console.log(respons)
}
// runProcess()

async function f(){
   console.log("wait a minute");
   return Promise.resolve(1)
}
f()