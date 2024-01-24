let Text = "AC D FF" // B E
//let char = ["a","b","c","d","e","f","g"]
let char = "abcdefghijklmnopqrstuvwxyz" 
let T = Text.toLowerCase()

let Test = Text.split("");

console.log(T)
let count 
let result = []
for(let i = 0;i < char.length;i++){
    count = 0
    
    for(let n = 0; n < T.length;n++){
        if(char[i] === T[n]) {
            
            count+=1
            break
        }

    }
    if(count == 0){
        result.push(char[i])
    }
    
}
console.log(result)