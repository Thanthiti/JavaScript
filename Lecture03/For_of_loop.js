let str = "Hello"
/*

let iterators = str[Symbol.iterator]()

while(true){
    let result = iterators.next()
    if(result.done) break
    console.log(result.value)
}
*/
for(let ch of str){
    console.log(ch.toUpperCase())
}