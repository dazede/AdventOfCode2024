const { readInput } = require("../fileReader.js");

const data = readInput('Day04\\input.txt');
const lines = [...data.split(/\n/)];
const word = ['X','M','A','S'];
let ans = 0;

for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    let letters = lines[lineIndex].split('');
    
    for (let index = 0; index < letters.length; index++) {
        if (letters[index] !== word[0])
            continue;

        let theMs = [index + 1, index - 1].filter((i) => i >= 0 && i < letters.length && letters[i] === word[1]).map(i=> [i, lineIndex]);
        if (lines[lineIndex-1] != undefined)
            theMs = theMs.concat([index, index + 1, index - 1].filter((i) => i >= 0 && i < letters.length && lines[lineIndex-1]?.split('')[i] === word[1]).map(i=> [i, lineIndex-1]));
        if (lines[lineIndex+1] != undefined)
            theMs = theMs.concat([index, index + 1, index - 1].filter((i) => i >= 0 && i < letters.length && lines[lineIndex+1]?.split('')[i] === word[1]).map(i=> [i, lineIndex+1]));
       
        ans += FindWord(theMs, lineIndex, index);        
    }
}

function FindWord(Marray, currentLine, currentIndex) {
    let funcAns = 0;
    Marray.forEach(MLoc => {
        let line = currentLine === MLoc[1] ? currentLine : currentLine < MLoc[1] ? MLoc[1]+1 : MLoc[1]-1;
        let index = currentIndex === MLoc[0] ? currentIndex : currentIndex < MLoc[0] ? MLoc[0]+1 : MLoc[0]-1;
        if (!helper(index, line, 2))
            return;
        index = currentIndex === index ? currentIndex : currentIndex < index ? index+1 : index-1;
        line = currentLine === line ? currentLine : currentLine < line ? line+1 : line-1;
        if (!helper(index, line, 3))
            return;
        funcAns++;
    });

    return funcAns;
}

function helper(index, lineIndex, wordIndex) {
    const letters = lines[lineIndex]?.split('');
    if (!letters) return false;
    return letters[index] === word[wordIndex];
}

console.log(ans);
