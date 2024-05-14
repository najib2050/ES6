// let arr = [5, 4, 3, 2, 1, 7, 6, 4, 9];

// for (let i = 0; i < 4; i++) {
//   let round = i + 1;
//   // console.log("round "+round +" array "+ arr)
//   for (let j = 0; j < 4; j++) {
//     // console.log("round "+round +" array "+ arr)
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
      // console.log('currenct array after round ' + round+ " is " + arr)
      // console.log(arr)
      // ans:currenct array after round 1 is 4,5,3,2,1
      // currenct array after round 1 is 4,3,5,2,1
      // currenct array after round 1 is 4,3,2,5,1
      // currenct array after round 1 is 4,3,2,1,5
      // currenct array after round 2 is 3,4,2,1,5
      // currenct array after round 2 is 3,2,4,1,5
      // currenct array after round 2 is 3,2,1,4,5
      // currenct array after round 3 is 2,3,1,4,5
      // currenct array after round 3 is 2,1,3,4,5
      // currenct array after round 4 is 1,2,3,4,5
//     }
//   }
// }

// let arr2 = [5, 4, 3, 2, 1, 7, 6, 4, 9,10,20,40];
// let n = arr2.length;

// for (let i = 0; i < n - 1; i++) {
//   let round = 1 + i;
//   // console.log("round "+round+ " array "+arr2)
//   for (let j = 0; j < n - 1; j++) {
//     // console.log("round "+round+ " array "+arr2)
//     if (arr2[j] > arr2[j + 1]) {
//       let temp = arr2[j+1];
//       arr2[j+1] = arr2[j];
//       arr2[j] = temp;
//       console.log("round "+round+ " array "+arr2)
      // ans: round 1 array 4,5,3,2,1,7,6,4,9,10,20,40
      // round 1 array 4,3,5,2,1,7,6,4,9,10,20,40
      // round 1 array 4,3,2,5,1,7,6,4,9,10,20,40
      // round 1 array 4,3,2,1,5,7,6,4,9,10,20,40
      // round 1 array 4,3,2,1,5,6,7,4,9,10,20,40
      // round 1 array 4,3,2,1,5,6,4,7,9,10,20,40
      // round 2 array 3,4,2,1,5,6,4,7,9,10,20,40
      // round 2 array 3,2,4,1,5,6,4,7,9,10,20,40
      // round 2 array 3,2,1,4,5,6,4,7,9,10,20,40
      // round 2 array 3,2,1,4,5,4,6,7,9,10,20,40
      // round 3 array 2,3,1,4,5,4,6,7,9,10,20,40
      // round 3 array 2,1,3,4,5,4,6,7,9,10,20,40
      // round 3 array 2,1,3,4,4,5,6,7,9,10,20,40
      // round 4 array 1,2,3,4,4,5,6,7,9,10,20,40
      
//     }
//   }
// //   console.log(arr2);
// }





let arr2 = [5, 4, 3, 2, 1];

for(let i=0; i<arr2.length-1 ; i++){
  console.log(arr2)
  for(let j=0; j<arr2.length-1; j++){
    // console.log(`curren element:  ${arr2[j]}`)
    // console.log(`next element: ${arr2[j+1]}`)

    if(arr2[j] > arr2[j+1]){
      let temp=arr2[j];
      arr2[j]=arr2[j+1];
      arr2[j+1]=temp;
    }
  }
  console.log(arr2)
}