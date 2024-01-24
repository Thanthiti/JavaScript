
function sortStr(words){
    let value = 0
    let Arrvalue = [words.length] 
    let temp 
    
    for(let i = 0; i < words.length;i++){
       value = 0 
        for(let ch of words[i]){
            value += ch.charCodeAt()
        }
        Arrvalue[i] = value
    }
    
    for(let i = 1 ;i <= words.length;i++){
        if(Arrvalue[i] > Arrvalue[i-1]){

            //swap Acsii
            temp = Arrvalue[i-1]
            Arrvalue[i-1] = Arrvalue[i]  
            Arrvalue[i] = temp

            //swap Words
            temp = words[i-1]
            words[i-1] = words[i]
            words[i] = temp
 
        }
    }
}

function findWords(words, chars) {
    let ArrWorld = []
    let index = 0 
    
    for(let i = 0;i < words.length;i++){
        let result = ""

        for(let ch of words[i]){
            
            for(let n = 0; n < chars.length;n++) {
                if(ch === chars[n]) result += chars[n]

            }

            if(result == words[i]) ArrWorld[index++] = result
        }
    }
    
    sortStr(ArrWorld)    
    return ArrWorld
}

const words = ["cherry", "date", "honeydew", "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];
const result = findWords(words, characters);
console.log(result);
const words2 = ["date","fig","mango"];
const characters2 = ['a', 't', 'e', 'm', 'n', 'g', 'o', 'f', 'i'];
const result2 = findWords(words2, characters2);
console.log(result2);
const words3 = ["apple", "banana", "orange","kiwi"];
const characters3 = ['a', 'p', 'l', 'e', 'o', 'r', 'n', 'g'];
const result3 = findWords(words3, characters3);
console.log(result3);

module.exports = { findWords };

