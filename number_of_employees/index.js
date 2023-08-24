const nums = [1,4,5,2,4,6,7,9]
const target = 5

let output = 0

for (let i = 0; i <= nums.length; i++) {
    if (nums[i] >= target) {
        console.log("nums[i]", nums[i])
        output++
    }
    
}

console.log(output)