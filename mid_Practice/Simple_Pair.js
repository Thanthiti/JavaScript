function simplePair(Arr,num){
    
    let result = []

    for(let i = 0;i < Arr.length;i++){ // arr = 3
        
        for(let n = 0; n < Arr.length;n++){
            if(Arr[i] * Arr[n] == num && i != n){
                
                result.push(Arr[i])
            }
        }
    }
    console.log(result + "Asd")
    
    return result
}


simplePair([1,2,3],3)
simplePair([1,2,3,6],6)
simplePair([1,2,3],9)