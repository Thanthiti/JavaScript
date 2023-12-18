function equation(Number){
    
    let count = 0
    let Sum = Number.split('')
    let result = 0;

    Sum.forEach((char) => {

        if(char == '+'){
            console.log("A")
            count++
        }else if(char == '-'){
            console.log("A")
            count++

        }else if(char == '*'){
            console.log("A")
            count++

        }else if(char == '/'){
            console.log("A")
            count++
        }
         Sum[count]
        console.log(count)
        count++
        
    });
    
}
console.log(equation("12+13"))