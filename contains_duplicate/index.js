var containsDuplicate = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        j = i + 1
        console.log(nums[i], "i")
        for (let k = j; k < nums.length; k++) {
            console.log(nums[k], "k")
            if(nums[i] === nums[k]) {
                return true
            }
            
        }
        
    }

    return false

};

containsDuplicate([1,2,3,1])