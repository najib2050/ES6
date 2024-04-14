
import fetch from "node-fetch";


const urls=[
   "https://github.com/najib2050",
   "https://github.com/oelbaga",
   "https://github.nosuc-url",


]

let getUrl=urls.map((url)=>fetch(url)) //use map()->creates a new array with the results of calling 
                                          // a provided function on every element
                                          //provide function => (url) cllaback
Promise.allSettled(getUrl)
.then(responses=>responses.forEach((respons,num) => {
   if(respons.status==="fulfilled"){
      console.log(`${urls[num]} ${respons.value.status}`)
      
   };
   if(respons.status==="rejected"){
      console.log(`${urls[num]} ${respons.reason}`)

   }
}))

