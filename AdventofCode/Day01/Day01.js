const { readInput } = require('../fileReader');

let text = readInput('Day01\\input.txt');
const stringArray = text.split(/\s+/);

let listA = stringArray.filter((_, index) => index % 2 !== 0).map(Number);
let listB = stringArray.filter((_, index) => index % 2 === 0).map(Number);

/*
let listA = [];
let listB = [];
for (let index = 0; index < stringArray.length; index++) {
    if (index % 2 == 0)
        listB.push(stringArray[index])
    else 
        listA.push(stringArray[index])
}
*/
listA.sort((a, b) => a - b);
listB.sort((a, b) => a - b);

let answer = listA.reduce((sum, num, index) => sum + Math.abs(num - listB[index]), 0);

/*
let answer = 0;
for (let index = 0; index < listA.length; index++) {
    let num =  Math.abs(listA[index] - listB[index]);
    answer += num;
}*/

console.log(answer);