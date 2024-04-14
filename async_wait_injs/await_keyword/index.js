import fetch from "node-fetch"

let display;
console.log(display)
async function myDisplay(){
   let myPromse=new Promise((resolve,reject)=>{
      resolve("i wan to see the world")
   })
    display += await myPromse;
}
myDisplay()