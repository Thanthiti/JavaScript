function isValidation(validip){
    let ip = validip.split(".")
    let numberip 
    let status = false
    console.log(ip)
    

    if(ip.length < 5 && ip.length >= 4){
        
        for(let i = 0;i < ip.length;i++){

            numberip = parseInt(ip[i])

            if(numberip > 1 && numberip < 255){
                status = true
                if(ip[i][0] === "0"){
                    status = false
                    break
                    
                }

            }else{
                status = false
               break
            }
        }

    }

    else{
        status = false
        
    }
    console.log(status)
}

isValidation("123.45.67.89")
isValidation("123.456.67.89")
isValidation("123.056.67.90")