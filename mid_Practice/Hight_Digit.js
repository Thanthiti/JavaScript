
function highesDigit(num){
    let result
    let Text = num.toString()
    num = Text.split("")
    result = num[0]
    for(let i = 1;i < Text.length;i++){ //3
        if(num[i] > result){
            result = num[i]
        }
    }
    return `() -> ${result}`
}


highesDigit(379)
console.log(`highesDigit ${highesDigit(379)}`)
highesDigit(2)
highesDigit(377401)
