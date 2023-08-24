var topKFrequent = function(nums, k) {

    if (nums.length  === 0) return
    
    const map = new Map()

    for (const count of nums) {
        
        let s = map.get(count) || 0

        s += 1

        map.set( count, s )
        
    }



    return [ ...new Map([...map.entries()].sort((a,b) => b[1] - a[1])).keys()].splice(0,k)

};

console.log(topKFrequent([3,0,1,0], 1))