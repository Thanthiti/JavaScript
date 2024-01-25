function simplePair(Arr,num){
    
    let result = []

    for(let i = 0;i < Arr.length;i++){ // arr = 3
        
        for(let n = 0; n < Arr.length;n++){
            if(Arr[i] * Arr[n] == num && i != n){
                
                result.push(Arr[i])
            }
        }
    }
    console.log(result)
    
    return result
}


simplePair([1, 2, 3, 4, 5, 6], 12)
simplePair([1,2,3],6)
simplePair([1,2,3],9)
