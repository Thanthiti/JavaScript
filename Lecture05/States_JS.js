let myPromise = new Promise(function(myResolve,myreject){

    const res = true

    if(res){
        myResolve("Resloved")
    }else{
        myreject("Fatal eror")
    }
})

myPromise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)