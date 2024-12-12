const { readInput } = require("../fileReader.js");

let data = readInput("Day05\\input.txt").split(/\n\s*\n/);
let values = data[1].split(/\n/);
let rules = data[0].split(/\r\n/);
let ans = 0;

values.forEach(element => {
    let currentvalues = element.split(",");
    let followsRule = true;
    for (let index = 0; index < rules.length; index++) {
        let currentRule = rules[index].split("|");

        if (!currentvalues.includes(currentRule[0]) || !currentvalues.includes(currentRule[1]))
            continue;

        if (currentvalues.indexOf(currentRule[0]) > currentvalues.indexOf(currentRule[1])) {
            followsRule = false;
            break;
        }
    }

    if (followsRule) {
        ans += Number(currentvalues[Math.floor(currentvalues.length / 2)]);
    }
});

console.log(ans);