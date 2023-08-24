var isAnagram = function(s, t) {
    const eq = s.length === t.length
    if (!eq) return false
  
return ReOrder(s) === ReOrder(t)

};

function ReOrder(s) {

    console.log(s.split("").sort((a,b) => a.localeCompare(b)).join(""))

    return s.split("").sort((a, b) => a.localeCompare(b)).join("")

}

isAnagram("anagram", "naagram")