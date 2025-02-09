function SwapNumber(number) {

    let Result = [number]
    let temp
    console.log(Result)
    for (let i = 1; i < number.length; i++) {
        let txt = ""
        temp = Result[i - 1][0]
        console.log(temp + " this temp")
        for (let n = 1; n < number.length; n++) {
            txt += Result[i - 1][n]
        }
        
        txt += temp
        Result.push(txt)

    }
    console.log(Result)
}

SwapNumber('1234')
SwapNumber('56789')