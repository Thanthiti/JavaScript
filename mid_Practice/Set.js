const num = [1,2,3,4,4,5]

console.log(num)
console.log(...new Set(num))
let bb = new Set(num)
console.log(bb)
const re = bb.reduce((sum,nums)=> {
    return sum + nums
    },0)

console.log(re)
