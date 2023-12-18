const cat = {
    name: "Pipey",
    age: 8,
    whatname(){
        return this.name
    },
}
var names = "PAlm"
function fun(){
    console.log(this.names)
}
const user= {
    name : "Thanthiti",
    Birth : 2003,
    calAge: function(){
        const current = (new Date()).getFullYear()
        return current- this.Birth
    }
}


console.log(user.calAge())
console.log(cat.whatname())

cat.name = "Nzzar"
console.log(cat.whatname())
