function Critialcode(){
    throw "throwing an expeption"
}
function logError(theexpetion){
    console.log(theexpetion)
}

console.log("\n------------try..Catch----------------\n")
try{
    Critialcode()
}catch(ex){
    console.log("Got an eror")
    logError(ex)
}

console.log("\n------------Trowing in try----------------\n")
try{
    throw "An expeption that is throw every time"

}catch(ex){
    console.log("Got an eror")
    logError(ex)

}
console.log("\n------------try..Catch..Finally----------------\n")
try{
    Critialcode()
}catch(ex){
    console.log("Got an error")
    logError(ex)
}finally{
    console.log("Code that always will run")
}

function hello(){
    console.log("\n**************Throwing Exeption**********\n")
}

console.log("\n------------try..Catch----------------\n")