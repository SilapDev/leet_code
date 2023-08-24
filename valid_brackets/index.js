var isValid = (s) => {
    const stack = []
    
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    
    for (const char of s) {
        console.log(stack)

        console.log("char", char)

        const isBracket = (char in map)

        console.log("char in map", (char in map))

        if (!isBracket) { stack.push(char); continue; }/* Space O(N) */

        console.log("!bracket", !isBracket)

        const isEqual = (stack[stack.length - 1] === map[char])
        if (isEqual) { stack.pop(); continue; }

    }

    return (stack.length === 0);
};

console.log(isValid("(){}[}]"))