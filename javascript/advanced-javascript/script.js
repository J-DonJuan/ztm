let obj = {
    name0: 'Santa',
    name1: 'Rudolph',
    name2: 'Grinch'
}

const objKeys = Object.keys(obj);
console.log(objKeys);
objKeys.forEach((key) => {
    console.log(obj[key]);
})

const objValues = Object.values(obj);
console.log(objValues);

const objEntries = Object.entries(obj);
console.log(objEntries);
console.log(objEntries[0][0])