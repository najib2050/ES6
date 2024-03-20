/*
Map -= is an object that holds a collection key pairs and remembers the orignan insertion order of the key.
-Any value may either user key or a value
   --Akey in a map my only occur one -> it is unique in the map;s collection
     Map obj is iterated in key value pair, for of loop is used which returns 
        two member array of [key,value] for each iteration.
   -Iteration happent in insertion order.
   key value pair is inserted in map by set() method

             maps                                                            object
keys       _ no default key                                     obj contains prototypes there4 has default
             only contains what is explicitly                   key that could collide withyou own keys if you 
             puts into it.                                      are not careful NB you can paypassed by using
                                                                oject.create(null)

security     safe to usewith user-provided                      user-provided key value pairs on object,may allowan attaker to verride the object's prototype
            keys and value                                      you can mitigateby using a null prototype object
 
key types     can be any value => functions                     must either be a string or sybol
              objects,or any primitive

size          use to retrieve the number of items             use lenght() of array to retrieve the number of items
               size()   
               
iteration       iterable => directly iterated                 doesnt implement iterating protocal ->not directly iterable using for of loop by default
                                                             NB can implement iteration protocal =>you can get iterable for object through ->
                                                             using object.key or objec.enteries
                                                             for-in statement allows u to iterate over enumerable property of an object.
               
sterialization and    no native supporting but              native support for sterialization from object to JSON using json.stringify()
                     YOU can built you own                  native support fror parsing from JSON to object using json.parse()
                     sterialization and parsing
                     support.using ->
                     json.stringify() with it is 
                     replacer argumnet
                     json.parse() with it is riviver 
                     argument.
parsing
            */

// setting object properties
const contacts= new Map()
//set the value for a key in a map
contacts.set("najiib",{phone:'38897878', addres:'NE 1st av'});
contacts.set("jelle",{phone:"567820978",addres:"SW 2nd av "});
contacts.set("mohaa",{phone:"567820978",addres:"SW 2nd av "});
contacts.set("alii",{phone:"567820978",addres:"SW 2nd av "});
//get methode =<> gets the value for key in a map
let getName=contacts.get("najiib")
//has methode=> returs true if the a key exisistin the map
let isNameThere=contacts.has("najiib")
//delete methode=> removes element specified by  key
// let deleteContacts=contacts.delete("jelle")
//clear methode=> removes all elements from the map
// let clear=contacts.clear()
//size property =>returns the number of map elements
contacts.size

// contacts.get("najiib");
// console.log(contacts);
// console.log(getName);
// console.log(isNameThere);
// console.log(deleteContacts,"deleted ");
// console.log(contacts.size);

//map-like browser api
// map like object are either readOnly or writable-only
//read-only map like objects have propert size,methodes=> enteries(),forEach(),get(),has(),keys(),values()
//writable map  like object clear(), delete()and set()

//map.forEach() =>method invokes a callback for each key/value pair in a Map:

let disply=""
contacts.forEach((value,key)=>{
   disply +=key +`=` + value.addres;
})
// console.log(disply);
const fruits = new Map([
   ["apples", 500],
   ["bananas", 300],
   ["oranges", 200]
]);
let eachFruit=""
fruits.forEach(function(key,value){
   eachFruit +=value +` =  `+key + `  `; 
})
// console.log(eachFruit);
//map.enteries => method returns an iterator object with the [key,values] in a Map:
let enteriesEl=""
for(const fruit of fruits.entries()){
   enteriesEl +=fruit + ` `
}
// console.log(enteriesEl);

//map.key => method returns an iterator object with the keys in a Map:
let keyElem=""
for(const keys of fruits.keys()){
   keyElem +=keys +`  `
}
//console.log(keyElem); //apples  bananas  oranges  

//map.values() =>method returns an iterator object with the values in a Map:
let valueEl=""
for(eachValue of fruits.values()){
   valueEl +=eachValue +` `
}
console.log(valueEl);


