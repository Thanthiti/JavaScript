function promiseTimeout(ms){ // ส่งคำขอไป แล้วไปทำอย้่างอื่น
    return new Promise((resolve,reject)=>{ // ศึกษาเพิ่ม้ติม
        setTimeout(resolve,ms)
    })
}
/**
 
async function run(){ //FNมีการทำ async ต้องมี async ถึงจะมี await 
    console.log("Start")
    
    await promiseTimeout(2000)//รออีก 2 วินาที
    console.log("Stop")
}

*/

async function run(){
    console.log("Start")

     promiseTimeout(2000)
    const response =  await longRunningOperation()
    console.log(response)
    console.log("Stop")
}
async function longRunningOperation(){
    return 42
}

 
run()