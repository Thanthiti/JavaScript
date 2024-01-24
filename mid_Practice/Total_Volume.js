function totalvolume(...args){
    let sum 
    let result = 0
    for(let i of args){
        sum = 1
        for(let n = 0;n < i.length;n++){
            sum = sum *  i[n]
        }
        result+= sum
    }
    console.log(result)
}

totalvolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])
totalvolume([2,2,2],[2,1,1])
totalvolume([1,1,1])