const fs = require('fs');
let input = fs.readFileSync("day1-data.txt", "utf8");
//console.log(input);
let words = input.split("\n");
//console.log(words[3]);
let mapper = (input) => {
    let calc = Math.floor(input/3) - 2;
    if(calc > 0){
        return calc + mapper(calc);
    } else{
        return 0;
    }
}
let wordsFixed = words.map(mapper);
// console.log(wordsFixed);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let result = wordsFixed.reduce(reducer, 0);

console.log(result);
