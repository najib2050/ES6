let arr=[5,4,3,2,1]
let n=arr.length;

for(let i=0;i<n; i++){
   let round=i+1;
   for(let j=i+1;j<n;j++){
      let swappingRound=j
      if(arr[j]<arr[i]){
       console.log(arr[j])
      let temp=arr[j];
      arr[j]=arr[i];
      arr[i]=temp

      console.log(" round "+round +" and "+ "swapping rounds "+ swappingRound+"array " + arr)
      }
   }
 
   
   }