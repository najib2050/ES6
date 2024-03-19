const numer=[1,2,3,4,5,6,7]
let dispaly=""

let eachNumber=numer.forEach((num)=>{
   // console.log(num);
   dispaly +=num*100 + " "

})
// console.log(dispaly);
// takes three argument value index and array
const numbers=[10,20,30,40]

let EachNUmber=numbers.forEach(eachnumber)

function eachnumber(value,index,array){
   console.log(value,index,array);
  
}