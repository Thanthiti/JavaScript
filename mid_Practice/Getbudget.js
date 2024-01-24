function getBudgets(budgets){
    const result = budgets.reduce((sum,arr,ss)=> {   
        console.log("\n"+sum + " this sum")
        console.log(ss + " this ss ")
        console.log(budgets[ss])
        return sum + arr.budget;
    },0)
    console.log(result)

}

getBudgets([
    { name: "John"  , age: 21, budget: 23000 },
    { name: "Steve" , age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]); // Output: 65700

getBudgets([
    { name: "John"  , age: 21, budget: 29000 },
    { name: "Steve" , age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]); // Output: 62600