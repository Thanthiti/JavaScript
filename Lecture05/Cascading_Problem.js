longRunningOperation(() =>{
    anotherlongRunningOperation(() =>{
        yetAnother (()=>{
            oneMore(() =>{
                lastOne(()=>{
                    console.log("where are you")
                })
            })
        })
    })
})