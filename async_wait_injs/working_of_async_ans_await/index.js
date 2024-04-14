import { default as fetch } from "node-fetch";


let promise=new Promise((resolve,resject)=>{
   setTimeout(()=>resolve("my promise resolved"),500)
})
async function asynFunc(){
   let myPromise=await promise;
   console.log(myPromise)
   console.log("hello")

}
asynFunc()