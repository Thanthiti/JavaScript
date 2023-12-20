let value1 = ['Apple',1,true]//0

let value2 = ['frise',2,true] //1
let value3 = ['Mars',2,'Apple'] //2

let value = [value1,value2,value3 ]

let index = 1
for( let i = 0; i < value.length; i++){
    
    for(let n = 0; n < value.length;n++){
        
        for(let j = 0 ; j < value.length;j++){
           
            if(index === value.length ){ // index === 3 
                
                if(value[i][n] === value[index-index][j]){ // 02
                    console.log(`value${index-i} = value${i+1}  = ${value[i][n]}`)}  
            }
            else if(value[i][n] === value[index][j]){ //01 12
                
                console.log(`value${index} = value${i+2} =  ${value[i][n]}`)
            }
        }
    }
    index++
    console.log("\n")
}
