function findWords (words, characters) {

    
    const validWords = words.filter(word => {
        console.log(word +   "   sdsd")
      return word.split('').every(char => characters.includes(char));
    });

    
  
    const sortedWords = validWords.sort((a, b) => {
        const sumA = a.split('');
        console.log(sumA.reduce((sum, char) => sum + char.charCodeAt(0), 0))
        //console.log(b.reduce((sum, char) => sum + char.charCodeAt(0), 0))

        console.log(a + " a")
        console.log(b + " b")
      const sumB = b.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
      return sumB - sumA;
    });
  
    return sortedWords;
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

