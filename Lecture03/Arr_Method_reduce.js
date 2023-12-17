const arr = [1,2,3,4]

const sum = arr.reduce((acculator,currentvalue) =>{
    return acculator + currentvalue
})

console.log(sum)
/*
*/

/*
const arr = [1,2,3,4]

function reducer(acculator,currentvalue,index){
    const retuns = acculator + currentvalue
    console.log(
        `acculator: ${acculator}, Currentvalue ${currentvalue}, index ${index}, returns: ${retuns}`
        )
        return retuns
    }
    arr.reduce(reducer)
    */