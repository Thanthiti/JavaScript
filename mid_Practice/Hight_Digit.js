
function highesDigit(num){
    let result
    let Text = num.toString()
    let arr = []
    //Beam
    for(let i of Text){
        arr.push(i)
    }
    console.log(arr)
    arr = arr.sort()
    console.log(arr[arr.length-1])
    
    //palm
    num = Text.split("")
    result = num[0]
    for(let i = 1;i < Text.length;i++){ //3
        if(num[i] > result){
            result = num[i]
        }
    }
    return `() -> ${result}`
}



console.log(`highesDigit ${highesDigit(379)}`)
highesDigit(2)
highesDigit(377401)
