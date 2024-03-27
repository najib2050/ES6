//staore data in the database
//store data in the prowser
//store data in the user

//browser store is storing data in the prowser
//types of prowser storage
// 1: cookes -> helps to store sth inthe browser
               // keeps us to login the websit
               // store permmananet => my be inmprtant info
               //the can expire aperiod of time

//sesion storage->store info temporay during user's session
                  //has largest sorage u can open alt of tabs on ur broweser
//localsorage=> 

//scheuling fuction
// setTimeout=>
//setinterval=>sheduling fun or buil in fun excute a specific fun
               // or codeblock at specif time
// setInterval(function/codeBlock,interval)
//setInterval has two parameters function and interval=>fun to be excuted at spacific interval while interval is the time
              //in millisecond btw each excution of the fun
              /**
               * usesge
               * 1: animations -> repeatedly updating the position or appearance of an element on web apge
               * 2: polling => usfor making periodic request to server to check for new update or data
               * 3: real-time updates =>used for periodically fetch and display real-time dta on web page ,such as stock price or weather updates
               * 
               * IMportanct  consideration
               * 1: blance performance and responsiveness => very short interval may consume excessive cpu resource while very log interval may couse delay updates
               * 2: may couse user degrading and browser freezing =>long running or cpu -intensive operation
               * 
               * case cenario->
               *  -
               */
let sayHello=()=>{
   // console.log("hello user")
}
let interval=setInterval(sayHello,1000)
// console.log(interval)
setTimeout(()=>{
   clearInterval(interval)
},3000)

// setInterval(() => {
   // console.log("hii najiib")
// }, 100);

let url="https://jsonplaceholder.typicode.com/users/1"
//fech =>this methode is designated to fech some data from agiven url
// fetch(url-psrsmeter,)

//fetch(url).then((response)=>response.text()).then((data)=>console.log(data))

// async function info(){
//    try {
//       let res= await fetch(url);
//       let data= await res.json();
//       console.log(data)
//    } catch (error) {
//       console.log(error)
//    }
// }
// info()

// call methode => it allows an object to use methods of another object
let student={
   name:"najiib aden",
   networth:"200bn",
   printInfo:function(age,company){
      console.log(this.name + " " + this.networth+ " " + age+" "+company)
   }
}
let student1 ={
   name:"mark john",
   networth:"150bn",

}
student.printInfo(25)
//the print i use it in student w want to use it in student1
//call methode
student.printInfo.call(student1)
student.printInfo.call(student1,30)
student.printInfo.call(student1,"fourthy years")
student.printInfo.call(student1,[53,"amzone","google"])
//apply methode
student.printInfo.apply(student1,[53,"amzone","google"])

let newFun=student.printInfo.bind(student,33,"microsoft")
newFun()

//27/3/2024
// js engin => excutes our code 
/**
 * js engin=>
 * //browser has v8 engine=>is pressent in chrome browser, and in node js as well.
 * HOW DOES THE CODE IS EXCUTED?
 * 1: parsing =>it is a process in which our engine converst the code into abstract syntax tree or AST=. IS a kind of data 
 * structure designited to store data
 * 2: compilation=> converting current code into machine code
 * 3:excution: the machine code is then excuted
 * 
 * interperater is like part of engine
 * FUNCTION CLAA STACK
 * stack=> something that is on top of another
 * 5
 * 4
 * 3
 * 2
 * 1
 * //foundation feachers of stack
 * first in,last out => FILO
 * LAST OUT, FIRST OUT=lifo
 * we include multiple method i.e call,print
 * 
 * fun1()
 * fun2()
 * fun3()
 * fun4()
 * 
 * //stack
 * fun4()
 * fun3()
 * fun2()
 * fun1()
 * 
 * 
 */
let users=(names)=>{
   names.forEach((name) => {
      console.log(name)
   });
}
let lisUsers=["najiib","hassan"]
users(lisUsers)

//
//console.log("aman")
// anonymouse()
// forEach()
// users()