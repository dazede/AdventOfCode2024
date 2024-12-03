const fs = require('fs');

function readInput(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8'); 
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        return null; 
    }
}

module.exports = { readInput };