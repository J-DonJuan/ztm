/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. 
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]

Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
and if you enter RGB color format it returns HEX. */

// Q1
let sampleInput = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const cleanRoom = (array) => {
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

let answer = cleanRoom(sampleInput);
console.log(answer);



// Check if current element matches previous element

// If it does match, add current element to "current" array

// If it does NOT match, add current element as new index. Check "current" array length



// // Figure out which inputs repeat
// let repeatArray = [];
// test_input.forEach((element, i) => {
//     if (element == test_input[i + 1]) {
//         repeatArray.push(element);
//     }
// })

// repeatArray = [...new Set(repeatArray)];
// console.log(repeatArray);
