let employees=["rahul","sonia","priyanaka"]
let new_employess=employees.map(function(emp_Name){
    return emp_Name.length>6
})
console.log(new_employess)