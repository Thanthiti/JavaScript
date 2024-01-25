let a =['a','b','c','a']
let b = a.reduce((sum,txt)=> sum+=txt,"srr")

console.log(b.replace(/a/g,"z"))
//const c = a.replace(/a/,"z")

//console.log(c)