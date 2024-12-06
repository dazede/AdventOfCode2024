const { readInput } = require("../fileReader.js");

let data = readInput('Day03\\input.txt');
let regex = /mul\((\d{1,3},\d{1,3})\)|don't\(\)|do\(\)/g;
const matches = [...data.matchAll(regex)];
let ans = 0;
let enable = true;

matches.forEach(element => {
    if (element[0] === "don't()" || element[0] === "do()") {
        enable = element[0] === "do()";
        return;
    }

    if (enable === false)
        return;
        
    let nums = element[1].split(',');
    ans += nums[0] * nums[1];
});

console.log(ans);