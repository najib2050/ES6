 // spread operator expand iterable like array into more element

 const moths=["jun","feb","much"];
 const month2=['apr',"may","jun"]

 const spread=[...moths, ...month2] //[ 'jun', 'feb', 'much', 'apr', 'may', 'jun' ]
//  console.log(spread);

 const num=[55,566,639,363]
 let  maxValue=Math.max(...num)
 let minvalue= Math.min(...num)
 let avrageValue=Math.sqrt(...num)
 console.log(maxValue);
 console.log(minvalue);
 console.log(avrageValue);
