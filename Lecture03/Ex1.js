let value1 = ['Apple',1,false]

let value2 = ['frise',2,true]
let value3 = ['Mars',9,'Apple']

let value = [value1,value2,value3 ]

for( let i = 0; i < value1.length; i++){
    let index = 0
    for(let n = 0; n < value1.length;n++){

        
        if (value[i][n] === 'Apple') 
            console.log(value[i][n])
            

    }
        
      
}    
