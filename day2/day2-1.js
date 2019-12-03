const fs = require('fs');
let tester = (nums) => {
    for (let i = 0; i < nums.length; i += 4) {
        let command = nums[i];
        if (command == 99) {
            break;
        }
        let firstNumPos = nums[i + 1];
        let secondNumPos = nums[i + 2];
        let resultPos = nums[i + 3];
        if (command == 1) {
            nums[resultPos] = nums[firstNumPos] + nums[secondNumPos];
        } else if (command == 2) {
            nums[resultPos] = nums[firstNumPos] * nums[secondNumPos];
        }
    }
    return nums[0];
}
for (let j = 0; j < 100; j++) {
    for (let k = 0; k < 100; k++) {
        let input = fs.readFileSync("day2-data.txt", "utf8");
        let words = input.split(",");
        let nums = [];
        for (let word of words) {
            nums.push(parseInt(word));
        }
        nums[1] = j;
        nums[2] = k;
        let result = tester(nums);
        if(result == 19690720){
            console.log(j, k);
            break;
        }
    }
}

