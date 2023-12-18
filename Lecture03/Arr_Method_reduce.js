/*
const arr = [1,2,3,4]

const sum = arr.reduce((acculator,currentvalue) =>{
    console.log("This's accu;ator : "+acculator)
    console.log("THis is currentvalue"+currentvalue)
    return acculator + currentvalue
})

console.log(sum)
*/

/*
*/
const arr = [11,12,13,14]

function reducer(acculator,currentvalue,index){
    console.log("This's accu;ator : "+acculator)
    console.log("This's currentvalue : "+currentvalue)
    
    const retuns = acculator + currentvalue
    console.log(
        `acculator: ${acculator}, Currentvalue ${currentvalue}, index ${index}, returns: ${retuns}`
        )
        return retuns
    }
arr.reduce(reducer)