let myPromise = new Promise(function(myResolve,myreject){
    console.log("1")
    const res = 1

    if(res ){
        console.log("3")
        myResolve("Resloved")
    }else {
        myreject("Fatal eror")
    }
    
})

myPromise.then(
    
    (res) => console.log(res),
    (err) => console.log(err)
)