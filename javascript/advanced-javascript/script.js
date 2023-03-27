const array = [1, 2, 3, 10];

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 27);

console.log(reduceArray)