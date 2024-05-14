let arr = [26, 42, 78, 18, 3]

function bubleSort(arr){
   for(let i=0; i<arr.length-1; i++){
      for(let j=0;j<arr.length-1;j++){
         if(arr[j] > arr[j+1]){
            console.log(`arr[j]:${arr[j]} is greater than arr[i] ${arr[j+1]} `)
            let tem=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=tem;
            console.log("tem"+tem)
         }
      }
   }
}
// console.log(`before the sort: ${arr}`)
bubleSort(arr)
console.log(`after the sort: ${arr}`)