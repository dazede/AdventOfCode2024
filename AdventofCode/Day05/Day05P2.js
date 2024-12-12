const { readInput } = require("../fileReader.js");

let data = readInput("Day05\\input.txt").split(/\n\s*\n/);
let values = data[1].split(/\n/);
let rules = data[0].split(/\r\n/);
let ans = 0;

// 4294 too high

values.forEach(element => {
    let currentvalues = element.split(",");
    let results = checkRules(rules, currentvalues);
    let followsRule = results[0];
    
    if (followsRule) 
        return;

    while (!followsRule) {
        results = checkRules(rules, results[1]);
        followsRule = results[0];
    }

    ans += Number(results[1][Math.floor(results[1].length / 2)]);
});

console.log(ans);

function checkRules(rules, currentvalues) {
    let followsRule =  true;
    for (let index = 0; index < rules.length; index++) {
        let currentRule = rules[index].split("|");
        if (!currentvalues.includes(currentRule[0]) || !currentvalues.includes(currentRule[1]))
            continue;

        if (currentvalues.indexOf(currentRule[0]) > currentvalues.indexOf(currentRule[1])) {
            followsRule = false;
            let num = currentvalues.splice(currentvalues.indexOf(currentRule[0]), 1);
            if (currentvalues.indexOf(currentRule[1]) === 0)
                currentvalues.splice(0, 0, num[0]);
            else
                currentvalues.splice(currentvalues.indexOf(currentRule[1]) - 1, 0, num[0]);
        }
    }

    return [followsRule, currentvalues];
}