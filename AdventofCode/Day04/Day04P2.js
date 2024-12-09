const { readInput } = require("../fileReader.js");

const data = readInput('Day04\\input.txt');
const lines = [...data.split(/\n/)];
const word = ['X','M','A','S'];
let ans = 0;

for (let lineIndex = 1; lineIndex < lines.length - 1; lineIndex++) {
    let letters = lines[lineIndex].split('');
    
    for (let index = 1; index < letters.length -1; index++) {
        if (letters[index] !== word[2])
            continue;

        if (helper(lineIndex, index, -1, 1) && helper(lineIndex, index, 1, -1))
            ans++;
    }
}

function helper(lineIndex, index, start, next) {
    let letter = lines[lineIndex - 1].split('')[index + start];
    if (letter !== 'S' && letter !== 'M')
        return false;

    let otherLetter = lines[lineIndex + 1].split('')[index + next];
    if ((letter === 'S' && otherLetter === 'M') ||
        (letter === 'M' && otherLetter === 'S')) {
            return true;
    }
        
    return false;
}

console.log(ans);