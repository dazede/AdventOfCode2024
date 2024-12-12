const { readInput } = require("../fileReader.js");
const fs = require('fs');

let data = readInput("Day06\\input.txt");
let lines = data.split(/\n/);
lines = lines.map(line => line.split(''));
let ans = 0;

let currline = 0;
let currIndex = 0;
let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
let currdir = 0;

// find guard
for (let index = 0; index < lines.length; index++) {
    for (let j = 0; j < lines[index].length; j++) {
        if (lines[index][j] === '^') {
            currline = index;
            currIndex = j;
            lines[currline][currIndex] = 'X';
            ans++;
            break;
        }
    };
}

let item = '^';
while (item !== undefined) {
    while (GetItem()) {
        currline += directions[currdir][0];
        currIndex += directions[currdir][1];
    }
    currdir = (currdir + 1) % directions.length;
};

lines = lines.map(line => line.join(""));
let output = lines.join('');
fs.writeFileSync('output.txt', output, 'utf8');

console.log(ans);

function GetItem() {
    let nextLine = currline + directions[currdir][0];
    let nextIndex = currIndex + directions[currdir][1]
    item = lines[nextLine][nextIndex];
    if ( item === '.' ) {
        lines[nextLine][nextIndex] = 'X';
        ans++;
    }
    return item === '.' || item === 'X';
}