/**
 * the program utilzes the .then() method to link to the promise
 * -the methode is invoked upon the suuccessfull resolution of the promise
 * 
 */
const count=0;

//return a promise
let countValue=new Promise((resolve,reject)=>{
   resolve("promise resolve")
})
//excute when promise is rsolved succefully.
countValue.then((result)=>{
   console.log(result)
})
countValue.then(()=>{
   console.log("you can call multiple function this way")
})