// (1)Write a program that declares a variable using var, let, and const and prints the value to the console.

var var_variable
var_variable = 'Abdul Azeez'
console.log(var_variable)
let let_variable
let_variable = true
console.log(let_variable)
const const_variable = 2023
console.log(const_variable)


//(2)Write a program that reassigns a value to a variable declared with let and prints the new value to the console.
let value1 = 10
value1 = 20
console.log(value1)
//(3)Write a program that tries to reassign a value to a variable declared with const and prints the message to the console

const myConstVariable = 30;
try {
  myConstVariable = 50;
} catch (error) {
  console.error(error.message);
}
//(4)Write a program to declare a const, let, var variable within an if statement and try to access the variable outside the if block, what is the result?

function temp() {
  if (true) {
    var a = 10
    let b = 20
    const c = 30
  }
  console.log(a)
  console.log(b)
  console.log(c)
}
// it wont arrise error in case of varible dicler by 'var' in remainig two cases it arrises a eroor of not defined

//(5)Write a program that concatenates two or more strings and prints the result to the console.

let str1 = 'Abdul'
let str2 = 'Azeez'
let str3 = str1 + ' ' + str2
console.log(str3)
//(6)Write a program that takes a string as input and prints the length of the string to the console.
let str = prompt("Enter a string")
console.log(str.length)
//(7)Write a program that converts a string to uppercase and prints the result to the console.
let str = prompt("Enter a string")
str1 = str.toUpperCase()
console.log(str1)