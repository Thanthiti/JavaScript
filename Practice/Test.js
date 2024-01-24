/*
const animals = ["Ant", 'Bat', 'Cat', 'Dog']
let a=  0
animals.forEach((i) =>{
    let s= 0
    console.log(animals[a++])
})
console.log(a)

let str = "THanthiti"
console.log(str.length)
*/
let num = [1,2,3,4,5,6]
let sum = 10;
const Re =  num.filter((num,sum,sd,s)=>{
    console.log(sd)
    return  num % 2 == 0
},0)
console.log(Re)