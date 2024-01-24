function isValidIP(validip){
    let ip = validip.split(".")
    let status = false 

    if(ip.length == 4){
        for(let i of ip){
            const IPs = parseInt(i)
            if(IPs <= 255 && IPs >= 1 && i[0] != "0" && i[i.length-1] != '0'){
                status = true
            }
            else {
                status = false
                break
            }
        }
    }

    return status
}


console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3.4.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));