let emp={
    eid:101,
    name:"rahl",
    esal:45000
}
let person={}

console.log(Object.keys(emp))//eid,name,sal
console.log(Object.values(emp))//101,rahul,45000
console.log("***********")

console.log(Object.keys(emp).length)//3
console.log(Object.values(emp).length)//3
console.log("***********")

console.log(Object.keys(emp).length > 0) //true

console.log(Object.values(emp).length > 0)//true
console.log("***********")

console.log(Object.keys(person).length > 0)//flase