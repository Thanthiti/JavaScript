function getBudgets(obj){
    console.log(obj.id[0].age)
    
    obj.id.map((x,w,s)=> console.log(s),10)
    

}

const a = ({
    it:"sd",
    id: [
    { name: "John"  , age: 21, budget: 23000 },
    { name: "Steve" , age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
    {},{}
    
    ]
}); // Output: 65700

getBudgets(a)