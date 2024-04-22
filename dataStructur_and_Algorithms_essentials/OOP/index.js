class Mobile{
   constructor(brand){
      this.brandName=brand;

   }
   print(){
      console.log(`i have ${this.brandName} mobile`)
   }
}
let iphone=new Mobile("iphone 15 pro max") //Mobile { brandName: 'iphone 15 pro max' }
iphone.print()  //i have iphone 15 pro max mobile
console.log(iphone)

class Model extends Mobile{
   constructor(brand,model){
      super(brand);
      this.model=model;

   }
   show(){
      console.log(`it is ${this.model}`)
   }
}
let model=new Model("sumzan22","hoyadaa")
model.show()
model.print()
// console.log(modelsh1sdsd

class Dog {
   constructor(color,speed){
      this.color=color;
      this.speed=speed;

   }
}
class Hasky extends Dog{
   constructor(color,speed,ownor){
      super(color,speed);
      this.ownor=ownor;
   }
   info(){
      console.log(`owner ${this.ownor} color ${this.color} speed ${this.speed}`)
   }
}
let newType=new Hasky("najiib","white","jaman shefered")
newType.info()


class Increemnet{
   value=0;
   incre(){
      return ++this.value;
   }
}
let count=new Increemnet()
console.log(count.incre())