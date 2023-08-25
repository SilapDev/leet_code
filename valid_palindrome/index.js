var isPalindrome = function(s) {

    const filtered = filterString(s)
    const reversed = stringReverse(filtered)


    return filtered === reversed

};

const filterString = (s) => {
    const reg = new RegExp("[^a-z0-9]", "gi")
    return s.toLowerCase().replace(reg, "")
}

const stringReverse = (s) => s.split("").reverse().join("")

console.log(isPalindrome("A man, a plan, a canal: Panama"))