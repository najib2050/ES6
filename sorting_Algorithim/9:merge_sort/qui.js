arr = [26, 42, 78, 18, 3] 
 
function merge(left,right){
   console.log(`left: ${left.length}`)
   console.log(`right: ${right.length}`)
   let newArray=[]
   let leftIndex=0;
   let rightIndex=0;
   while(leftIndex <left.length && rightIndex <right.length){
      if(left[leftIndex]<right[rightIndex]){
         newArray.push(left[leftIndex])
         leftIndex++
      }else{
         newArray.push(right[rightIndex])
         rightIndex++
      }
   }
   console.log(`new array : ${newArray}`)
   return  newArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
function mergeSort(array){
   if(array.length === 1){
      return array
   }
   const mid=Math.floor(array.length/2)
   const leftArray=array.slice(0,mid)
   const rightArray=array.slice(mid);
   // console.log(`left array: ${mergeSort(leftArray)}`)
   // console.log(`right array: ${mergeSort(rightArray)}`)

   return merge(mergeSort(leftArray), mergeSort(rightArray))


}
console.log(`bef4 the sort ${arr}`)
// mergeSort(arr)
console.log(`after sorting the array ${mergeSort(arr)}`);
 
 
 