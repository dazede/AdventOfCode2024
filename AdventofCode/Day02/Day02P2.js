const { readInput } = require("../fileReader.js");

let data = readInput('Day02\\input.txt');
const stringArray = data.split(/\n/);

let ans = 0;
stringArray.forEach(element => {
    let numArry = element.split(/\s/).map((num) => parseInt(num)).filter((num) => Number.isInteger(num));
    let asc = numArry[0] < numArry[1]; 

    if (isSafe(numArry, asc)) {
        ans++;
        return;
    }

    for (let index = 0; index < numArry.length; index++) {
        let array = numArry.slice(0, index).concat(numArry.slice(index + 1)); 
        /*
        let array = structuredClone(numArry)
        array.splice(index, 1);*/
        let asc = array[0] < array[1]; 
        if (isSafe(array, asc)){
            ans++;
            break;
        }
    }
});

console.log(ans);

function isSafe(array, asc) {
    return array.every((_, j) => {
        const diff = array[j] - array[j + 1];
        return !(
            Math.abs(diff) >= 4 || 
            (asc && diff >= 0) || 
            (!asc && diff <= 0) 
        );
    });
}