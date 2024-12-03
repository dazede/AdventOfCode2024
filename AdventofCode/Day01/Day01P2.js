const { readInput } = require('../fileReader');

let text = readInput('Day01\\input.txt');
const stringArray = text.split(/\s+/);

let listA = stringArray.filter((_, index) => index % 2 !== 0).map(Number);
let listB = stringArray.filter((_, index) => index % 2 === 0).map(Number);

/*
let answer = 0;
for (let index = 0; index < listA.length; index++) {
    let num = 0;
    for (let j = 0; j < listB.length; j++) {
        if (listB[j] === listA[index])
            num++
    }
    answer += (listA[index] * num);
}

console.log(answer);*/

let frequencyMap = listB.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
}, {});

let answer = listA.reduce((sum, num, _) => sum + (num * frequencyMap[num] || 0), 0);
console.log(answer);