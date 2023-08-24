const repeatedSubstringPattern = (str) => {

    let result = false

    let sameCount = 1

    for (let i = 1; i < str.length; i++) {
        if(str[i] === str[0] ) {
            sameCount++
        } else {
            break
        }        

    }

    if (sameCount > 1 && sameCount === str.length) {
        result = true
    } else {


        newSub = 0

        for (let i = 2; i <= str.length / 2; i++) {
            


            if (str.length % i === 0) {
                let sub = str.substring(0, i)

                skip = false



                for (var j = sub.length; j <= str.length - sub.length; j+= sub.length) {
                    if (str.indexOf(sub, j) !== j) {
                        result = false
                        skip = true
                        break
                    }
                    newSub = j
                    
                }

                if (!skip &&  j === str.length) {
                    result = true
                    break
                }


            }

        }


    }



    return result

}


const str = "asasasasas"


console.log(repeatedSubstringPattern(str))