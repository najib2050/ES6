import fetch from 'node-fetch';



Promise.all([
   new Promise((resolve)=>setTimeout(()=>console.log(3))),
   new Promise((resolve)=>setTimeout(()=>console.log(6))),
   new Promise((resolve)=>setTimeout(()=>console.log(8))),

]).then("alert");




//converting url to promise by using fech() methode

const urls=[
   "https://github.com/najib2050",
   "https://github.com/oelbaga",

]

//methode one
let handleUrl=urls.map((url)=>fetch(url))

//methode 2

Promise.all(handleUrl)
.then((responses)=>responses.forEach((response)=>{
   console.log(`url: ${response.url} and status: ${response.status}`)
}))


Promise.all(urls.map((url)=>fetch(url)))
.then((response=>response.forEach((res,index)=>{
   console.log(res.status)
   console.log(index)
   
})))

//methode 3