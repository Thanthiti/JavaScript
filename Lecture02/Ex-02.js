function equation(cal) {
    
    cal.split('').forEach((char) =>{
        //console.log(char);
        switch(char) {
            case '+':
                console.log('this +');
                break;
            case '-':
                break;
            case '*':
                break;
            case '/':
                break;
            default:
                console.log('error');
        }
    });
}

console.log(equation("11+1*2"));
