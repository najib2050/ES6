//loops through the properties of an Object:

// for(key in object){}

// The for in loop iterates over a person object
// Each iteration returns a key (key)
// The key is used to access the value of the key
// The value of the key is person[key]
const person={
   firstName:"najiib",
   lastName:"aden",
   age:"26"
}
let display=""

for(key in person){
   display +=person[key]+" "
}

// console.log(display);
let company = {
   CEO: {
       name: "John Doe",
       manager: null,
       subordinates: ["CTO", "CFO"]
   },
   CTO: {
       name: "Alice Smith",
       manager: "CEO",
       subordinates: ["Senior Developer", "Junior Developer"]
   },
   CFO: {
       name: "Bob Johnson",
       manager: "CEO",
       subordinates: ["Accountant", "Financial Analyst"]
   },
   "Senior Developer": {
       name: "Emily Brown",
       manager: "CTO",
       subordinates: []
   },
   "Junior Developer": {
       name: "Michael Green",
       manager: "CTO",
       subordinates: []
   },
   Accountant: {
       name: "Samantha White",
       manager: "CFO",
       subordinates: []
   },
   "Financial Analyst": {
       name: "David Lee",
       manager: "CFO",
       subordinates: []
   }
};
function buildOrganizChart(campany,employee){
   console.log(employee.name+" ",employee.position);

}
buildOrganizChart(company,company["CEO"])

