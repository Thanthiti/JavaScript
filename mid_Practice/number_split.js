function numberSplit(num){
    let result = []

        result.push(Math.floor(num/2))
        result.push(Math.ceil(num / 2))
    
    return result
}


console.log(`numberSplit (${numberSplit(4)})`)
console.log(`numberSplit (${numberSplit(10)})`)
console.log(`numberSplit (${numberSplit(11)})`)
console.log(`numberSplit (${numberSplit(-9)})`)