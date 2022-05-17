// Write your solution in this file!
const employee = {
    name : "Jeff",
    streetAddress : "37 Chilton",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, 
        [key] : value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
   let newObject = {...employee}
    delete newObject[key]
   return newObject
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
      delete employee[key];
      return employee
  }



console.log(deleteFromEmployeeByKey(employee));