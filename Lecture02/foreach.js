function re(value){
    let reser ="";

    value.split("").forEach((char) => {
        reser = char + reser
            
    });
    return reser;
}


console.log(re("Reverse Me"))