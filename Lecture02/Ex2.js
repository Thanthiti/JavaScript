function equation(Number){

    let Mark =['+;,-,*,/]
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
        result = Sum[count] + 
        console.log(count)
        count++
        
    });
    
}
console.log(equation("1+1"))