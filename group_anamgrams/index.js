var groupAnagrams = (words) => {
    if (!words.length) return [];

    const map = new Map()

    groupWords(words, map);    


    return [ ...map.values() ];
};

var groupWords = (words, map) => {
    for (const original of words) {
        const sorted = reorder(original);
        const values = map.get(sorted) || [];

        values.push(original);           
        map.set(sorted, values);         
    }
}

const reorder = (str) => str
    .split('')                         
    .sort((a, b) => a.localeCompare(b))
    .join('');                         

strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs).reverse())