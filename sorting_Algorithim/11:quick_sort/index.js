
function concat(...array){
   let newArray=[]
   for(element of array){
      newArray +=element
   }
   return newArray;
   // console.log("last array"+array)

}

let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
function quickSort(array){
   if(array.length <=1){
      return array;
   }
   //chose pivote
   let pivote=array[0]
   let leftArray=[];
   let rightArray=[];

   for(let i=1; i<array.length; i++){
      if(array[i] <pivote){
         leftArray.push(array[i])
         // console.log(`left ${array[i]}`)
      }else{
         rightArray.push([array[i]]);
         // console.log(`right ${array[i]}`)
      }
   }
   // console.log('right'+rightArray)
   // console.log("left"+leftArray)
   
   return concat(quickSort(leftArray) ,pivote, quickSort(rightArray))

   // return [...quickSort(leftArray),pivote,...quickSort(rightArray)]

}

console.log(quickSort(myArray))