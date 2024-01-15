function capTOfront(Text){
    Text = Text.split("")
    let result = ""
    for(let i = 0; i < Text.length;i++){
        
        if(Text[i].charCodeAt()  < 97)  result+= Text[i]
    }
    for(let i = 0; i < Text.length;i++){

        if(Text[i].charCodeAt()  > 97)  result+= Text[i]
    }
    console.log(result)
}


capTOfront("hApPy")
capTOfront("moveMENT")
capTOfront("shOrtCAKE")