let n =[10] 
n.forEach(element => {
    console.log(element)   
});



const obj1 = {
    person: "Thanthiti",
    weight: 53
}

//const obj2 = obj1
const obj2 = Object.assign({},obj1)
//const obj2 = {... obj1}
obj2.weight = 75
console.log(obj1)
console.log(obj2)