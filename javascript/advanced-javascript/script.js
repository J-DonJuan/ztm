
let array = [1,2,3,[4,5]];


let a = '   Hello';
console.log(a.trimStart());



// Sample Array
let obj = {
    name0: 'Santa',
    name1: 'Rudolph',
    name2: 'Grinch',
    nestedObj: {
        henlo: false
    }
}

let result = obj?.nestedObj?.henlo ?? 'No henlo fren :('
console.log(result);