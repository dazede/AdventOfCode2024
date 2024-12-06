const { readInput } = require("../fileReader.js");

let data = readInput('Day03\\input.txt');
let regex = /mul\((\d{1,3},\d{1,3})\)/g;
const matches = [...data.matchAll(regex)];
let ans = 0;

matches.forEach(element => {
    let nums = element[1].split(',');
    ans += nums[0] * nums[1];
});

console.log(ans);
