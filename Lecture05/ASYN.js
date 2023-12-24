function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}
/**
 
 */
async function run(){
    console.log("Start")

    await promiseTimeout(2000)
    console.log("Stop")
}

/*
async function run(){
    console.log("Start")

    await promiseTimeout(2000)
    const response = await longRunningOperation()
    console.log(response)
    console.log("Stop")
}
async function longRunningOperation(){
    return 42
}

 */
run()