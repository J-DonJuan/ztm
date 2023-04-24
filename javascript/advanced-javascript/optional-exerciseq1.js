/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. 
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]] */

// Q1

// Test Inputs
let sampleInput = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let sampleInputStrings = [1,2,4,591,392,391,"17", "2", "2", "3",2,5,10,2,1,1,1,20,20]

// Take an array, split out string elements into a separate array
const separateStringsAndNumbers = (array) => {
    let stringArray = [];
    for (i = 0; i < array.length; i++){
        if (typeof(array[i]) === 'string') {
            stringArray.push(array[i]);
            array.splice(i, 1);
            i--;
        }
    }
    return stringArray;
}

// Convert an array full of strings and convert them to numbers
const convertStringArrayToNums = (array) => {
    for (i = 0; i < array.length; i++){
        array[i] = Number(array[i]);
    }
}

// Convert an array full of numbers and convert them to strings
const convertNumArrayToStrings = (array) => {
    for (i = 0; i < array.length; i++){
        array[i] = String(array[i]);
    }
}

const sortNumberArray = (array) => {
    // Sort Array
    array.sort((a,b) => a - b);

    // Initialize result array that we will fill in
    let result = [];

    // Initialize new group with index 0 of array
    let currentGroup = [array[0]]

    // Loop through sorted array starting from index 1 (Index 0 is already in currentGroup array)
    for (i = 1; i < array.length; i++){
        if (array[i] === array[i-1]){
            currentGroup.push(array[i]);
        } else {
            result.push(currentGroup.length > 1 ? currentGroup : currentGroup[0])
            currentGroup = [array[i]];
        }
    }
    return result;
}

const pushAllElements = (array1, array2) => {
    for (i = 0; i < array2.length; i++){
        array1.push(array2[i]);
    }
}

const cleanRoom = (array) => {
    // Separate into two arrays, one with strings, one with numbers
    let stringArray = separateStringsAndNumbers(array);

    // Temporarily convert string array into numbers
    convertStringArrayToNums(stringArray);

    // Sort and correctly organize number array
    let numArray = sortNumberArray(array);

    // Sort and correctly organize string array (which is temporarily all numbers)
    sortNumberArray(stringArray);

    // Change string array back into strings
    convertNumArrayToStrings(stringArray);

    // Push all elements from stringArray into NumArray as individual elements
    pushAllElements(numArray, stringArray);

    return numArray;
}

let answer = cleanRoom(sampleInputStrings);
console.log(answer);

let answerNumsOnly = cleanRoom(sampleInput);
console.log(answerNumsOnly);

