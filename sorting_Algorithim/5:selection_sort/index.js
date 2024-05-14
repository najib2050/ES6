let arr2 = [5, 4, 3, 2, 1];
//selecton => finding smallest elemnt and swap it with the current elent
// smallest elemnt =1 and current is 5  ; if we swap them each other 1 5 4;

for (let i = 0; i < arr2.length; i++) {
  let smallestEle = arr2[i];
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[j] < arr2[i])
      console.log(`current element ${arr2[j]} is les than ${arr2[i]}`);
   let temp= arr2[i];
   arr2[i]=arr2[j];
   arr2[j]=temp
  }
  }
console.log(`arr2 : ${arr2}`);
