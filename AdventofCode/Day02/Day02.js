const { readInput } = require("../fileReader.js");

let data = readInput('Day02\\input.txt');
const stringArray = data.split(/\n/);

let ans = 0;
stringArray.forEach(element => {
    let numArry = element.split(/\s/).map((num) => parseInt(num)).filter((num) => Number.isInteger(num));
    let asc = numArry[0] < numArry[1]; 

    let safe = numArry.every((_, j) => {
        const diff = numArry[j] - numArry[j + 1];
        return !(
            Math.abs(diff) >= 4 || 
            (asc && diff >= 0) || 
            (!asc && diff <= 0) 
        );
    });

    if (safe)
        ans++;
});

console.log(ans);