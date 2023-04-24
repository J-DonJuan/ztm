/* Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3] */

const answer = (array, targetNum) => {
    let answerArray = [];
    let end = 0;
    for (i = 0; i < array.length; i++){
        for (j = 0; j < array.length; j++){
            if (end === 0 && array[i] === array[j]) {
                continue;
            } else if (end === 0 && array[i] + array[j] === targetNum) {
                answerArray.push(array[i]);
                answerArray.push(array[j]);
                end = 1;
            }
        }
    }
    return answerArray;
}

let result = answer([1,2,3], 4);
console.log(result);

