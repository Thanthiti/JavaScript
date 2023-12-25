function who(){ // mix asyn กับการเขียนTreads
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve("Palm")
        },1000)
    })
}

function what(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("lurks")
        },1000)
    })
}
function where(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("in the shadows")
        },1000)
    })
}

async function msg(){
    const a = await who()
    const b =  what()
    const c =   where()

    console.log(`${a} ${b} ${c}`)
}

msg()
console.log("We are looking for")
console.log("Hello")
