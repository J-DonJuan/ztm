// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes("John"));


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const incJohn = dragons2.filter((element) => element.includes("John"));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powOf100 = (num) => num ** 100;
console.log(powOf100(3))

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(powOf100(10000))
// Infinity
