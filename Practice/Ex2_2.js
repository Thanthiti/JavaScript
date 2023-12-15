/*
function equation(Number){
    
    
    let count = 0
    let Sum = Number.split('')
    let result = 0;
    
    Sum.forEach((char) => {
        
        if(char == '+'){
            result = Sum[0] + Sum[2]
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
        
        
        count++
        
        
    });
    console.log("This result = %d",result)
    
}
console.log(equation("1+3"))
*/


function calculateEquation(equation) {
    const operators = equation.split(/[0-9]/).filter(Boolean)
    const numbers = equation.split(/[-+*/]/).map(Number)
    
   
    
    let result = numbers[0] 
    
    for (let i = 1; i < numbers.length; i++) {
      result = evalOperation(result, numbers[i] , operators[i-1]);
    }
  
    return result;
  }
  
  function evalOperation(prevResult, currentNumber, operator) {
    switch (operator) {
      case '+':
        return prevResult + currentNumber;
      case '-':
        return prevResult - currentNumber;
      case '*':
        return prevResult * currentNumber;
      case '/':
        return prevResult / currentNumber;
      default:
        return prevResult;
    }
  }
  
  const equationResult = calculateEquation("1+5");
  console.log(equationResult);