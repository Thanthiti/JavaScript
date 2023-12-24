let myPromise = new Promise(function(myResolve,myreject){

    myResolve()
    myreject()
})

myPromise.then(
    function(value){},
    function(eror){}
)