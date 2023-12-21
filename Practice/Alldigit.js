//Program for checking for missing digit numbers [0-9] in a string
//example: 123456789 has  missing digit is 0 
//example: 53657687691428890 is not missing any digit
//example: 1981023568910 has missing digits 4, 7


const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
    let Digits = ["0","1","2","3","4","5","6","7","8","9"]
    let missing = []
    let str = `${numStr}`
    let index = 0
    let count ;
  
    for(let i = 0 ;i < Digits.length;i++){

        count = 0
        
        for(let ch of numStr){
            
            if(Digits[i] === ch) {
                break
            }
            count ++
            if(count === numStr.length){
                missing[index++] = " "+Digits[i]
            }
        }
    }
    if(missing.length != 0){
        str += ` Missing Digit =` + missing
    }
    else{
        str +=` has no missing digits`
    }
    return  str
}

console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));
