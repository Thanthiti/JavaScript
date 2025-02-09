function generatePalm(data) {
    const ages = data.id.map(person => person.age); 
    const budgets = data.id.map(person => person.budget); 
    const cities = [...new Set(data.id.filter(person => person.budget > 10000 && person.budget < 30000)
        .map(person => person.city)
    )];
    const palm = {
        name: "Palm",
        age: Math.floor(ages.reduce((sum, age) => sum + age, 0) / ages.length),  
        budget: Math.max(...budgets), 
        city: cities[0]
    };
    return palm;
}
const data = {
    id: [
        { name: "Best", age: 28, budget: 30000, city: "New York" },
        { name: "Arm", age: 21, budget: 15000, city: "London" },
        { name: "Gust", age: 35, budget: 40000, city: "Arizona" },
        { name: "Dream", age: 19, budget: 10000, city: "Tokyo" },
        { name: "Pond", age: 25, budget: 50000, city: "Ohio" }
    ]};
data.id.push(generatePalm(data));
console.log("Updated Data:", data);