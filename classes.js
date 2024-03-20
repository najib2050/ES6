// class => is template for javascript object NOT a javascript object
//class => use to create one or more object; its the blue print of object creation
//instance propert => means what they have =>name ,age height=> its difine in the constructor method
//instance methode => means what they do =.talke ,move jump,run
//this key word => means defining the currenct object, in other word this means the object which is being created by the class
// to create class => use the class keyword
//add it constructor() method ->
// class syntax
  /*
  class classNmae{
   constrcutor(pramater){}
  }
  FUNCTION OF CONSTRUCTOR METHOD
  1 has exact name as "constructor";
  2 it excuted automtically when a new object is created
  3 use to initilize object PROPERTY
  NB if you dont define constructor methode js will create an empty constructor method
  
  */ 
 /**
  * CLASS CAN BE DEIFNE IN TO TWO WAYS;
  * 1: class expresion
  * 2: class declaration
  *   
  */
 //declaretion
 class rectangle{
   constructor(hieght,width){
      this.hieght=hieght;
      this.width=width;
   
   }
 }
 //experation =>the class is anonymous but assigned to a variable
 //anonymoust =>
 const Rectangle = class {
   constructor(height, width) {
     this.height = height;
     this.width = width;
   }
 };

class Car{
   constructor(name ,year){
      this.name=name,
      this.year=year

   }
   //methode can be palin function,async fun,generator function or async generator fun
   ageOfCar(){
      const date=new Date().getFullYear()
      return date-this.year + ` years difference`
   }
   get yearDeference(){
      return this.ageOfCar()
   }

}

const firstCar=new Car("landcruesor",2004);

// console.log(firstCar.ageOfCar()); // nedd of ()  20 years difference
// console.log(firstCar.yearDeference); // no need of () ans 20 years difference
/**
 CLASS ELEMENT CAN BE CHARACTERISED BY THREE ELEMENT;
 1: KIND = getter setter method or field
 2: location = static or instance
 3: visibilty = public or private

 METHOD = public instance methode
 GETTER = public instance getter;
 SETTER =public instance  setter
 PUBLIC CLASS FIELD = public instance field;
 STATIC =public static method 
        =public static  getter
        =public static  setter

TWO SPECIAL CLASS ELEMENTS
1: CONSTRACTOR()
2: STATIC INITIALIZATION BLOCK -> aloow flexible initioalization/set uo of static properties =>statememnts are evaluated during initialization while granting access to private scope
 */
/**
 * STATIC METHODS AND FIELSD
 * static properties => methode and fields
 * static => defines static methode or field
 *        static properties are defined on the class itself  instead of each instance
 *        static methods=> use for creation of utility fun for applications
 *        static field  =>useful for caches,fixed-configuration,data that doesnt need to replicate across the instance
 */
// example
class Point{
   constructor(x,y){
      this.x=x;
      this.y=y
   }

   static displayName="static"
   static distance(a,b){
      const dx=a;
      const dy=b;
      const dis="dx="+dx +` ` +"dy ="+dy
      return dis
   }
}
let p1=new Point(2,4)
let p2=new Point(10,50)
// console.log(Point.displayName);
// console.log(Point.distance(2,1));// dx=2 dy =1
// console.log("point",Point.distance(p1,p2))//point dx=2 dy =50,point dx=[object Object] dy =[object Object]