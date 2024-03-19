/*
loops through the values of iteratable objects =>data structur(array,string, map,nodeList)
for(variable of iterable)
 */
const cars=["taxi","BMW","NOAH","SAMTERALA"]
let eachCar= ""

for(let car of cars){
  eachCar +=car+" "
}

// console.log(eachCar);
// TASK MANAGEMNT APPLICATION
let taskList=""
let tasks=[
   {id:1,description:"complete project proposal", dueDte:"2024-03-20"},
   {id:2,description:"prepare presentations slides", dueDte:"2024-04-10"},
   {id:1,description:"review  feedback from team", dueDte:"2024-03-23"},
]
for(let task of tasks){
   taskList +=`${task.id}, ${task.description},${task.dueDte}`
}

console.log(taskList);